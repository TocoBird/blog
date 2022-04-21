import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, TagNode } from '@/modules/common/markdown';
import { Res } from '@/modules/interfaces/response/articleDetail';
import { ResCategory } from '@/modules/interfaces/response/articleDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/articleDetail/favoriteBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/articleDetail/storyBlogs';
import {
  ResTocoBlog,
  ResCategoryAttributeRelatedBlog,
} from '@/modules/interfaces/response/articleDetail/tocoBlog';

/**
 * レスポンス取得: ブログ一覧
 */
const getResTocoBlog = (r: Res): ResTocoBlog => {
  try {
    return r.strapi.tocoBlog.data || ({} as ResTocoBlog);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ブログ');
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
 * レスポンス取得: 関連記事一覧
 */
const getResRelatedBlogAttributeBlog = (
  r: Res
): ResCategoryAttributeRelatedBlog[] => {
  try {
    return (
      r.strapi.tocoBlog.data.attributes.category.data.attributes.toco_blogs
        .data || ([] as ResCategoryAttributeRelatedBlog[])
    );
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンス取得: ストーリー記事一覧
 */
const getResStoryBlogs = (r: Res): ResStoryBlog[] => {
  try {
    return r.strapi.storyBlogs.data || ([] as ResStoryBlog[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ストーリー記事一覧');
  }
};

/**
 * レスポンスドメイン変換: ブログ詳細
 */
const getDomainBlog = (resblog: ResTocoBlog): DomainArticleDetailBlog => {
  try {
    const id = Number(resblog.id) || 0;
    const title = String(resblog.attributes.mainTitle) || '';
    const text = String(resblog.attributes.mainText) || '';
    const updatedAt =
      dayjs(resblog.attributes.updatedAt).format('YYYY/M/D') || '';
    const thumbnail =
      String(resblog.attributes.thumbnail.data.attributes.url) || '';
    const categoryId = Number(resblog.attributes.category.data.id) || 0;
    const categoryName =
      String(resblog.attributes.category.data.attributes.name) || '';

    // 本文をNodeに変換
    const textNodes: TagNode[] = convertNodes(text);

    return new DomainArticleDetailBlog(
      id,
      title,
      text,
      textNodes,
      thumbnail,
      updatedAt,
      categoryId,
      categoryName
    );
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ詳細');
  }
};

/**
 * レスポンスドメイン変換: カテゴリ一覧
 */
const getDomainCategory = (
  resCategories: ResCategory[]
): DomainArticleDetailCategory[] => {
  try {
    return resCategories.map(r => {
      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainArticleDetailCategory(id, name);
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
): DomainArticleDetailRecommendBlog[] => {
  try {
    return resFavoriteBlogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl =
        rFormats?.thumbnail?.url || rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainArticleDetailRecommendBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:お気に入りの記事一覧');
  }
};

/**
 * レスポンスドメイン変換: 関連する記事一覧
 */
const getDomainRelatedBlog = (
  relatedBlogs: ResCategoryAttributeRelatedBlog[]
): DomainArticleDetailRelatedBlog[] => {
  try {
    return relatedBlogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl = rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainArticleDetailRecommendBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:関連する記事一覧');
  }
};

/**
 * レスポンスドメイン変換: ストーリー記事一覧
 */
const getDomainStoryBlog = (
  blogs: ResStoryBlog[]
): DomainArticleDetailStoryBlog[] => {
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

      return new DomainArticleDetailStoryBlog(id, title, titleSub, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事一覧');
  }
};

interface useReturn {
  readonly blog: DomainArticleDetailBlog;
  readonly categories: DomainArticleDetailCategory[];
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
  readonly relatedBlogs: DomainArticleDetailRelatedBlog[];
  readonly stroyBlogs: DomainArticleDetailStoryBlog[];
}

/**
 * 記事詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resblog: ResTocoBlog = getResTocoBlog(res);
    const resCategory: ResCategory[] = getResCategory(res);
    const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
      getResFavoriteBlogAttributeBlog(res);
    const resRelatedBlogs: ResCategoryAttributeRelatedBlog[] =
      getResRelatedBlogAttributeBlog(res);
    const resStoryBlogs: ResStoryBlog[] = getResStoryBlogs(res);

    /**
     * ドメインに変換
     */
    const blog: DomainArticleDetailBlog = getDomainBlog(resblog);
    const categories: DomainArticleDetailCategory[] =
      getDomainCategory(resCategory);
    const favoriteBlogs: DomainArticleDetailRecommendBlog[] =
      getDomainRecommendBlog(resFavoriteBlogs);
    const relatedBlogs: DomainArticleDetailRelatedBlog[] =
      getDomainRelatedBlog(resRelatedBlogs);
    const stroyBlogs: DomainArticleDetailStoryBlog[] =
      getDomainStoryBlog(resStoryBlogs);

    return {
      blog,
      categories,
      favoriteBlogs,
      relatedBlogs,
      stroyBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
