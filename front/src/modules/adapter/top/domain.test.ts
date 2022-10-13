import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { getDomainCategory } from '@/modules/adapter/articleDetail/domain';

describe('Adapter/Top/Domain', () => {
  test('ドメインに変換される/カテゴリ', () => {
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
});
