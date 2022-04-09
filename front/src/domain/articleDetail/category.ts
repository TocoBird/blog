import { CategoryId, CategoryName } from '@/domain/_site/category';

/** サイト単位のドメインの部分集合 */
type Category = CategoryId & CategoryName;

/**
 * カテゴリ
 */
export class DomainArticleDetailCategory implements Category {
  constructor(
    public readonly id: number = 0,
    public readonly name: string = ''
  ) {}
}
