import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import {
  DomainCategoryBlog,
  DomainCategory,
} from '../../../modules/domain/blog';
import { SpacerS } from '../atoms/Spacer';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';

const Wrapper = styled.div``;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: 50% 50%;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${colors.text.mainBold};
`;
const Content = styled.div`
  background: ${colors.card.main};
`;
const Card = styled.div`
  background: ${colors.card.main};
  display: flex;
`;
const CardTitle = styled.div`
  padding: ${size.ui.l4}px;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.text.mainBold};
`;

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainCategoryBlog[];
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
}
/**
 * テンプレート：カテゴリ一覧
 */
const TemplateSPCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
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

      <div>
        {p.blogs.map(b => (
          <Fragment key={b.id}>
            <Link to={`/article/${b.id}`}>
              <Card>
                <Thumbnail
                  style={{
                    backgroundImage: `url('${b.thumbnail}')`,
                  }}
                />
                <CardTitle>{b.title}</CardTitle>
              </Card>
            </Link>
            <SpacerS />
          </Fragment>
        ))}
      </div>

      <SpacerS />
    </Wrapper>
  );
};

export default TemplateSPCategoryDetail;