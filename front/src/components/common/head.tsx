import React from 'react';
import { Helmet } from 'react-helmet';
import './css/layout.css';

/**
 * HTMLのHead
 */
const HTMLHead: React.FC = (): JSX.Element => {
  const title = 'TocoBlog';
  const lang = 'ja';
  const description = 'tocoblog';
  const keywords = 'tocoblog,blog';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={[
        {
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
          rel: 'stylesheet',
        },
      ]}
      meta={[
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
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: `website`,
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
          content: 'initial-scale=1.0, width=device-width, user-scalable=no',
        },
      ]}
    />
  );
};

export default HTMLHead;
