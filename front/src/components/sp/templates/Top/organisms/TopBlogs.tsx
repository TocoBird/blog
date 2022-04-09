import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

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
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：カテゴリ別記事一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory) => (
        <Fragment key={c.id}>
          <Content>
            <Title>
              <IconHash icon={faHashtag} />
              {c.name}
            </Title>

            <Spacer.M />

            {c.blogs.map((b: DomainTopCategoryBlog) => (
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

                <Spacer.S />
              </Fragment>
            ))}
          </Content>

          <Spacer.L />
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
