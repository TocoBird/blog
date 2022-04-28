import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import TopBlogs from '@/components/sp/templates/Top/organisms/TopBlogs';
import TopConcept from '@/components/sp/templates/Top/organisms/TopConcept';
import TopHeader from '@/components/sp/templates/Top/organisms/TopHeader';
import { DomainTopCategory } from '@/domain/top/blog';

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  font-size: 32px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <Spacer.L />

      <Title
        size="XM"
        style={{
          textAlign: 'center',
        }}
      >
        <Icon icon={faFire} />
        <br />
        おすすめの記事
      </Title>

      <Spacer.L />

      <TopBlogs categories={p.categories} />

      <Spacer.L />

      <TopConcept />
    </Wrapper>
  );
};

export default TemplateSPTop;
