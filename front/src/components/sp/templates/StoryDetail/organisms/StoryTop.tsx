import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import ButtonCategory from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const TopContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${size.font.sp.l3}px;
`;
const Date = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Category = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
  font-size: ${size.font.sp.l3}px;
`;

interface Props {
  /** 記事一覧 */
  readonly blog: DomainStoryDetailStoryBlog;
}

/**
 * ストーリー記事詳細：上部
 */
const StoryTop: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Title size="M">{p.blog.title}</Title>

      <Spacer.M />

      <TopContentItems>
        <Category>
          <ButtonCategory>ストーリー</ButtonCategory>
        </Category>
        <Date style={{ color: color.text.mainThin }}>
          <Icon icon={faClock} />
          {p.blog.updatedAt}更新
        </Date>
      </TopContentItems>
    </Wrapper>
  );
};

export default StoryTop;
