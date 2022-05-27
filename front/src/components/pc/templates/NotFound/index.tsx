import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;

/**
 * テンプレート：404
 */
const TemplatePCNotFound: React.FC = (): JSX.Element => {
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

export default TemplatePCNotFound;
