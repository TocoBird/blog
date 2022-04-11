import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Content = styled.div`
  text-align: center;
`;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  flex-wrap: wrap;
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
const TemplateSPCategoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Content
        style={{ padding: size.ui.l3, background: color.box.background }}
      >
        <Title size="M">カテゴリーで記事を探す</Title>

        <Spacer.M />

        <div>
          {p.categories.map(c => (
            <Fragment key={c.id}>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory
                  style={{
                    color:
                      c.id === p.selectedCategolyId
                        ? '#ffc770'
                        : color.button.text,
                  }}
                >
                  <IconHash icon={faHashtag} />
                  {c.name}
                </ButtonCategory>
              </Link>

              <Spacer.S />
            </Fragment>
          ))}
        </div>
      </Content>

      <Spacer.M />

      <div>
        {p.blogs.map(b => (
          <Fragment key={b.id}>
            <Link to={`/article/${b.id}`}>
              <Card style={{ background: color.box.background }}>
                <Thumbnail width="120px" height="80px" url={b.thumbnail} />
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

            <Spacer.M />
          </Fragment>
        ))}
      </div>

      <Spacer.M />
    </Wrapper>
  );
};

export default TemplateSPCategoryDetail;
