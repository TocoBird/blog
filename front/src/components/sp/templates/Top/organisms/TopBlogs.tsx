import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Card = styled.div`
  background: ${colors.box.background};
  display: flex;
`;
const BlogTitle = styled(Title.S)`
  flex: 1;
  padding-left: ${size.ui.l4}px;
`;
const Content = styled.div`
  border-radius: 4px;
  background: ${colors.box.background};
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
            <Title.M>
              <IconHash icon={faHashtag} />
              {c.name}
            </Title.M>

            <Spacer.M />

            {c.blogs.map((b: DomainTopCategoryBlog) => (
              <Fragment key={b.id}>
                <Link to={`/article/${b.id}`}>
                  <Card>
                    <Thumbnail width="110px" height="70px" url={b.thumbnail} />
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
