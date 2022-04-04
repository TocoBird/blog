import { PageProps } from 'gatsby';
import { Res, ResTocoBlog } from '../response/articleDetail';
import { DomainBlog } from '../domain/blog';

interface useReturn {
  readonly blog: DomainBlog;
}
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblog: ResTocoBlog =
    res?.strapi?.tocoBlog?.data || ({} as ResTocoBlog);

  /**
   * ドメインに変換
   */
  const blog: DomainBlog = {
    id: resblog?.id || 0,
    title: resblog?.attributes?.mainTitle || '',
    text: resblog?.attributes?.mainText || '',
  };

  return { blog };
};
