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
  readonly urlid: string;
  readonly mainTitle: string;
  readonly thumbnail: ResTocoBlogThumbnail;
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
