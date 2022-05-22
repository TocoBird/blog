import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

interface Props {
  /** 投稿日 */
  readonly date: string;
}

/**
 * 記事下部
 */
const BlogFooter: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        color: color.text.mainThin,
      }}
    >
      <div>
        <Icon icon={faPenNib} />
        作成者 tocotoco
      </div>

      <Spacer.XS />

      <div>投稿日 {p.date}</div>
    </Wrapper>
  );
};

export default BlogFooter;
