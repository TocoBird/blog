import { faBookOpen, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/common/atoms/Box';
import ButtonSub from '@/components/pc/common/atoms/ButtonSub';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Thumbnail from '@/components/pc/common/atoms/Thumbnail';
import Title from '@/components/pc/common/atoms/Title';
import LabelTitle from '@/components/pc/common/molecules/LabelTitle';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';

const Wrapper = styled.div``;
const Articles = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LinkInner = styled.div`
  transition: 0.2s;
  &:hover {
    opacity: 0.85;
    box-shadow: 0 8px 24px #0f1c2c40;
  }
`;
const IconArrow = styled(FontAwesomeIcon)`
  margin-left: 8px;
`;

interface Props {
  /** 関連する記事一覧 */
  readonly blogs: DomainArticleDetailRelatedBlog[];
  /** この記事のカテゴリID */
  readonly categoryId: number;
}

/**
 * 記事詳細：関連する記事
 */
const ArticleContent: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <LabelTitle size="XM" icon={faBookOpen}>
        関連する記事
      </LabelTitle>

      <Spacer.XM />

      <Articles>
        {p.blogs.map((b: DomainArticleDetailRelatedBlog, index: number) => (
          <Link
            to={`/article/${b.urlid}`}
            key={`${index}_${b.id}`}
            style={{
              width: '49%',
            }}
          >
            <LinkInner>
              <Box size="S">
                <Thumbnail
                  width="100%"
                  height="220px"
                  url={b.thumbnail}
                  isLazy={true}
                />

                <Spacer.M />

                <Title size="S">{b.title}</Title>
              </Box>
            </LinkInner>
          </Link>
        ))}
      </Articles>

      <Spacer.L />

      <Link to={`/category/${p.categoryId}`}>
        <ButtonSub>
          関連記事を探す
          <IconArrow icon={faAngleRight} />
        </ButtonSub>
      </Link>
    </Wrapper>
  );
};

export default ArticleContent;
