import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import {
  DomainBlogDetail,
  DomainCategory,
  DomainFavoriteBlog,
} from '../../../modules/interfaces/domain/articleDetail';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS, SpacerM } from '../atoms/Spacer';
import { ButtonCategory } from '../atoms/ButtonCategory';
import ArticleFavoriteBlog from '../organisms/articleDetail/ArticleFavoriteBlog';

const Wrapper = styled.div``;
const Thumbnail = styled.div`
  background: whitesmoke;
  height: 120px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 2px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.text.mainBold};
`;
const TopContent = styled.div`
  background: ${colors.card.main};
  padding: ${size.ui.l3}px;
`;
const Content = styled.div`
  background: ${colors.card.main};
  padding: ${size.ui.l3}px;
`;
const TopContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
`;
const Date = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Category = styled.div`
  color: ${colors.text.link};
  font-weight: 500;
`;
const Author = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: 15px;
`;

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainFavoriteBlog[];
}
/**
 * テンプレート：記事詳細
 */
const TemplateSPArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Thumbnail
        style={{
          backgroundImage: `url('${p.blog.thumbnail}')`,
        }}
      />

      <TopContent>
        <Title>{p.blog.title}</Title>

        <SpacerS />

        <TopContentItems>
          <Date>
            <Icon icon={faCalendarDays} />
            {p.blog.updatedAt}更新
          </Date>
          <Category>
            <Link to={`/category/${p.blog.categoryId}`}>
              <ButtonCategory>#{p.blog.categoryName}</ButtonCategory>
            </Link>
          </Category>
        </TopContentItems>
      </TopContent>

      <SpacerS />

      <Content>
        <div className="blogMarkdown">
          <ReactMarkdown>{p.blog.text}</ReactMarkdown>
        </div>

        <SpacerS />

        <Author>作者 tocotoco</Author>
      </Content>

      <SpacerS />

      <Content style={{ padding: size.ui.l3 }}>
        <Title>カテゴリーで記事を探す</Title>

        <SpacerM />

        <div>
          {p.categories.map(c => (
            <Fragment key={c.id}>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory>#{c.name}</ButtonCategory>
              </Link>

              <SpacerS />
            </Fragment>
          ))}
        </div>
      </Content>

      <SpacerS />

      <Content>
        <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
      </Content>

      <SpacerS />

      <Content>
        <Title>ブログのコンセプト</Title>

        <SpacerS />

        <Detail>
          プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
        </Detail>
      </Content>

      <SpacerS />
    </Wrapper>
  );
};

export default TemplateSPArticleDetail;
