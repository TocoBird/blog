import { PageProps } from 'gatsby';
import {
  getDomainBlog,
  getDomainCategory,
  getDomainRecommendBlog,
  getDomainRelatedBlog,
  getDomainStoryBlog,
} from './domain';
import {
  getResTocoBlog,
  getResCategory,
  getResFavoriteBlogAttributeBlog,
  getResRelatedBlogAttributeBlog,
  getResStoryBlogs,
} from './response';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/articleDetail';
import { ResCategory } from '@/modules/interfaces/response/articleDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/articleDetail/favoriteBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/articleDetail/storyBlogs';
import {
  ResTocoBlog,
  ResCategoryAttributeRelatedBlog,
} from '@/modules/interfaces/response/articleDetail/tocoBlog';

interface useReturn {
  readonly blog: DomainArticleDetailBlog;
  readonly categories: DomainArticleDetailCategory[];
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
  readonly relatedBlogs: DomainArticleDetailRelatedBlog[];
  readonly stroyBlogs: DomainArticleDetailStoryBlog[];
}

/**
 * 記事詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainArticleDetail = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resblog: ResTocoBlog = getResTocoBlog(res);
    const resCategory: ResCategory[] = getResCategory(res);
    const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
      getResFavoriteBlogAttributeBlog(res);
    const resRelatedBlogs: ResCategoryAttributeRelatedBlog[] =
      getResRelatedBlogAttributeBlog(res);
    const resStoryBlogs: ResStoryBlog[] = getResStoryBlogs(res);

    /**
     * ドメインに変換
     */
    const blog: DomainArticleDetailBlog = getDomainBlog(resblog);
    const categories: DomainArticleDetailCategory[] =
      getDomainCategory(resCategory);
    const favoriteBlogs: DomainArticleDetailRecommendBlog[] =
      getDomainRecommendBlog(resFavoriteBlogs);
    const relatedBlogs: DomainArticleDetailRelatedBlog[] =
      getDomainRelatedBlog(resRelatedBlogs);
    const stroyBlogs: DomainArticleDetailStoryBlog[] =
      getDomainStoryBlog(resStoryBlogs);

    return {
      blog,
      categories,
      favoriteBlogs,
      relatedBlogs,
      stroyBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
