import { PageProps } from 'gatsby';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import { errorWrapper } from '@/modules/common/error';
import {
  Res,
  ResTocoBlog,
  ResCategory,
} from '@/modules/interfaces/response/index';

/**
 * レスポンス取得: カテゴリ一覧
 */
const getResCategory = (r: Res): ResCategory[] => {
  try {
    return r.strapi.categories.data || ([] as ResCategory[]);
  } catch (e) {
    throw errorWrapper(e, 'レスポンス取得エラー');
  }
};

/**
 * レスポンスドメイン変換: ブログ一覧
 */
const getDomainTopCategoryBlog = (
  resblogs: ResTocoBlog[]
): DomainTopCategoryBlog[] => {
  try {
    return resblogs.map(b => {
      const id = Number(b.id) || 0;
      const title = String(b.attributes.mainTitle) || '';
      const resAttributes = b.attributes.thumbnail.data.attributes;
      const resUrl = resAttributes?.formats?.small?.url || resAttributes.url;
      const thumbnail = String(resUrl) || '';

      return new DomainTopCategoryBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ一覧');
  }
};

/**
 * レスポンスドメイン変換: カテゴリ一覧
 */
const getDomainTopCategory = (
  resCategories: ResCategory[]
): DomainTopCategory[] => {
  try {
    return resCategories.map(r => {
      const resblogs: ResTocoBlog[] =
        r.attributes.toco_blogs.data || ([] as ResTocoBlog[]);

      // 記事一覧
      const blogs: DomainTopCategoryBlog[] = getDomainTopCategoryBlog(resblogs);

      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainTopCategory(id, name, blogs);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:カテゴリ一覧');
  }
};

interface useReturn {
  readonly categories: DomainTopCategory[];
}

/**
 * トップページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainIndex = (page: PageProps): useReturn => {
  try {
    const res = page.data as Res;
    const resCategories: ResCategory[] = getResCategory(res);

    /**
     * ドメインに変換
     */
    const categories: DomainTopCategory[] = getDomainTopCategory(resCategories);

    return {
      categories,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
