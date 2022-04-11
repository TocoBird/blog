import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainCategoryDetailBlog } from '@/domain/categoryDetail/blog';
import { DomainCategoryDetailCategory } from '@/domain/categoryDetail/category';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Content = styled.div`
  text-align: center;
  background: ${colors.box.background};
`;
const Card = styled.div`
  background: ${colors.box.background};
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  flex-wrap: wrap;
`;
const CardTitle = styled(Title.S)`
  flex: 1;
  padding: ${size.ui.l4}px;
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
  return (
    <Wrapper>
      <Content style={{ padding: size.ui.l3 }}>
        <Title.M>カテゴリーで記事を探す</Title.M>

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
              <Card>
                <Thumbnail width="120px" height="80px" url={b.thumbnail} />
                <CardTitle>{b.title}</CardTitle>
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
