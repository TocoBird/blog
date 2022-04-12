interface TagImg {
  readonly type: 'img';
  readonly src: string;
  readonly alt: string;
}
interface TagA {
  readonly type: 'a';
  readonly href: string;
  readonly text: string;
}
interface TagH {
  readonly type: 'h';
  readonly text: string;
  readonly size: 1 | 2 | 3 | 4 | 5 | 6;
}
interface TagStrong {
  readonly type: 'strong';
  readonly text: string;
}
interface TagSpan {
  readonly type: 'span';
  readonly text: string;
}
interface TagBr {
  readonly type: 'br';
}
interface TagSpacer {
  readonly type: 'spacer';
}

type NodeInline = TagStrong | TagSpan;

interface TagP {
  readonly type: 'p';
  readonly text: string;
  readonly inlines?: NodeInline[];
}

export type Node = TagH | TagP | TagA | TagImg | TagBr | TagSpacer;

/**
 * h1
 */
const hTag = (line: string, num: number): TagH => {
  const text = line.replace(/#/g, '');

  if (num > 0 && num < 7) {
    const size = num as 1 | 2 | 3 | 4 | 5 | 6;
    return {
      type: 'h',
      size,
      text,
    };
  }

  return {
    type: 'h',
    size: 6,
    text,
  };
};

/**
 * strong
 */
const strongTag = (asts: string[]): NodeInline[] => {
  const ns: NodeInline[] = [];

  for (let i = 0; i < asts.length; i++) {
    const text = asts[i];
    if (text === '') continue;

    if (i % 2 === 0 || i === asts.length - 1) {
      ns.push({
        type: 'span',
        text,
      });
      continue;
    }

    ns.push({
      type: 'strong',
      text,
    });
  }

  return ns;
};

/**
 * img
 */
const imgTag = (imgs: string[]): TagImg => {
  const alt = imgs[1];
  const src = imgs[2];

  return {
    type: 'img',
    src,
    alt,
  };
};

/**
 * a
 */
const aTag = (as: string[]): TagA => {
  const text = as[1];
  const href = as[2];

  return {
    type: 'a',
    href,
    text,
  };
};

/**
 * 簡易的にやってしまう。後々ライブラリ入れて正確にする。
 */
export const convertNodes = (str: string): Node[] => {
  const lines = str.split('\n');
  const ns: Node[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // TAG: br
    if (line === '') {
      ns.push({
        type: 'br',
      });
      continue;
    }

    // TAG: h
    const sharpCount = line.match(/#/g)?.length || 0;
    if (sharpCount && sharpCount > 0) {
      if (i !== 0)
        ns.push({
          type: 'spacer',
        });
      ns.push(hTag(line, sharpCount));
      continue;
    }

    // TAG: strong
    const asts = line.split('**') || [];
    if (asts.length > 2) {
      const inlines = strongTag(asts);
      ns.push({
        type: 'p',
        text: '',
        inlines,
      });
      continue;
    }

    // TAG: img
    // 1行のみ
    if (line.includes('![') && line.includes('](') && line.includes(')')) {
      const imgs = line.split(/!\[|\]\(|\)/g);

      if (imgs.length > 3) ns.push(imgTag(imgs));
      continue;
    }

    // TAG: a
    // 1行のみ
    if (line.includes('[') && line.includes('](') && line.includes(')')) {
      const as = line.split(/\[|\]\(|\)/g);
      if (as.length > 3) ns.push(aTag(as));
      continue;
    }

    // TAG: p
    ns.push({
      type: 'p',
      text: line,
    });
  }

  return ns;
};
