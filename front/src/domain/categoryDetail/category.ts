import { CategoryId, CategoryName } from '@/domain/_site/category';

type Category = CategoryId & CategoryName;

/**
 * カテゴリ詳細ページのカテゴリ
 */
export class DomainCategoryDetailCategory implements Category {
  constructor(
    public readonly id: number = 0,
    public readonly name: string = ''
  ) {}
}
