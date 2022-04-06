import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { StaticImage } from 'gatsby-plugin-image';
import { DomainBlog } from '../../../modules/interfaces/domain/blog';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS, SpacerL } from '../atoms/Spacer';

const Wrapper = styled.div``;

const Top = styled.div`
  background: whitesmoke;
  background-image: url('../../../images/TocoBridBlogTopHeader.jpg');
  height: 600px;
  background-size: cover;
  background-position: 50% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TopItem = styled.div`
  text-align: center;
`;
const Title = styled.div``;
const TitleSub = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
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

const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;
const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Content = styled.div`
  width: 48.5%;
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
  box-sizing: border-box;
  margin-bottom: ${size.ui.l8}px;
`;
const ContentTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 24px;
`;

interface Props {
  /** ブログ一覧 */
  readonly blogs: DomainBlog[];
}

/**
 * テンプレート：トップページ
 */
const TemplatePCIndex: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Top>
        <TopItem>
          <Title>
            <StaticImage
              src="../../../images/TocoBlogLogo.png"
              alt="TocoBlog"
              height={160}
            />
          </Title>
          <SpacerS />
          <TitleSub>プロダクト開発の情報を発信</TitleSub>
        </TopItem>
      </Top>

      <SpacerL />

      <BlogsTitle>最新の記事</BlogsTitle>

      <SpacerL />

      <Contents>
        <Content>
          <ContentTitle>プロダクト開発</ContentTitle>
          <SpacerS />
          <div>a</div>
        </Content>
        <Content>
          <ContentTitle>チーム開発</ContentTitle>
          <SpacerS />
          <div>a</div>
        </Content>
        <Content>
          <ContentTitle>チーム開発</ContentTitle>
          <SpacerS />
          <div>a</div>
        </Content>
      </Contents>

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

export default TemplatePCIndex;
