import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/categoryDetail';
import { ResCategory } from '@/modules/interfaces/response/categoryDetail/categories';
import { ResTocoBlog } from '@/modules/interfaces/response/categoryDetail/tocoBlogs';

/**
 * レスポンス取得: ブログ一覧
 */
export const getResTocoBlog = (r: Res): ResTocoBlog[] => {
  try {
    return r.strapi.tocoBlogs.data || ([] as ResTocoBlog[]);
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
