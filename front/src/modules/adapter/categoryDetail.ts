import { PageProps } from 'gatsby';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/categoryDetail';
import { ResCategory } from '@/modules/interfaces/response/categoryDetail/categories';
import { ResTocoBlog } from '@/modules/interfaces/response/categoryDetail/tocoBlogs';

/**
 * レスポンス取得: ブログ一覧
 */
const getResTocoBlog = (r: Res): ResTocoBlog[] => {
  try {
    return r.strapi.tocoBlogs.data || ([] as ResTocoBlog[]);
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
 * レスポンスドメイン変換: ブログ一覧
 */
const getDomainCategoryDetailBlog = (
  resblogs: ResTocoBlog[]
): DomainCategoryDetailBlog[] => {
  try {
    return resblogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.mainTitle) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormat = rAttributes?.formats;
      const rUrl =
        rFormat?.thumbnail?.url || rFormat?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainCategoryDetailBlog(id, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ一覧');
  }
};

/**
 * レスポンスドメイン変換: カテゴリ詳細
 */
const getDomainCategoryDetailCategory = (
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

interface PageContext {
  readonly id: number;
}

interface useReturn {
  readonly blogs: DomainCategoryDetailBlog[];
  readonly categories: DomainCategoryDetailCategory[];
  readonly categolyId: number;
}

/**
 * カテゴリ詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainCategoryDetail = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resblogs: ResTocoBlog[] = getResTocoBlog(res);
    const resCategory: ResCategory[] = getResCategory(res);

    /**
     * URLParam取得
     */
    const context = page.pageContext as PageContext;
    const categolyId = Number(context.id) || 0;

    /**
     * ドメインに変換
     */
    const blogs: DomainCategoryDetailBlog[] =
      getDomainCategoryDetailBlog(resblogs);
    const categories: DomainCategoryDetailCategory[] =
      getDomainCategoryDetailCategory(resCategory);

    return {
      blogs,
      categories,
      categolyId,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
