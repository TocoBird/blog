import React from 'react';
import { styled } from 'linaria/react';
import { DomainTopPageCategory } from '../../../modules/interfaces/domain/category';
import colors from '../../../modules/common/colors';
import TopHeader from '../organisms/top/TopHeader';
import TopBlogs from '../organisms/top/TopBlogs';
import { SpacerL } from '../atoms/Spacer';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopPageCategory[];
}

/**
 * テンプレート：トップページ
 */
const TemplatePCTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <SpacerL />

      <BlogsTitle>最新の記事</BlogsTitle>

      <SpacerL />

      <TopBlogs categories={p.categories} />
    </Wrapper>
  );
};

export default TemplatePCTop;
