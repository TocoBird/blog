import { getDomainCategory } from '@/modules/adapter/storyDetail/domain';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';

describe('Adapter/StoryDetail/Domain', () => {
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
      new DomainStoryDetailCategory(1, 'name1'),
      new DomainStoryDetailCategory(2, 'name2'),
    ];
    expect(result).toEqual(domain);
  });
});
