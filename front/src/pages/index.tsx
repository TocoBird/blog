import React from 'react';
import { useIndex } from '../modules/graphql/index';
import { DomainBlog } from '../modules/domain/blog';

const Index: React.FC = (): JSX.Element => {
  const { blogs } = useIndex();

  return (
    <>
      <div>ok</div>
      <div>
        {blogs.map((d: DomainBlog) => (
          <div key={d.id}>
            {d.id}:{d.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
