import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  padding: 0 ${size.ui.l3}px;
`;

/**
 * テンプレート：404
 */
const TemplateSPNotFound: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Spacer.XXL />
      <Title size="XL">404 Not Found</Title>
      <Spacer.L />
      <Title size="M">ページが見つかりません。</Title>
      <Spacer.XXL />
    </Wrapper>
  );
};

export default TemplateSPNotFound;
