# ドメイン

フロントでは、サービス単位のみでドメインを定義すると依存関係が密になるので、ページ単位で作る。
サービス単位で定義したものは \_site(仮) に入れてます。
サービス単位のドメインを implements でページ単位のドメインに紐づけてます。

## class を使う理由

export type Category = CategoryId & CategoryName;
の状態で使ったほうがコード量が少なくて楽です。
しかし下記のエラーを検出できないでの、class にしています。

```

interface A {
  name: string;
}
interface B {
  title: string;
}
type Category2 = A & B;
type Category3 = A;

const a: Category2 = { title: '', name: '' };
const c: Category3 = { title: '', name: '' }; // nameでエラーする
const b: Category3 = a; // このように代入した場合は、エラーしない
```

## getter を入れるかどうか

この形にしないと class に対してオブジェクトのまま代入した時エラーになりません。
class のプロパティと interface はほぼ同義に扱われています。

```
// どちらもエラーしない
class Book {
  constructor(readonly id: number = 0) {}
}
const a: Book = new Book(11);
const b: Book = { id: 22 }; // エラーしない

// cont b2でTSのエラーが出る
class Book2 {
  constructor(private readonly _id: number = 0) {}
  public id(): number {
    return this._id;
  }
}
const a2: Book2 = new Book2(11);
const b2: Book2 = { id: 22 }; // エラーする

// 「number, () => number」の型の違いでエラーが起きてるだけではあります。
// より良い方法があるかもしれないです。

// というメリットはあるものの、変数を呼び出すときに()をつけます。
// このa2.id()の（）をつけ忘れてもエラーにならず値も取得できません。使用回数としても変数の呼び出しの方が多いです。
// またページ単位でドメインを設定しているのもあり、ドメインにロジックを無闇に入れたくない気持ちもあります。
```

今回は、とても安直ですがコードミスした時のリスクが小さく、エラーの発見がしやすい getter なしを採用しました。
