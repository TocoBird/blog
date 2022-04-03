import { useStaticQuery, graphql } from 'gatsby';
import { Res, ResTocoBlog } from '../response/index';
import { DomainBlog } from '../domain/blog';

interface useReturn {
  readonly blogs: DomainBlog[];
}
export const useFetchIndex = (): useReturn => {
  const res: Res = useStaticQuery(
    graphql`
      {
        strapi {
          tocoBlogs {
            data {
              id
              attributes {
                mainTitle
                mainText
              }
            }
          }
        }
      }
    `
  );

  const resblogs: ResTocoBlog[] = res.strapi.tocoBlogs.data;

  /**
   * ドメインに変換
   */
  const blogs: DomainBlog[] = resblogs.map(r => ({
    id: r?.id || 0,
    title: r?.attributes?.mainTitle || '',
    text: r?.attributes?.mainText || '',
  }));

  return { blogs };
};
