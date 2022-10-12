import {
  getDomainCategory,
  getDomainRelatedBlog,
} from '@/modules/adapter/articleDetail/domain';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';

describe('Adapter/ArticleDetail/Domain', () => {
  test('ドメインに変換できる/カテゴリ', () => {
    const res = [
      {
        id: 1,
        attributes: {
          name: 'name1',
        },
      },
      {
        id: 2,
        attributes: {
          name: 'name2',
        },
      },
    ];
    const domain = getDomainCategory(res);
    const result = [
      new DomainArticleDetailCategory(1, 'name1'),
      new DomainArticleDetailCategory(2, 'name2'),
    ];
    expect(result).toEqual(domain);
  });

  test('ドメインに変換できる/おすすめ記事', () => {
    const res = [
      {
        id: 1,
        attributes: {
          urlid: 'urlid1',
          mainTitle: 'title',
          thumbnail: {
            data: {
              attributes: {
                url: 'url',
                formats: {
                  small: {
                    url: 'smallUrl',
                  },
                },
              },
            },
          },
        },
      },
    ];
    const domain = getDomainRelatedBlog(res);
    const result = [
      new DomainArticleDetailRecommendBlog(1, 'urlid1', 'title', 'smallUrl'),
    ];
    expect(result).toEqual(domain);
  });

  test('ドメインに変換できる。small画像がない場合は大きい画像を表示/おすすめ記事', () => {
    const res = [
      {
        id: 1,
        attributes: {
          urlid: 'urlid1',
          mainTitle: 'title',
          thumbnail: {
            data: {
              attributes: {
                url: 'bigurl',
                formats: {
                  small: {
                    url: '',
                  },
                },
              },
            },
          },
        },
      },
    ];
    const domain = getDomainRelatedBlog(res);
    const result = [
      new DomainArticleDetailRecommendBlog(1, 'urlid1', 'title', 'bigurl'),
    ];
    expect(result).toEqual(domain);
  });
});
