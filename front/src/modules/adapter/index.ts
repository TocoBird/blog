import { PageProps } from 'gatsby';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import {
  Res,
  ResTocoBlog,
  ResCategory,
} from '@/modules/interfaces/response/index';

interface useReturn {
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainIndex = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resCategories: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);

  /**
   * ドメインに変換
   */
  const categories: DomainTopCategory[] = resCategories.map(r => {
    const resblogs: ResTocoBlog[] =
      r?.attributes?.toco_blogs?.data || ([] as ResTocoBlog[]);

    // 記事一覧
    const blogs: DomainTopCategoryBlog[] = resblogs.map(b => {
      const id = Number(b?.id) || 0;
      const title = String(b?.attributes?.mainTitle) || '';
      const thumbnail =
        String(b?.attributes?.thumbnail?.data?.attributes?.url) || '';

      return new DomainTopCategoryBlog(id, title, thumbnail);
    });

    const id = Number(r?.id) || 0;
    const name = String(r?.attributes?.name) || '';
    return new DomainTopCategory(id, name, blogs);
  });

  return { categories };
};
