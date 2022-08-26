export interface BlogId {
  /** 記事ID */
  readonly id: number;
}
export interface BlogURLId {
  /** 記事URL_ID */
  readonly urlid: string;
}
export interface BlogTitle {
  /** 記事タイトル */
  readonly title: string;
}
export interface BlogText {
  /** 記事本文 */
  readonly text: string;
}
export interface BlogSeoDescription {
  /** seo記事詳細 */
  readonly seoDescription: string;
}
export interface BlogFeatureText {
  /** 記事概要 */
  readonly featureText: string;
}
export interface BlogThumbnail {
  /** サムネイル */
  readonly thumbnail: string;
}
export interface BlogUpdatedAt {
  /** 最終更新日 */
  readonly updatedAt: string;
}
export interface BlogCreatedAt {
  /** 投稿日 */
  readonly createdAt: string;
}
