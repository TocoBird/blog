import { faHashtag, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Box from '@/components/pc/common/atoms/Box';
import ButtonCategory from '@/components/pc/common/atoms/ButtonCategory';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import ContentCenter from '@/components/pc/common/frames/ContentCenter';
import TopBlog from '@/components/pc/templates/Top/molecules/TopBlog';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import size from '@/modules/const/size';

const Wrapper = styled(ContentCenter)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const IconArrow = styled(FontAwesomeIcon)`
  margin-left: 8px;
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
        <Box
          key={`${index}_${c.id}`}
          size="L"
          style={{
            width: '48.5%',
            boxSizing: 'border-box',
            marginBottom: index < 2 ? size.ui.l8 : 0,
          }}
        >
          <Title size="XM">
            <IconHash icon={faHashtag} />
            {c.name}
          </Title>

          <Spacer.XM />

          {c.blogs.map((b: DomainTopCategoryBlog, index: number) => (
            <Fragment key={`${index}_${b.id}`}>
              <TopBlog blog={b} />

              <Spacer.S />
            </Fragment>
          ))}

          <Spacer.S />

          <Link to={`/category/${c.id}`}>
            <ButtonCategory>
              {c.name}の記事
              <IconArrow icon={faAngleRight} />
            </ButtonCategory>
          </Link>
        </Box>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
