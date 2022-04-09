import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { DomainCategoryBlog, DomainCategory } from '@/modules/domain/blog';
import size from '@/modules/common/size';
import colors from '@/modules/common/colors';
import Spacer from '@/components/pc/atoms/Spacer';
import { ButtonCategory } from '@/components/pc/atoms/ButtonCategory';

const Wrapper = styled.div``;
const Inner = styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Title = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 20px;
`;
const Content = styled.div`
  background: ${colors.card.main};
`;
const Categories = styled.div`
  display: flex;
`;
const Card = styled.div`
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 140px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
`;
const CardTitle = styled.div`
  flex: 1;
  padding: ${size.ui.l4}px;
  font-weight: bold;
  font-size: 15px;
  flex: 1;
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
const TemplatePCCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content style={{ padding: size.ui.l3 }}>
        <Inner>
          <Title>カテゴリーから記事を探す</Title>

          <Spacer.S />

          <Categories>
            {p.categories.map(c => (
              <Fragment key={c.id}>
                <Link to={`/category/${c.id}`}>
                  <ButtonCategory
                    style={{
                      color:
                        c.id === p.selectedCategolyId ? '#ffc770' : 'white',
                      marginRight: 20,
                    }}
                  >
                    #{c.name}
                  </ButtonCategory>
                </Link>

                <Spacer.S />
              </Fragment>
            ))}
          </Categories>
        </Inner>
      </Content>

      <Spacer.S />

      <div>
        <Inner>
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
        </Inner>
      </div>

      <Spacer.S />
    </Wrapper>
  );
};

export default TemplatePCCategoryDetail;
