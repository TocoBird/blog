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
          <Link to={`./detail/${d.id}`} key={d.id}>
            {d.id}:{d.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default TemplateSPIndex;
