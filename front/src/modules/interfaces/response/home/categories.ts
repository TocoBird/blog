// 記事詳細
interface ResTocoBlogThumbnailFormats {
  readonly small: {
    readonly url: string;
  };
  readonly thumbnail: {
    readonly url: string;
  };
}
interface ResTocoBlogThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
      readonly formats: ResTocoBlogThumbnailFormats;
    };
  };
}
interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly urlid: string;
  readonly thumbnail: ResTocoBlogThumbnail;
}

/**
 * カテゴリの記事
 */
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}
interface ResCategoryAttribute {
  readonly name: string;
  readonly toco_blogs: ResTocoBlogData;
}

/**
 * カテゴリの詳細
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
