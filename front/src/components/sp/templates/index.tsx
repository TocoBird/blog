import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { DomainBlog } from '../../../modules/domain/blog';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS } from '../atoms/Spacer';

const Wrapper = styled.div``;

const Top = styled.div`
  background: ${colors.card.main};
  padding: 16px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.text.mainBold};
`;
const TitleSub = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.text.mainBold};
`;

const Card = styled.div`
  background: ${colors.card.main};
  display: flex;
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
`;
const CardTitle = styled.div`
  flex: 1;
  padding: ${size.ui.l4}px;
  font-weight: 500;
  font-size: 15px;
  flex: 1;
  color: ${colors.text.mainBold};
`;

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainBlog[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPIndex: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Top>
        <Title>TocoBirdBlog</Title>
        <TitleSub>プロダクト開発のための情報をまとめたブログ</TitleSub>
      </Top>

      <SpacerS />

      {p.blogs.map((d: DomainBlog) => (
        <Fragment key={d.id}>
          <Link to={`/article/${d.id}`}>
            <Card>
              <Thumbnail
                style={{
                  backgroundImage: `url('${d.thumbnail}')`,
                }}
              />
              <CardTitle>{d.title}</CardTitle>
            </Card>
          </Link>

          <SpacerS />
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TemplateSPIndex;
