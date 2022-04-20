import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { DomainStoryDetailBlog } from '@/domain/storyDetail/blog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, TagNode } from '@/modules/common/markdown';
import { Res } from '@/modules/interfaces/response/storyDetail';
import { ResStoryBlog } from '@/modules/interfaces/response/storyDetail/storyBlogs';

/**
 * レスポンス取得: ストーリー記事一覧
 */
const getResStoryBlog = (r: Res): ResStoryBlog => {
  try {
    return r.strapi.storyBlog.data || ({} as ResStoryBlog);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ストーリー記事一覧');
  }
};

/**
 * レスポンスドメイン変換: ストーリー記事詳細の記事一覧
 */
const getDomainBlog = (r: ResStoryBlog): DomainStoryDetailBlog[] => {
  try {
    return r.attributes.toco_blogs.map(b => {
      const id = Number(b.toco_blog.data.id) || 0;
      const rAttributes = b.toco_blog.data.attributes;
      const rThumbnailAttributes = rAttributes.thumbnail.data.attributes;
      const rFormats = rThumbnailAttributes.formats;
      const rUrl =
        rFormats?.thumbnail?.url ||
        rFormats?.small?.url ||
        rThumbnailAttributes.url;
      const thumbnail = String(rUrl) || '';

      const title = String(rAttributes.mainTitle) || '';
      const introduceTitle = String(b.title) || '';
      const introduceText = String(b.text) || '';

      return new DomainStoryDetailBlog(
        id,
        introduceTitle,
        introduceText,
        title,
        thumbnail
      );
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事詳細の記事一覧');
  }
};

/**
 * レスポンスドメイン変換: ストーリー記事詳細
 */
const getDomainStoryBlog = (r: ResStoryBlog): DomainStoryDetailStoryBlog => {
  try {
    const title = String(r.attributes.title) || '';
    const titleSub = String(r.attributes.titleSub) || '';
    const textIntroduction = String(r.attributes.textIntroduction) || '';
    const textConclusion = String(r.attributes.textConclusion) || '';
    const updatedAt = dayjs(r.attributes.updatedAt).format('YYYY/M/D') || '';
    const thumbnail = String(r.attributes.thumbnail.data.attributes.url) || '';

    // 本文をNodeに変換
    const textIntroductionNodes: TagNode[] = convertNodes(textIntroduction);
    const textConclusionNodes: TagNode[] = convertNodes(textConclusion);

    // ブログ一覧
    const blogs: DomainStoryDetailBlog[] = getDomainBlog(r);

    return new DomainStoryDetailStoryBlog(
      title,
      titleSub,
      thumbnail,
      textIntroductionNodes,
      textConclusionNodes,
      updatedAt,
      blogs
    );
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事詳細');
  }
};

interface PageContext {
  readonly id: number;
}

interface useReturn {
  readonly storyBlogId: number;
  readonly storyBlog: DomainStoryDetailStoryBlog;
}

/**
 * カテゴリ詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainStoryDetail = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resStoryBlog: ResStoryBlog = getResStoryBlog(res);

    /**
     * URLParam取得
     */
    const context = page.pageContext as PageContext;
    const storyBlogId = Number(context.id) || 0;

    /***
     * ドメインに変換
     */
    const storyBlog: DomainStoryDetailStoryBlog =
      getDomainStoryBlog(resStoryBlog);

    return {
      storyBlogId,
      storyBlog,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
