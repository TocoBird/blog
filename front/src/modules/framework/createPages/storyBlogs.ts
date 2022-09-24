import path from 'path';
import type { Actions } from 'gatsby';
import { errorWrapper } from '../../common/error';
import { ResStoryBlog } from '../../interfaces/response/gatsbyNode/storyBlogs';

/**
 * ページ作成: ストーリー記事一覧
 */
export const createPageStoryBlogs = (
  blogs: ResStoryBlog[],
  actions: Actions
): void => {
  try {
    const { createPage } = actions;

    const PAGE_PATH = `./src/pagesDynamic/storyDetail.tsx`;
    blogs.forEach((t: ResStoryBlog) => {
      const id = t.id;

      createPage({
        path: `/story/${id}`,
        component: path.resolve(PAGE_PATH),
        context: {
          id,
        },
      });
    });
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:ストーリー記事一覧');
  }
};
