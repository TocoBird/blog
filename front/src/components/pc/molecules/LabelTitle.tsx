import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React, { ReactNode } from 'react';
import Title from '@/components/pc/atoms/Title';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  margin-right: ${size.ui.l2}px;
`;

interface Props {
  /**
   * XS とても小さい
   * S 小さい
   * M 中間
   * XM 少し大きい
   * L 大きい
   * XL とても大きい
   */
  readonly size: 'XS' | 'S' | 'M' | 'XM' | 'L' | 'XL';
  readonly icon: IconDefinition;
  readonly children: ReactNode;
}

/**
 * タイトルとアイコンのセット
 */
const LabelTitle: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title size={p.size}>
        <Icon icon={p.icon} />
        {p.children}
      </Title>
    </Wrapper>
  );
};

export default LabelTitle;
