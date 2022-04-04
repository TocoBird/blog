import { PageProps } from 'gatsby';
import { Res, ResTocoBlog } from '../response/index';
import { DomainBlog } from '../domain/blog';

interface useReturn {
  readonly blogs: DomainBlog[];
}
export const adapterDomainIndex = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblogs: ResTocoBlog[] = res?.strapi?.tocoBlogs?.data || [];

  /**
   * ドメインに変換
   */
  const blogs: DomainBlog[] = resblogs.map(r => ({
    id: r?.id || 0,
    title: r?.attributes?.mainTitle || '',
    text: r?.attributes?.mainText || '',
    thumbnail: r?.attributes?.thumbnail?.data?.attributes?.url || '',
  }));

  return { blogs };
};
