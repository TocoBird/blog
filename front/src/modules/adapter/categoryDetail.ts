import { PageProps } from 'gatsby';
import { Res, ResTocoBlog, ResCategory } from '../response/categoryDetail';
import { DomainCategoryBlog, DomainCategory } from '../domain/blog';

interface useReturn {
  readonly blogs: DomainCategoryBlog[];
  readonly categories: DomainCategory[];
}
export const adapterDomainCategoryDetail = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblogs: ResTocoBlog[] =
    res?.strapi?.tocoBlogs?.data || ([] as ResTocoBlog[]);
  const resCategory: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);

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

  return { blogs, categories };
};
