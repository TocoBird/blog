# FRONT

# Get Started

```
npm i

cp ./env/env.sample .env

npm run develop
```

## todo

・コンポーネントの分離  
・細かい部分の速度改善  
・RSS フィードの実装  
・i18n  
・graphql のクエリ直接叩くのを変える

## src の構成

### components

React のコンポーネントが入る。  
SP, PC の端末ごとで分離している。

### domain

ドメインが入る

### i18n

多言語対応のファイルが入る

### images

画像が入る

### modules

データ整形や色の取得などのロジックが入る

### pages

サイトのページが入る

### pagesDynamic

動的に作成されるサイトのページが入る。  
ID を持った詳細ページなど

# other

その他コマンド

## test

unit test はファイルと同じディレクトに追加

```
npm run test
```

## lint

```
npm run lint:fix
```

## update

```
npm i gatsby gatsby-plugin-alias-imports gatsby-plugin-gatsby-cloud gatsby-plugin-image gatsby-plugin-linaria gatsby-plugin-manifest gatsby-plugin-react-helmet gatsby-plugin-sharp gatsby-plugin-sitemap gatsby-plugin-typescript gatsby-source-filesystem gatsby-source-graphql gatsby-transformer-remark gatsby-transformer-sharp

npm i ts-node core-js linaria react react-cookie react-dom react-helmet react-lazyload @types/react-lazyload react-responsive dayjs react-copy-to-clipboard @types/react-copy-to-clipboard

npm i -D @babel/core @babel/preset-env @types/jest @types/node @types/react @types/react-dom @types/react-helmet @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest babel-preset-gatsby eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-react jest prettier ts-jest typescript
```
