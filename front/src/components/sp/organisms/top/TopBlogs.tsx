import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import {
  DomainTopPageCategory,
  DomainTopPageBlog,
} from '../../../../modules/interfaces/domain/category';
import size from '../../../../modules/common/size';
import colors from '../../../../modules/common/colors';
import { SpacerS, SpacerL } from '../../atoms/Spacer';

const Wrapper = styled.div``;
const Title = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 22px;
`;
const Card = styled.div`
  background: ${colors.card.main};
  display: flex;
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 110px;
  height: 70px;
  background-size: cover;
  background-position: 50% 50%;
`;
const BlogTitle = styled.div`
  flex: 1;
  padding-left: ${size.ui.l4}px;
  font-weight: bold;
  font-size: 15px;
  flex: 1;
  color: ${colors.text.mainBold};
`;
const Content = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l4}px;
  box-sizing: border-box;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopPageCategory[];
}
/**
 * トップページ：カテゴリ別ブログ一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.categories.map((c: DomainTopPageCategory) => (
        <Fragment key={c.id}>
          <Content>
            <Title>#{c.name}</Title>

            <SpacerS />

            {c.blogs.map((b: DomainTopPageBlog) => (
              <Fragment key={b.id}>
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

          <SpacerL />
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
