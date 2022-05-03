import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { DomainStoryDetailBlog } from '@/domain/storyDetail/blog';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailRelatedStoryBlog } from '@/domain/storyDetail/relatedStoryBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, TagNode } from '@/modules/common/markdown';
import { Res } from '@/modules/interfaces/response/storyDetail';
import { ResCategory } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResRelatedStoryBlog } from '@/modules/interfaces/response/storyDetail/relatedStoryBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/storyDetail/storyBlog';

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
 * レスポンス取得: カテゴリ一覧
 */
const getResCategory = (r: Res): ResCategory[] => {
  try {
    return r.strapi.categories.data || ([] as ResCategory[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:カテゴリ');
  }
};

/**
 * レスポンス取得: お気に入りの記事一覧
 */
const getResFavoriteBlogAttributeBlog = (
  r: Res
): ResFavoriteBlogAttributeBlog[] => {
  try {
    return (
      r.strapi.favoriteBlog.data.attributes.toco_blogs.data ||
      ([] as ResFavoriteBlogAttributeBlog[])
    );
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンス取得: 関連するストーリー記事一覧
 */
const getResRelatedStoryBlog = (r: Res): ResRelatedStoryBlog[] => {
  try {
    return r.strapi.storyBlogs.data || ([] as ResRelatedStoryBlog[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:関連するストーリー記事一覧');
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

/**
 * レスポンスドメイン変換: カテゴリ一覧
 */
const getDomainCategory = (
  resCategories: ResCategory[]
): DomainStoryDetailCategory[] => {
  try {
    return resCategories.map(r => {
      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainStoryDetailCategory(id, name);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:カテゴリ一覧');
  }
};

/**
 * レスポンスドメイン変換: お気に入りの記事一覧
 */
const getDomainRecommendBlog = (
  resFavoriteBlogs: ResFavoriteBlogAttributeBlog[]
): DomainStoryDetailRecommendBlog[] => {
  try {
    return resFavoriteBlogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl =
        rFormats?.thumbnail?.url || rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainStoryDetailRecommendBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンスドメイン変換: 関連するストーリー記事一覧
 */
const getDomainRelatedStoryBlog = (
  blogs: ResRelatedStoryBlog[]
): DomainStoryDetailRelatedStoryBlog[] => {
  try {
    return blogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.title) || '';
      const titleSub = String(r.attributes.titleSub) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl =
        rFormats?.thumbnail?.url || rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainStoryDetailRelatedStoryBlog(
        id,
        title,
        titleSub,
        thumbnail
      );
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:関連するストーリー記事一覧');
  }
};

interface useReturn {
  readonly storyBlog: DomainStoryDetailStoryBlog;
  readonly categories: DomainStoryDetailCategory[];
  readonly favoriteBlogs: DomainStoryDetailRecommendBlog[];
  readonly relatedStoryBlogs: DomainStoryDetailRelatedStoryBlog[];
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
    const resCategory: ResCategory[] = getResCategory(res);
    const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
      getResFavoriteBlogAttributeBlog(res);
    const resStoryBlogs: ResRelatedStoryBlog[] = getResRelatedStoryBlog(res);

    /**
     * ドメインに変換
     */
    const storyBlog: DomainStoryDetailStoryBlog =
      getDomainStoryBlog(resStoryBlog);
    const categories: DomainStoryDetailCategory[] =
      getDomainCategory(resCategory);
    const favoriteBlogs: DomainStoryDetailRecommendBlog[] =
      getDomainRecommendBlog(resFavoriteBlogs);
    const relatedStoryBlogs: DomainStoryDetailRelatedStoryBlog[] =
      getDomainRelatedStoryBlog(resStoryBlogs);

    return {
      storyBlog,
      categories,
      favoriteBlogs,
      relatedStoryBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
