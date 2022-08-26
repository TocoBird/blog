import dayjs from 'dayjs';
import { DomainStoryDetailBlog } from '@/domain/storyDetail/blog';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailRelatedStoryBlog } from '@/domain/storyDetail/relatedStoryBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, TagNode } from '@/modules/common/markdown';
import { ResCategory } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResRelatedStoryBlog } from '@/modules/interfaces/response/storyDetail/relatedStoryBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/storyDetail/storyBlog';

/**
 * レスポンスをドメインへ変換: ストーリー記事詳細の記事一覧
 */
export const getDomainBlog = (r: ResStoryBlog): DomainStoryDetailBlog[] => {
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
      const urlid = String(rAttributes.urlid) || '';
      const introduceTitle = String(b.title) || '';
      const introduceText = String(b.text) || '';

      return new DomainStoryDetailBlog(
        id,
        urlid,
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
 * レスポンスをドメインへ変換: ストーリー記事詳細
 */
export const getDomainStoryBlog = (
  r: ResStoryBlog
): DomainStoryDetailStoryBlog => {
  try {
    const title = String(r.attributes.title) || '';
    const titleSub = String(r.attributes.titleSub) || '';
    const textIntroduction = String(r.attributes.textIntroduction) || '';
    const textConclusion = String(r.attributes.textConclusion) || '';
    const updatedAt = dayjs(r.attributes.updatedAt).format('YYYY/M/D') || '';
    const createdAt = dayjs(r.attributes.createdAt).format('YYYY/M/D') || '';
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
      createdAt,
      blogs
    );
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事詳細');
  }
};

/**
 * レスポンスをドメインへ変換: カテゴリ一覧
 */
export const getDomainCategory = (
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
 * レスポンスをドメインへ変換: お気に入りの記事一覧
 */
export const getDomainRecommendBlog = (
  resFavoriteBlogs: ResFavoriteBlogAttributeBlog[]
): DomainStoryDetailRecommendBlog[] => {
  try {
    return resFavoriteBlogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const urlid = String(r.attributes.urlid) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl =
        rFormats?.thumbnail?.url || rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainStoryDetailRecommendBlog(id, urlid, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンスをドメインへ変換: 関連するストーリー記事一覧
 */
export const getDomainRelatedStoryBlog = (
  blogs: ResRelatedStoryBlog[]
): DomainStoryDetailRelatedStoryBlog[] => {
  try {
    return blogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.title) || '';
      const titleSub = String(r.attributes.titleSub) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl = rFormats?.small?.url || rAttributes.url;
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
