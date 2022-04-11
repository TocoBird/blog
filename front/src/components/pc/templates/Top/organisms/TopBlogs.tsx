import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { BoxL } from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import TopBlog from '@/components/pc/templates/Top/molecules/TopBlog';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
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
const Content = styled(BoxL)`
  width: 48.5%;
  box-sizing: border-box;
  margin-bottom: ${size.ui.l8}px;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：記事一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory, index: number) => (
        <Content key={`${index}_${c.id}`}>
          <Title.XM>
            <IconHash icon={faHashtag} />
            {c.name}
          </Title.XM>

          <Spacer.XM />

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
