import { PageProps } from 'gatsby';
import dayjs from 'dayjs';
import { Res, ResTocoBlog, ResCategory } from '../response/articleDetail';
import { DomainBlogDetail, DomainCategory } from '../domain/blog';

interface useReturn {
  readonly blog: DomainBlogDetail;
  readonly categories: DomainCategory[];
}
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblog: ResTocoBlog =
    res?.strapi?.tocoBlog?.data || ({} as ResTocoBlog);
  const resCategory: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);

  /**
   * ドメインに変換
   */
  const blog: DomainBlogDetail = {
    id: resblog?.id || 0,
    title: resblog?.attributes?.mainTitle || '',
    text: resblog?.attributes?.mainText || '',
    updatedAt: dayjs(resblog?.attributes?.updatedAt).format('YYYY/M/D') || '',
    thumbnail: resblog?.attributes?.thumbnail?.data?.attributes?.url || '',
    categoryId: resblog?.attributes?.category?.data?.id || 0,
    categoryName: resblog?.attributes?.category?.data?.attributes.name || '',
  };

  const categories: DomainCategory[] = resCategory.map(r => ({
    id: r?.id || 0,
    name: r?.attributes?.name || '',
  }));

  return { blog, categories };
};
