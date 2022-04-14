import { faHashtag, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainTopCategory, DomainTopCategoryBlog } from '@/domain/top/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
`;
const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l4}px;
  box-sizing: border-box;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const IconLink = styled.div`
  margin-right: 8px;
  transition: 0.2s;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;
const IconArrow = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：カテゴリ別記事一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory) => (
        <Fragment key={c.id}>
          <Content
            style={{
              background: color.box.background,
            }}
          >
            <Title size="M">
              <IconHash icon={faHashtag} />
              {c.name}
            </Title>

            <Spacer.M />

            {c.blogs.map((b: DomainTopCategoryBlog) => (
              <Fragment key={b.id}>
                <Link to={`/article/${b.id}`}>
                  <Card
                    style={{
                      background: color.box.background,
                    }}
                  >
                    <Thumbnail width="110px" height="70px" url={b.thumbnail} />
                    <Title
                      size="S"
                      style={{
                        flex: 1,
                        paddingLeft: `${size.ui.l4}px`,
                      }}
                    >
                      {b.title}
                    </Title>
                  </Card>
                </Link>

                <Spacer.S />
              </Fragment>
            ))}

            <Spacer.S />

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
          </Content>

          <Spacer.L />
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
