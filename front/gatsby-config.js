require('dotenv').config({
  path: `./.env`,
});

/**
 * graphql
 */
module.exports = {
  siteMetadata: {
    siteurl: 'https://localhost:8000',
    title: 'tocoblog',
    description: 'blog',
    author: 'toco',
    lang: 'ja',
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // メタタグ
    `gatsby-plugin-image`, // 画像
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    // {
    //   // PWA アイコン
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
