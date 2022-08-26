import { PageProps } from 'gatsby';
import {
  getDomainStoryBlog,
  getDomainCategory,
  getDomainRecommendBlog,
  getDomainRelatedStoryBlog,
} from './domain';
import {
  getResStoryBlog,
  getResCategory,
  getResFavoriteBlogAttributeBlog,
  getResRelatedStoryBlog,
} from './response';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailRelatedStoryBlog } from '@/domain/storyDetail/relatedStoryBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/storyDetail';
import { ResCategory } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogAttributeBlog } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResRelatedStoryBlog } from '@/modules/interfaces/response/storyDetail/relatedStoryBlog';
import { ResStoryBlog } from '@/modules/interfaces/response/storyDetail/storyBlog';

interface useReturn {
  readonly storyBlog: DomainStoryDetailStoryBlog;
  readonly categories: DomainStoryDetailCategory[];
  readonly favoriteBlogs: DomainStoryDetailRecommendBlog[];
  readonly relatedStoryBlogs: DomainStoryDetailRelatedStoryBlog[];
}

/**
 * カテゴリ詳細ページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainStoryDetail = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resStoryBlog: ResStoryBlog = getResStoryBlog(res);
    const resCategory: ResCategory[] = getResCategory(res);
    const resFavoriteBlogs: ResFavoriteBlogAttributeBlog[] =
      getResFavoriteBlogAttributeBlog(res);
    const resStoryBlogs: ResRelatedStoryBlog[] = getResRelatedStoryBlog(res);

    /**
     * ドメインに変換
     */
    const storyBlog: DomainStoryDetailStoryBlog =
      getDomainStoryBlog(resStoryBlog);
    const categories: DomainStoryDetailCategory[] =
      getDomainCategory(resCategory);
    const favoriteBlogs: DomainStoryDetailRecommendBlog[] =
      getDomainRecommendBlog(resFavoriteBlogs);
    const relatedStoryBlogs: DomainStoryDetailRelatedStoryBlog[] =
      getDomainRelatedStoryBlog(resStoryBlogs);

    return {
      storyBlog,
      categories,
      favoriteBlogs,
      relatedStoryBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
