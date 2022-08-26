import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/storyDetail';
import { ResCategory } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResRelatedStoryBlog } from '@/modules/interfaces/response/storyDetail/relatedStoryBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/storyDetail/storyBlog';

/**
 * レスポンス取得: ストーリー記事一覧
 */
export const getResStoryBlog = (r: Res): ResStoryBlog => {
  try {
    return r.strapi.storyBlog.data || ({} as ResStoryBlog);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:ストーリー記事一覧');
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
 * レスポンス取得: 関連するストーリー記事一覧
 */
export const getResRelatedStoryBlog = (r: Res): ResRelatedStoryBlog[] => {
  try {
    return r.strapi.storyBlogs.data || ([] as ResRelatedStoryBlog[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー:関連するストーリー記事一覧');
  }
};
