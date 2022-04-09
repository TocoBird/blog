import { PageProps } from 'gatsby';
import {
  Res,
  ResTocoBlog,
  ResCategory,
} from '@/modules/interfaces/response/categoryDetail';
import { DomainCategoryBlog, DomainCategory } from '@/modules/domain/blog';

interface PageContext {
  readonly id: number;
}
interface useReturn {
  readonly blogs: DomainCategoryBlog[];
  readonly categories: DomainCategory[];
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
  const blogs: DomainCategoryBlog[] = resblogs.map(r => ({
    id: Number(r?.id) || 0,
    title: String(r?.attributes?.mainTitle) || '',
    thumbnail: String(r?.attributes?.thumbnail?.data?.attributes?.url) || '',
  }));

  const categories: DomainCategory[] = resCategory.map(r => ({
    id: Number(r?.id) || 0,
    name: String(r?.attributes?.name) || '',
  }));

  return { blogs, categories, categolyId };
};
