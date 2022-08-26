import { PageProps } from 'gatsby';
import { getDomainTopCategory, getDomainStoryBlog } from './domain';
import { getResCategory, getResStoryBlogs } from './response';
import { DomainTopCategory } from '@/domain/top/blog';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import { Res } from '@/modules/interfaces/response/home';
import { ResCategory } from '@/modules/interfaces/response/home/categories';
import { ResStoryBlog } from '@/modules/interfaces/response/home/storyBlogs';

interface useReturn {
  readonly categories: DomainTopCategory[];
  readonly stroyBlogs: DomainTopStoryBlog[];
}

/**
 * トップページ
 * GraphQLのレスポンスをドメインに変換
 */
export const adapterDomainTop = (page: PageProps): useReturn => {
  try {
    /**
     * レスポンスを取得
     */
    const res = page.data as Res;
    const resCategories: ResCategory[] = getResCategory(res);
    const resStoryBlogs: ResStoryBlog[] = getResStoryBlogs(res);

    /**
     * ドメインに変換
     */
    const categories: DomainTopCategory[] = getDomainTopCategory(resCategories);
    const stroyBlogs: DomainTopStoryBlog[] = getDomainStoryBlog(resStoryBlogs);

    return {
      categories,
      stroyBlogs,
    };
  } catch (e) {
    throw errorWrapper(e, 'レスポンス変換エラー');
  }
};
