import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { errorWrapper } from '@/modules/common/error';
import { ResCategory } from '@/modules/interfaces/response/categoryDetail/categories';
import { ResTocoBlog } from '@/modules/interfaces/response/categoryDetail/tocoBlogs';

/**
 * レスポンスをドメインへ変換: ブログ一覧
 */
export const getDomainCategoryDetailBlog = (
  resblogs: ResTocoBlog[]
): DomainCategoryDetailBlog[] => {
  try {
    return resblogs.map(r => {
      const id = Number(r.id) || 0;
      const urlid = String(r.attributes.urlid) || '';
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormat = rAttributes?.formats;
      const rUrl = rFormat?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainCategoryDetailBlog(id, urlid, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ一覧');
  }
};

/**
 * レスポンスをドメインへ変換: カテゴリ詳細
 */
export const getDomainCategoryDetailCategory = (
  resCategories: ResCategory[]
): DomainCategoryDetailCategory[] => {
  try {
    return resCategories.map(r => {
      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainCategoryDetailCategory(id, name);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:カテゴリ詳細');
  }
};
