import { CategoryId, CategoryName } from '@/domain/_site/category';

/** サイト単位のドメインの部分集合 */
type Category = CategoryId & CategoryName;

/**
 * カテゴリ
 */
export class DomainStoryDetailCategory implements Category {
  constructor(
    /** カテゴリID */
    public readonly id: number = 0,
    /** カテゴリ名 */
    public readonly name: string = ''
  ) {}
}
