import React from 'react';
import { Helmet } from 'react-helmet';
import '@/components/layouts/css/layout.css';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

interface Props {
  readonly option: MetaOption;
}

/**
 * HTMLのHead
 */
const HTMLHead: React.FC<Props> = (p: Props): JSX.Element => {
  const title = p.option.title;
  const lang = 'ja';
  const description = p.option.description;
  const keywords = p.option.keywords;
  const thumbnail = p.option.thumbnail || '';
  /** HEADのCSS */
  const link = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
      rel: 'stylesheet',
    },
  ];
  /** HEADのMETA要素 */
  const meta = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:site_name',
      content: 'TocoBlog',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: `website`,
    },
    {
      property: 'og:image',
      content: thumbnail,
    },
    {
      name: 'twitter:card',
      content: `summary`,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={link}
      meta={meta}
    />
  );
};

export default HTMLHead;
