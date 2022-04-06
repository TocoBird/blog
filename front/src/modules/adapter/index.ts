import { PageProps } from 'gatsby';
import { Res, ResTocoBlog, ResCategory } from '../interfaces/response/index';
import {
  DomainTopPageBlog,
  DomainTopPageCategory,
} from '../interfaces/domain/category';

interface useReturn {
  readonly categories: DomainTopPageCategory[];
}
export const adapterDomainIndex = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resCategories: ResCategory[] = res?.strapi?.categories?.data || [];

  /**
   * ドメインに変換
   */
  const categories: DomainTopPageCategory[] = resCategories.map(r => {
    const resblogs: ResTocoBlog[] = r?.attributes?.toco_blogs?.data || [];

    // ブログ一覧
    const blogs: DomainTopPageBlog[] = resblogs.map(b => ({
      id: b?.id || 0,
      title: b?.attributes?.mainTitle || '',
      thumbnail: b?.attributes?.thumbnail?.data?.attributes?.url || '',
    }));

    return {
      id: r?.id || 0,
      name: r?.attributes?.name || '',
      blogs,
    };
  });

  return { categories };
};
