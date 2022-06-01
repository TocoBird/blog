import { faFire, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import TopBlogs from '@/components/sp/templates/Top/organisms/TopBlogs';
import TopConcept from '@/components/sp/templates/Top/organisms/TopConcept';
import TopHeader from '@/components/sp/templates/Top/organisms/TopHeader';
import TopStories from '@/components/sp/templates/Top/organisms/TopStories';
import { DomainTopCategory } from '@/domain/top/blog';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  font-size: 32px;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
  /** ストーリー記事一覧 */
  readonly stroyBlogs: DomainTopStoryBlog[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <Spacer.L />

      <Title
        size="L"
        style={{
          textAlign: 'center',
        }}
      >
        <Icon icon={faBookBookmark} />
        <br />
        おすすめの具体案
      </Title>

      <Spacer.L />

      <TopStories stroyBlogs={p.stroyBlogs} />

      <Spacer.L />

      <Title
        size="XM"
        style={{
          textAlign: 'center',
        }}
      >
        <Icon icon={faFire} />
        <br />
        新着の記事
      </Title>

      <Spacer.L />

      <TopBlogs categories={p.categories} />

      <Spacer.L />

      <TopConcept />
    </Wrapper>
  );
};

export default TemplateSPTop;
