import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { getDomainCategoryDetailCategory } from '@/modules/adapter/categoryDetail/domain';

describe('Adapter/CategoryDetail/Domain', () => {
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
    const domain = getDomainCategoryDetailCategory(res);
    const result = [
      new DomainCategoryDetailCategory(1, 'name1'),
      new DomainCategoryDetailCategory(2, 'name2'),
    ];
    expect(result).toEqual(domain);
  });
});
