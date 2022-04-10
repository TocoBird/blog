type ErrorWrapper =
  | unknown
  | EvalError
  | RangeError
  | ReferenceError
  | SyntaxError
  | TypeError
  | URIError
  | Error;

/**
 * エラーのメッセージをラップする
 * @param e エラー
 * @param message メッセージ
 * @returns エラー
 */
export const errorWrapper = (e: unknown, message: string): ErrorWrapper => {
  if (
    e instanceof EvalError ||
    e instanceof RangeError ||
    e instanceof ReferenceError ||
    e instanceof SyntaxError ||
    e instanceof TypeError ||
    e instanceof URIError ||
    e instanceof Error
  ) {
    // メッセージをラップ
    e.message = `[${message}] <- ${e.message}`;
  }

  return e;
};
