import React from 'react';
import { DomainBlog } from '../../modules/domain/blog';

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainBlog[];
}

/**
 *
 */
const TemplateIndex: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <div>ok1</div>
      <div>
        {p.blogs.map((d: DomainBlog) => (
          <div key={d.id}>
            {d.id}:{d.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default TemplateIndex;
