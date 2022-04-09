import { PageProps } from 'gatsby';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import {
  Res,
  ResTocoBlog,
  ResCategory,
} from '@/modules/interfaces/response/categoryDetail';

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
  const res = page?.data as Res;
  const resblogs: ResTocoBlog[] =
    res?.strapi?.tocoBlogs?.data || ([] as ResTocoBlog[]);
  const resCategory: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);
  const context = page?.pageContext as PageContext;
  const categolyId = Number(context?.id) || 0;

  /***
   * ドメインに変換
   */
  const blogs: DomainCategoryDetailBlog[] = resblogs.map(r => {
    const id = Number(r?.id) || 0;
    const title = String(r?.attributes?.mainTitle) || '';
    const thumbnail =
      String(r?.attributes?.thumbnail?.data?.attributes?.url) || '';

    return {
      id,
      title,
      thumbnail,
    };
  });

  const categories: DomainCategoryDetailCategory[] = resCategory.map(r => {
    const id = Number(r?.id) || 0;
    const name = String(r?.attributes?.name) || '';

    return { id, name };
  });

  return { blogs, categories, categolyId };
};
