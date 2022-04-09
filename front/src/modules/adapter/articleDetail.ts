import dayjs from 'dayjs';
import { PageProps } from 'gatsby';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import {
  Res,
  ResTocoBlog,
  ResCategory,
  ResFavoriteBlogAttributeBlog,
} from '@/modules/interfaces/response/articleDetail';

interface useReturn {
  readonly blog: DomainArticleDetailBlog;
  readonly categories: DomainArticleDetailCategory[];
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
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
  const blog: DomainArticleDetailBlog = {
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

  const categories: DomainArticleDetailCategory[] = resCategory.map(r => ({
    id: Number(r?.id) || 0,
    name: String(r?.attributes?.name) || '',
  }));

  const favoriteBlogs: DomainArticleDetailRecommendBlog[] =
    resFavoriteBlogs.map(r => ({
      id: Number(r?.id) || 0,
      title: String(r?.attributes?.mainTitle) || '',
      thumbnail: String(r?.attributes?.thumbnail?.data?.attributes?.url) || '',
    }));

  return { blog, categories, favoriteBlogs };
};
