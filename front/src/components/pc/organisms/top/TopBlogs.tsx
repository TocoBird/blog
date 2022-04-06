import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import size from '../../../../modules/common/size';
import colors from '../../../../modules/common/colors';
import {
  DomainTopPageCategory,
  DomainTopPageBlog,
} from '../../../../modules/interfaces/domain/category';
import { SpacerS, SpacerM } from '../../atoms/Spacer';

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
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    opacity: 0.8;
  }
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 120px;
  height: 80px;
  background-size: cover;
  background-position: 50% 50%;
`;
const BlogTitle = styled.div`
  flex: 1;
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 16px;
  padding-left: ${size.ui.l3}px;
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
              <Link to={`/article/${b.id}`}>
                <Card>
                  <Thumbnail
                    style={{
                      backgroundImage: `url('${b.thumbnail}')`,
                    }}
                  />
                  <BlogTitle>{b.title}</BlogTitle>
                </Card>
              </Link>

              <SpacerS />
            </Fragment>
          ))}
        </Content>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
