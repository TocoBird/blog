import React from 'react';
import { Link } from 'gatsby';
import { DomainBlog } from '../../../modules/domain/blog';

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainBlog[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPIndex: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <div>
        {p.blogs.map((d: DomainBlog) => (
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

export default TemplateSPIndex;
