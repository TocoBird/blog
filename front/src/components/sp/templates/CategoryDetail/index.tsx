import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

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
  /** 記事一覧 */
  readonly blogs: DomainCategoryDetailBlog[];
  /** カテゴリ一覧 */
  readonly categories: DomainCategoryDetailCategory[];
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

        <Spacer.M />

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

              <Spacer.S />
            </Fragment>
          ))}
        </div>
      </Content>

      <Spacer.S />

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

            <Spacer.S />
          </Fragment>
        ))}
      </div>

      <Spacer.S />
    </Wrapper>
  );
};

export default TemplateSPCategoryDetail;
