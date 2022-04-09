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
  const id = Number(resblog?.id) || 0;
  const title = String(resblog?.attributes?.mainTitle) || '';
  const text = String(resblog?.attributes?.mainText) || '';
  const updatedAt =
    dayjs(resblog?.attributes?.updatedAt).format('YYYY/M/D') || '';
  const thumbnail =
    String(resblog?.attributes?.thumbnail?.data?.attributes?.url) || '';
  const categoryId = Number(resblog?.attributes?.category?.data?.id) || 0;
  const categoryName =
    String(resblog?.attributes?.category?.data?.attributes.name) || '';

  const blog: DomainArticleDetailBlog = new DomainArticleDetailBlog(
    id,
    title,
    text,
    thumbnail,
    updatedAt,
    categoryId,
    categoryName
  );

  const categories: DomainArticleDetailCategory[] = resCategory.map(r => {
    const id = Number(r?.id) || 0;
    const name = String(r?.attributes?.name) || '';

    return new DomainArticleDetailCategory(id, name);
  });

  const favoriteBlogs: DomainArticleDetailRecommendBlog[] =
    resFavoriteBlogs.map(r => {
      const id = Number(r?.id) || 0;
      const title = String(r?.attributes?.mainTitle) || '';
      const thumbnail =
        String(r?.attributes?.thumbnail?.data?.attributes?.url) || '';

      return new DomainArticleDetailRecommendBlog(id, title, thumbnail);
    });

  return { blog, categories, favoriteBlogs };
};
