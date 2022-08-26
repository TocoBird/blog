import { errorWrapper } from '@/modules/common/error';
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
export const getResTocoBlog = (r: Res): ResTocoBlog => {
  try {
    return r.strapi.tocoBlog.data || ({} as ResTocoBlog);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ブログ');
  }
};

/**
 * レスポンス取得: カテゴリ一覧
 */
export const getResCategory = (r: Res): ResCategory[] => {
  try {
    return r.strapi.categories.data || ([] as ResCategory[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:カテゴリ');
  }
};

/**
 * レスポンス取得: お気に入りの記事一覧
 */
export const getResFavoriteBlogAttributeBlog = (
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
export const getResRelatedBlogAttributeBlog = (
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
export const getResStoryBlogs = (r: Res): ResStoryBlog[] => {
  try {
    return r.strapi.storyBlogs.data || ([] as ResStoryBlog[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ストーリー記事一覧');
  }
};
