import { faHashtag, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import TopBlog from '@/components/pc/templates/Top/molecules/TopBlog';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

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
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const IconLink = styled.div`
  transition: 0.2s;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;
const IconArrow = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：記事一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory, index: number) => (
        <Box
          key={`${index}_${c.id}`}
          size="L"
          style={{
            width: '48.5%',
            boxSizing: 'border-box',
            marginBottom: index < 2 ? `${size.ui.l8}px` : 0,
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

          <Spacer.XS />

          <Link
            to={`/category/${c.id}`}
            style={{
              color: color.text.main,
            }}
          >
            <IconLink>
              <IconArrow icon={faAngleRight} />
              {c.name}の記事
            </IconLink>
          </Link>
        </Box>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
