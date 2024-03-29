import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/sp/common/atoms/ButtonCategory';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Thumbnail from '@/components/sp/common/atoms/Thumbnail';
import Title from '@/components/sp/common/atoms/Title';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Content = styled.div`
  text-align: center;
`;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 2px;
`;
const CardRight = styled.div`
  flex: 1;
  padding: 0 ${size.ui.l3}px;
  display: flex;
  align-items: center;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
`;
const Categorys = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CategoryItem = styled.div`
  margin-top: ${size.ui.l3}px;
  margin-right: ${size.ui.l3}px;
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
 * このページのみデザイン途中なのでリファクタはしない
 */
const TemplateSPCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const selectedCategory = p.categories.find(
    c => c.id === p.selectedCategolyId
  );

  return (
    <Wrapper>
      <Content
        style={{
          padding: `0 ${size.ui.l3}px`,
          background: color.box.background,
        }}
      >
        <Spacer.L />

        <Title size="L">{selectedCategory?.name}の記事</Title>

        <Spacer.M />

        <Categorys>
          {p.categories.map(c => (
            <CategoryItem key={c.id}>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory isActive={c.id === p.selectedCategolyId}>
                  <IconHash icon={faHashtag} />
                  {c.name}
                </ButtonCategory>
              </Link>
            </CategoryItem>
          ))}
        </Categorys>

        <Spacer.L />
      </Content>

      <Spacer.M />

      <div
        style={{
          padding: `0 ${size.ui.l3}px`,
        }}
      >
        {p.blogs.map((b, index: number) => (
          <Fragment key={b.id}>
            {index !== 0 && <Spacer.XM />}

            <Link to={`/article/${b.urlid}`}>
              <Card style={{ background: color.box.background }}>
                <Thumbnail width="120px" height="80px" url={b.thumbnail} />
                <CardRight>
                  <Title size="S">{b.title}</Title>
                </CardRight>
              </Card>
            </Link>
          </Fragment>
        ))}
      </div>

      <Spacer.M />
    </Wrapper>
  );
};

export default TemplateSPCategoryDetail;
