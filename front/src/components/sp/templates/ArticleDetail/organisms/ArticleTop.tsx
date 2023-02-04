import { faClock, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import ButtonCategory from '@/components/sp/common/atoms/ButtonCategory';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Title from '@/components/sp/common/atoms/Title';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const TopContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${size.font.sp.l2}px;
`;
const Date = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Category = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
  font-size: ${size.font.sp.l2}px;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
  font-size: ${size.font.sp.l2}px;
`;

interface Props {
  /** 記事一覧 */
  readonly blog: DomainArticleDetailBlog;
}

/**
 * 記事詳細：上部
 */
const ArticleTop: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Title size="M">{p.blog.title}</Title>

      <Spacer.M />

      <TopContentItems>
        <Category>
          <Link to={`/category/${p.blog.categoryId}`}>
            <ButtonCategory
              style={{
                padding: `${size.ui.l2}px ${size.ui.l5}px`,
                fontSize: `${size.font.sp.l2}px`,
              }}
            >
              <IconHash icon={faHashtag} />
              {p.blog.categoryName}
            </ButtonCategory>
          </Link>
        </Category>
        <Date style={{ color: color.text.mainThin }}>
          <Icon icon={faClock} />
          更新日 {p.blog.updatedAt}
        </Date>
      </TopContentItems>
    </Wrapper>
  );
};

export default ArticleTop;
