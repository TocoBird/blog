import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/pc/atoms/ButtonCategory';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Inner = styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Content = styled.div`
  padding: ${size.ui.l3}px;
`;
const Categories = styled.div`
  display: flex;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${size.ui.l6}px 2%;
  a {
    display: block;
    width: 23%;
  }
`;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  border-radius: 2px;
  &:hover {
    opacity: 0.85;
    box-shadow: 0 8px 24px #0f1c2c20;
  }
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
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
const TemplatePCCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const selectedCategory = p.categories.find(
    c => c.id === p.selectedCategolyId
  );

  return (
    <Wrapper>
      <Content
        style={{
          background: color.box.background,
        }}
      >
        <Inner>
          <Spacer.L />

          <Title size="L">{selectedCategory?.name}の記事</Title>

          <Spacer.XM />

          <Categories>
            {p.categories.map(c => (
              <Fragment key={c.id}>
                <Link to={`/category/${c.id}`}>
                  <ButtonCategory
                    isActive={c.id === p.selectedCategolyId}
                    style={{
                      marginRight: 20,
                    }}
                  >
                    <IconHash icon={faHashtag} />
                    {c.name}
                  </ButtonCategory>
                </Link>

                <Spacer.S />
              </Fragment>
            ))}
          </Categories>

          <Spacer.L />
        </Inner>
      </Content>

      <Spacer.L />

      <div>
        <Inner>
          <Cards>
            {p.blogs.map(b => (
              <Link to={`/article/${b.urlid}`} key={b.id}>
                <Card
                  style={{
                    background: color.box.background,
                  }}
                >
                  <Thumbnail width="100%" height="110px" url={b.thumbnail} />
                  <Title
                    size="S"
                    style={{
                      flex: 1,
                      padding: `${size.ui.l4}px`,
                    }}
                  >
                    {b.title}
                  </Title>
                </Card>
              </Link>
            ))}
          </Cards>
        </Inner>
      </div>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCCategoryDetail;
