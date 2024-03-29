import { faFire, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import TopBlogs from '@/components/pc/templates/Top/organisms/TopBlogs';
import TopHeader from '@/components/pc/templates/Top/organisms/TopHeader';
import TopStories from '@/components/pc/templates/Top/organisms/TopStories';
import { DomainTopCategory } from '@/domain/top/blog';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';

const Wrapper = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
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
const TemplatePCTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <Spacer.XXL />

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

      <Spacer.XXL />

      <TopStories stroyBlogs={p.stroyBlogs} />

      <Spacer.XXL />

      <Title
        size="L"
        style={{
          textAlign: 'center',
        }}
      >
        <Icon icon={faFire} />
        <br />
        新着の記事
      </Title>

      <Spacer.XXL />

      <TopBlogs categories={p.categories} />

      <Spacer.XXL />
    </Wrapper>
  );
};

export default TemplatePCTop;
