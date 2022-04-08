import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import {
  DomainTopPageCategory,
  DomainTopPageBlog,
} from '../../../modules/interfaces/domain/category';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS, SpacerL } from '../atoms/Spacer';
import TopHeader from '../organisms/top/TopHeader';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
const ContentTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 22px;
`;
const Card = styled.div`
  background: ${colors.card.main};
  display: flex;
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 110px;
  height: 70px;
  background-size: cover;
  background-position: 50% 50%;
`;
const CardTitle = styled.div`
  flex: 1;
  padding-left: ${size.ui.l4}px;
  font-weight: bold;
  font-size: 15px;
  flex: 1;
  color: ${colors.text.mainBold};
`;
const Contents = styled.div``;
const Content = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l4}px;
  box-sizing: border-box;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopPageCategory[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <SpacerL />

      <BlogsTitle>最新の記事</BlogsTitle>

      <SpacerL />

      <Contents>
        {p.categories.map((c: DomainTopPageCategory) => (
          <Fragment key={c.id}>
            <Content>
              <ContentTitle>#{c.name}</ContentTitle>

              <SpacerS />

              {c.blogs.map((b: DomainTopPageBlog) => (
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
            </Content>

            <SpacerL />
          </Fragment>
        ))}
      </Contents>
    </Wrapper>
  );
};

export default TemplateSPTop;
