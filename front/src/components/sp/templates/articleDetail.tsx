import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import { DomainBlogDetail, DomainCategory } from '../../../modules/domain/blog';
import { SpacerS } from '../atoms/Spacer';
import size from '../../../modules/common/size';

const Wrapper = styled.div``;
const Thumbnail = styled.div`
  background: whitesmoke;
  height: 120px;
  background-size: cover;
  background-position: 50% 50%;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #243352;
`;
const TopContent = styled.div`
  background: white;
`;
const Content = styled.div`
  background: white;
`;
const TopContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
`;
const Date = styled.div`
  color: #b5bfd5;
`;
const Category = styled.div`
  color: #3460c1;
`;

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
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

      <TopContent style={{ padding: size.ui.l3 }}>
        <Title>{p.blog.title}</Title>

        <SpacerS />

        <TopContentItems>
          <Date>@{p.blog.updatedAt}</Date>
          <Category>
            <Link to={`/category/${p.blog.categoryId}`}>
              #{p.blog.categoryName}
            </Link>
          </Category>
        </TopContentItems>
      </TopContent>

      <SpacerS />

      <Content style={{ padding: size.ui.l3 }}>
        <div className="blogMarkdown">
          <ReactMarkdown children={p.blog.text} />
        </div>
        <SpacerS />
        <div>作者 </div>
      </Content>

      <SpacerS />

      <Content style={{ padding: size.ui.l3 }}>
        <Title>カテゴリーから記事を探す</Title>
        <SpacerS />
        <div>
          {p.categories.map(c => (
            <Fragment key={c.id}>
              <Link to={`/category/${c.id}`}>
                <div>#{c.name}</div>
              </Link>
              <SpacerS />
            </Fragment>
          ))}
        </div>
      </Content>

      <SpacerS />
    </Wrapper>
  );
};

export default TemplateSPArticleDetail;
