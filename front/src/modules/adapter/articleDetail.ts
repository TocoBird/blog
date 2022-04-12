import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { errorWrapper } from '@/modules/common/error';
import { convertNodes, Node } from '@/modules/common/markdown';
import {
  Res,
  ResTocoBlog,
  ResCategory,
  ResFavoriteBlogAttributeBlog,
} from '@/modules/interfaces/response/articleDetail';

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
 * レスポンスドメイン変換: ブログ詳細
 */
const getDomainArticleDetailBlog = (
  resblog: ResTocoBlog
): DomainArticleDetailBlog => {
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
    const textNodes: Node[] = convertNodes(text);

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
const getDomainArticleDetailCategory = (
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
const getDomainArticleDetailRecommendBlog = (
  resFavoriteBlogs: ResFavoriteBlogAttributeBlog[]
): DomainArticleDetailRecommendBlog[] => {
  try {
    return resFavoriteBlogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const thumbnail =
        String(r.attributes.thumbnail.data.attributes.url) || '';

      return new DomainArticleDetailRecommendBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:お気に入りの記事一覧');
  }
};

interface useReturn {
  readonly blog: DomainArticleDetailBlog;
  readonly categories: DomainArticleDetailCategory[];
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
}

/**
 * 記事詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  try {
    const res = page.data as Res;
    const resblog: ResTocoBlog = getResTocoBlog(res);
    const resCategory: ResCategory[] = getResCategory(res);
    const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
      getResFavoriteBlogAttributeBlog(res);

    /**
     * ドメインに変換
     */
    const blog: DomainArticleDetailBlog = getDomainArticleDetailBlog(resblog);
    const categories: DomainArticleDetailCategory[] =
      getDomainArticleDetailCategory(resCategory);
    const favoriteBlogs: DomainArticleDetailRecommendBlog[] =
      getDomainArticleDetailRecommendBlog(resFavoriteBlogs);

    return {
      blog,
      categories,
      favoriteBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
