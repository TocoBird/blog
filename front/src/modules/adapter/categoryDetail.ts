import { PageProps } from 'gatsby';
import { Res, ResTocoBlog, ResCategory } from '../response/categoryDetail';
import { DomainCategoryBlog, DomainCategory } from '../domain/blog';

interface PageContext {
  readonly id: number;
}
interface useReturn {
  readonly blogs: DomainCategoryBlog[];
  readonly categories: DomainCategory[];
  readonly categolyId: number;
}
export const adapterDomainCategoryDetail = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblogs: ResTocoBlog[] =
    res?.strapi?.tocoBlogs?.data || ([] as ResTocoBlog[]);
  const resCategory: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);
  const context = page?.pageContext as PageContext;
  const categolyId: number = context?.id || 0;

  /***
   * ドメインに変換
   */
  const blogs: DomainCategoryBlog[] = resblogs.map(r => ({
    id: r?.id || 0,
    title: r?.attributes?.mainTitle || '',
    thumbnail: r?.attributes?.thumbnail?.data?.attributes?.url || '',
  }));

  const categories: DomainCategory[] = resCategory.map(r => ({
    id: r?.id || 0,
    name: r?.attributes?.name || '',
  }));

  return { blogs, categories, categolyId };
};
