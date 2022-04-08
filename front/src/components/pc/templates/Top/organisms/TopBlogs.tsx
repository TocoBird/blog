import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import size from '@/modules/common/size';
import colors from '@/modules/common/colors';
import {
  DomainTopPageCategory,
  DomainTopPageBlog,
} from '@/modules/interfaces/domain/category';
import { SpacerM, SpacerS } from '@/components/pc/atoms/Spacer';
import TopBlog from '@/components/pc/templates/Top/molecules/TopBlog';

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
  readonly categories: DomainTopPageCategory[];
}
/**
 * トップページ：ブログ一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.categories.map((c: DomainTopPageCategory, index: number) => (
        <Content key={`${index}_${c.id}`}>
          <Title>#{c.name}</Title>

          <SpacerM />

          {c.blogs.map((b: DomainTopPageBlog, index: number) => (
            <Fragment key={`${index}_${b.id}`}>
              <TopBlog blog={b} />

              <SpacerS />
            </Fragment>
          ))}
        </Content>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
