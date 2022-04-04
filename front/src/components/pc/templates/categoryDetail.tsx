import React from 'react';
import { Link } from 'gatsby';
import {
  DomainCategoryBlog,
  DomainCategory,
} from '../../../modules/domain/blog';

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainCategoryBlog[];
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
}
/**
 * テンプレート：カテゴリ一覧
 */
const TemplatePCCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <div>
        {p.blogs.map((d: DomainCategoryBlog) => (
          <div key={d.id}>
            <Link to={`/article/${d.id}`}>
              {d.id}:{d.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TemplatePCCategoryDetail;
