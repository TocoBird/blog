import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

/**
 * 記者
 */
const BlogAuthor: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        color: color.text.mainThin,
      }}
    >
      <Icon icon={faPenNib} />
      作成者 tocotoco
    </Wrapper>
  );
};

export default BlogAuthor;
