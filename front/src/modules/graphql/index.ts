import { useStaticQuery, graphql } from 'gatsby';
import { Res, ResTocoBlog } from '../response/index';
import { DomainBlog } from '../domain/blog';

interface FetchReturn {
  readonly blogs: DomainBlog[];
}
export const useIndex = (): FetchReturn => {
  const data: Res = useStaticQuery(
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

  const resblogs: ResTocoBlog[] = data.strapi.tocoBlogs.data;
  const blogs: DomainBlog[] = resblogs.map(r => ({
    id: r.id,
    title: r.attributes.mainTitle,
    text: r.attributes.mainText,
  }));

  return { blogs };
};
