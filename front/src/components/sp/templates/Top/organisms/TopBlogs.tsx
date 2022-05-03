import { faHashtag, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import TopBlog from '@/components/sp/templates/Top/molecules/TopBlog';
import { DomainTopCategory } from '@/domain/top/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Content = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l5}px ${size.ui.l4}px;
  box-sizing: border-box;
`;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const IconArrow = styled(FontAwesomeIcon)`
  margin-left: 8px;
`;

interface Props {
  /** カテゴリ別記事一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * トップページ：カテゴリ別記事の一覧
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.categories.map((c: DomainTopCategory, index: number) => (
        <Fragment key={c.id}>
          {index !== 0 && <Spacer.L />}

          <Content
            style={{
              background: color.box.background,
            }}
          >
            <Title size="M">
              <IconHash icon={faHashtag} />
              {c.name}
            </Title>

            <Spacer.XM />

            <TopBlog blogs={c.blogs} />

            <Spacer.XM />

            <Link
              to={`/category/${c.id}`}
              style={{
                color: color.text.main,
              }}
            >
              <ButtonCategory>
                {c.name}の記事
                <IconArrow icon={faAngleRight} />
              </ButtonCategory>
            </Link>
          </Content>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopBlogs;
