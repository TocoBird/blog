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
import size from '@/modules/common/size';

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
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
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

  return (
    <Wrapper>
      <Content
        style={{
          background: color.box.background,
        }}
      >
        <Inner>
          <Spacer.L />

          <Title size="XM">カテゴリーで記事を探す</Title>

          <Spacer.XM />

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
          {p.blogs.map((b, index: number) => (
            <Fragment key={b.id}>
              {index !== 0 && <Spacer.S />}

              <Link to={`/article/${b.id}`}>
                <Card
                  style={{
                    background: color.box.background,
                  }}
                >
                  <Thumbnail width="140px" height="100px" url={b.thumbnail} />
                  <Title
                    size="XS"
                    style={{
                      flex: 1,
                      padding: `${size.ui.l4}px`,
                    }}
                  >
                    {b.title}
                  </Title>
                </Card>
              </Link>
            </Fragment>
          ))}
        </Inner>
      </div>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCCategoryDetail;
