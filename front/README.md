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
