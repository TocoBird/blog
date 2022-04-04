import React from 'react';
import { DomainBlogDetail, DomainCategory } from '../../../modules/domain/blog';

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
}
/**
 * テンプレート：記事詳細
 */
const TemplatePCArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <div>
        <div>{p.blog.id}</div>
        <div>{p.blog.title}</div>
        <div>{p.blog.text}</div>
        <div>{p.blog.thumbnail}</div>
        <div>{p.blog.updatedAt}</div>
      </div>
    </>
  );
};

export default TemplatePCArticleDetail;
