import { PageProps } from 'gatsby';
import {
  getDomainCategoryDetailBlog,
  getDomainCategoryDetailCategory,
} from './domain';
import { getResTocoBlog, getResCategory } from './response';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/categoryDetail';
import { ResCategory } from '@/modules/interfaces/response/categoryDetail/categories';
import { ResTocoBlog } from '@/modules/interfaces/response/categoryDetail/tocoBlogs';

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
