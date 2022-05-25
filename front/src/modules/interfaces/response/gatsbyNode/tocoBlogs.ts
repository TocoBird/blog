interface ResTocoBlogAttribute {
  readonly urlid: string;
}

/**
 * 記事詳細
 */
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}

/**
 * 記事一覧
 */
export interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}
