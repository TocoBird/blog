import { PageProps } from 'gatsby';
import dayjs from 'dayjs';
import {
  Res,
  ResTocoBlog,
  ResCategory,
  ResFavoriteBlogAttributeBlog,
} from '@/modules/interfaces/response/articleDetail';
import {
  DomainBlogDetail,
  DomainCategory,
  DomainFavoriteBlog,
} from '@/modules/domain/articleDetail';

interface useReturn {
  readonly blog: DomainBlogDetail;
  readonly categories: DomainCategory[];
  readonly favoriteBlogs: DomainFavoriteBlog[];
}
/**
 * 記事詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  const res = page?.data as Res;
  const resblog: ResTocoBlog =
    res?.strapi?.tocoBlog?.data || ({} as ResTocoBlog);
  const resCategory: ResCategory[] =
    res?.strapi?.categories?.data || ([] as ResCategory[]);
  const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
    res?.strapi?.favoriteBlog?.data?.attributes?.toco_blogs?.data ||
    ([] as ResFavoriteBlogAttributeBlog[]);

  /**
   * ドメインに変換
   */
  const blog: DomainBlogDetail = {
    id: Number(resblog?.id) || 0,
    title: String(resblog?.attributes?.mainTitle) || '',
    text: String(resblog?.attributes?.mainText) || '',
    updatedAt: dayjs(resblog?.attributes?.updatedAt).format('YYYY/M/D') || '',
    thumbnail:
      String(resblog?.attributes?.thumbnail?.data?.attributes?.url) || '',
    categoryId: Number(resblog?.attributes?.category?.data?.id) || 0,
    categoryName:
      String(resblog?.attributes?.category?.data?.attributes.name) || '',
  };

  const categories: DomainCategory[] = resCategory.map(r => ({
    id: Number(r?.id) || 0,
    name: String(r?.attributes?.name) || '',
  }));

  const favoriteBlogs: DomainFavoriteBlog[] = resFavoriteBlogs.map(r => ({
    id: Number(r?.id) || 0,
    title: String(r?.attributes?.mainTitle) || '',
    thumbnail: String(r?.attributes?.thumbnail?.data?.attributes?.url) || '',
  }));

  return { blog, categories, favoriteBlogs };
};
