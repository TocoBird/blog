import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import {
  DomainCategoryBlog,
  DomainCategory,
} from '../../../modules/interfaces/domain/blog';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS, SpacerM } from '../atoms/Spacer';
import { ButtonCategory } from '../atoms/ButtonCategory';

const Wrapper = styled.div``;
const Title = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
const Content = styled.div`
  background: ${colors.card.main};
`;
const Card = styled.div`
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  flex-wrap: wrap;
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 120px;
  height: 80px;
  background-size: cover;
  background-position: 50% 50%;
`;
const CardTitle = styled.div`
  flex: 1;
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
  /** 選択しているカテゴリID */
  readonly selectedCategolyId: number;
}
/**
 * テンプレート：カテゴリ一覧
 * デザイン途中なのでリファクタは後
 */
const TemplateSPCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content style={{ padding: size.ui.l3 }}>
        <Title>カテゴリーから記事を探す</Title>

        <SpacerM />

        <div>
          {p.categories.map(c => (
            <Fragment key={c.id}>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory
                  style={{
                    color: c.id === p.selectedCategolyId ? '#ffc770' : 'white',
                  }}
                >
                  #{c.name}
                </ButtonCategory>
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
