import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import TopBlog from '@/components/pc/templates/Top/molecules/TopBlog';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Content = styled.div`
  width: 48.5%;
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
  box-sizing: border-box;
  margin-bottom: ${size.ui.l8}px;
`;
const Title = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 24px;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：ブログ一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory, index: number) => (
        <Content key={`${index}_${c.id}`}>
          <Title>#{c.name}</Title>

          <Spacer.M />

          {c.blogs.map((b: DomainTopCategoryBlog, index: number) => (
            <Fragment key={`${index}_${b.id}`}>
              <TopBlog blog={b} />

              <Spacer.S />
            </Fragment>
          ))}
        </Content>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
