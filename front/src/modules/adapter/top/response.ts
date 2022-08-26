import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/home';
import { ResCategory } from '@/modules/interfaces/response/home/categories';
import { ResStoryBlog } from '@/modules/interfaces/response/home/storyBlogs';

/**
 * レスポンス取得: カテゴリ一覧
 */
export const getResCategory = (r: Res): ResCategory[] => {
  try {
    return r.strapi.categories.data || ([] as ResCategory[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー');
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
