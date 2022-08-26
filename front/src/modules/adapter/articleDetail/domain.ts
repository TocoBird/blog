import dayjs from 'dayjs';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, TagNode } from '@/modules/common/markdown';
import { ResCategory } from '@/modules/interfaces/response/articleDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/articleDetail/favoriteBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/articleDetail/storyBlogs';
import {
  ResTocoBlog,
  ResCategoryAttributeRelatedBlog,
} from '@/modules/interfaces/response/articleDetail/tocoBlog';

/**
 * レスポンスをドメインへ変換: ブログ詳細
 */
export const getDomainBlog = (
  response: ResTocoBlog
): DomainArticleDetailBlog => {
  try {
    const id = Number(response.id) || 0;
    const title = String(response.attributes.mainTitle) || '';
    const text = String(response.attributes.mainText) || '';
    const seoDescription = String(response.attributes.seoDescription || '');
    const featureText = String(response.attributes.featureText) || '';
    const updatedAt =
      dayjs(response.attributes.updatedAt).format('YYYY/M/D') || '';
    const createdAt =
      dayjs(response.attributes.createdAt).format('YYYY/M/D') || '';
    const thumbnail =
      String(response.attributes.thumbnail.data.attributes.url) || '';
    const categoryId = Number(response.attributes.category.data.id) || 0;
    const categoryName =
      String(response.attributes.category.data.attributes.name) || '';

    // 本文をNodeに変換
    const textNodes: TagNode[] = convertNodes(text);

    return new DomainArticleDetailBlog(
      id,
      title,
      text,
      featureText,
      seoDescription,
      textNodes,
      thumbnail,
      updatedAt,
      createdAt,
      categoryId,
      categoryName
    );
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ詳細');
  }
};

/**
 * レスポンスをドメインへ変換: カテゴリ一覧
 */
export const getDomainCategory = (
  responses: ResCategory[]
): DomainArticleDetailCategory[] => {
  try {
    return responses.map(r => {
      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainArticleDetailCategory(id, name);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:カテゴリ一覧');
  }
};

/**
 * レスポンスをドメインへ変換: お気に入りの記事一覧
 */
export const getDomainRecommendBlog = (
  responses: ResFavoriteBlogAttributeBlog[]
): DomainArticleDetailRecommendBlog[] => {
  try {
    return responses.map(r => {
      const id = Number(r.id) || 0;
      const urlid = String(r.attributes.urlid) || '';
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl =
        rFormats?.thumbnail?.url || rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainArticleDetailRecommendBlog(id, urlid, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンスをドメインへ変換: 関連する記事一覧
 */
export const getDomainRelatedBlog = (
  responses: ResCategoryAttributeRelatedBlog[]
): DomainArticleDetailRelatedBlog[] => {
  try {
    return responses.map(r => {
      const id = Number(r.id) || 0;
      const urlid = String(r.attributes.urlid) || '';
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl = rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainArticleDetailRecommendBlog(id, urlid, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:関連する記事一覧');
  }
};

/**
 * レスポンスをドメインへ変換: ストーリー記事一覧
 */
export const getDomainStoryBlog = (
  responses: ResStoryBlog[]
): DomainArticleDetailStoryBlog[] => {
  try {
    return responses.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.title) || '';
      const titleSub = String(r.attributes.titleSub) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl = rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainArticleDetailStoryBlog(id, title, titleSub, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事一覧');
  }
};
