require('dotenv').config({
  path: `./.env`,
});

/**
 * graphql
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.tocobird.com',
    title: 'tocoblog',
    description: 'blog',
    author: 'toco',
    lang: 'ja',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': 'src',
        },
        extensions: [],
      },
    },
    `gatsby-plugin-react-helmet`, // メタタグ
    `gatsby-plugin-image`, // 画像
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'strapi',
        fieldName: 'strapi',
        url: process.env.STRAPI_URL,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`,
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-linaria',
      loaderOptions: {
        cacheDirectory: './.cache/caches/gatsby-plugin-linaria',
      },
    },
    {
      // アイコン
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `TocoBlog`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: './src/images/TocoBlogFavicon.png',
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
