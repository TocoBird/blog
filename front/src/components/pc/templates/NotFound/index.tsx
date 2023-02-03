import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import ContentCenter from '@/components/pc/common/frames/ContentCenter';

const Wrapper = styled(ContentCenter)``;

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
