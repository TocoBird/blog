import { faClock, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import ButtonCategory from '@/components/pc/common/atoms/ButtonCategory';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import ContentCenter from '@/components/pc/common/frames/ContentCenter';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  box-shadow: 0 2px 24px #0f1c2c12;
`;
const Content = styled(ContentCenter)``;
const Inner = styled.div`
  padding: ${size.ui.l12}px 0;
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${size.font.pc.l3}px;
`;
const Date = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Category = styled.div``;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
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
    <Wrapper
      style={{
        background: color.box.background,
      }}
    >
      <Content>
        <Inner>
          <Title size="XL">{p.blog.title}</Title>

          <Spacer.M />

          <Items>
            <Category>
              <Link to={`/category/${p.blog.categoryId}`}>
                <ButtonCategory>
                  <IconHash icon={faHashtag} />
                  {p.blog.categoryName}
                </ButtonCategory>
              </Link>
            </Category>
            <Date
              style={{
                color: color.text.mainThin,
              }}
            >
              <Icon icon={faClock} />
              更新日 {p.blog.updatedAt}
            </Date>
          </Items>
        </Inner>
      </Content>
    </Wrapper>
  );
};

export default ArticleTop;
