export interface BlogId {
  /** 記事ID */
  readonly id: number;
}
export interface BlogTitle {
  /** 記事タイトル */
  readonly title: string;
}
export interface BlogText {
  /** 記事本文*/
  readonly text: string;
}
export interface BlogThumbnail {
  /** サムネイル */
  readonly thumbnail: string;
}
export interface BlogUpdatedAt {
  /** 最終更新日 */
  readonly updatedAt: string;
}
