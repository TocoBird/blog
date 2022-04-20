// カテゴリー
interface ResCategoryAttribute {
  readonly name: string;
}

/**
 * カテゴリ詳細
 */
export interface ResCategory {
  readonly id: number;
  readonly attributes: ResCategoryAttribute;
}

/**
 * カテゴリ一覧
 */
export interface ResCategoryData {
  readonly data: ResCategory[];
}
