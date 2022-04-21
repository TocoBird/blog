// カテゴリー
interface ResCategoryAttribute {
  readonly name: string;
}

/**
 * カテゴリー詳細
 */
export interface ResCategory {
  readonly id: number;
  readonly attributes: ResCategoryAttribute;
}

/**
 * カテゴリー一覧
 */
export interface ResCategoryData {
  readonly data: ResCategory[];
}
