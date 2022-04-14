# strapi

headless CMS.  
(can upload to S3.)  
https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html

## aws memo

1. create user with IAM.
2. create s3 bucket and set policy.

## graphql

http://localhost:1337/graphql

## install

```
npm i @strapi/strapi better-sqlite3
npm i strapi-plugin-comments @strapi/plugin-graphql @strapi/plugin-i18n @strapi/plugin-users-permissions @strapi/provider-upload-aws-s3
```
