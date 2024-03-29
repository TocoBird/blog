import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';
import { errorWrapper } from '@/modules/common/error';
import {
  ResTocoBlog,
  ResCategory,
} from '@/modules/interfaces/response/home/categories';
import { ResStoryBlog } from '@/modules/interfaces/response/home/storyBlogs';

/**
 * レスポンスをドメインへ変換: ブログ一覧
 */
export const getDomainTopCategoryBlog = (
  resblogs: ResTocoBlog[]
): DomainTopCategoryBlog[] => {
  try {
    return resblogs.map(b => {
      const id = Number(b.id) || 0;
      const title = String(b.attributes.mainTitle) || '';
      const urlid = String(b.attributes.urlid) || '';
      const rAttributes = b.attributes.thumbnail.data.attributes;
      const rFormat = rAttributes?.formats;
      const rUrl =
        rFormat?.thumbnail?.url || rFormat?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainTopCategoryBlog(id, urlid, title, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ブログ一覧');
  }
};

/**
 * レスポンスをドメインへ変換: カテゴリ一覧
 */
export const getDomainTopCategory = (
  resCategories: ResCategory[]
): DomainTopCategory[] => {
  try {
    return resCategories.map(r => {
      const resblogs: ResTocoBlog[] =
        r.attributes.toco_blogs.data || ([] as ResTocoBlog[]);

      // 記事一覧
      const blogs: DomainTopCategoryBlog[] = getDomainTopCategoryBlog(resblogs);

      const id = Number(r.id) || 0;
      const name = String(r.attributes.name) || '';

      return new DomainTopCategory(id, name, blogs);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:カテゴリ一覧');
  }
};

/**
 * レスポンスをドメインへ変換: ストーリー記事一覧
 */
export const getDomainStoryBlog = (
  blogs: ResStoryBlog[]
): DomainTopStoryBlog[] => {
  try {
    return blogs.map(r => {
      const id = Number(r.id) || 0;
      const title = String(r.attributes.title) || '';
      const titleSub = String(r.attributes.titleSub) || '';
      const rAttributes = r.attributes.thumbnail.data.attributes;
      const rFormats = rAttributes?.formats;
      const rUrl = rFormats?.small?.url || rAttributes.url;
      const thumbnail = String(rUrl) || '';

      return new DomainTopStoryBlog(id, title, titleSub, thumbnail);
    });
  } catch (e) {
    throw errorWrapper(e, 'ドメイン変換エラー:ストーリー記事一覧');
  }
};
