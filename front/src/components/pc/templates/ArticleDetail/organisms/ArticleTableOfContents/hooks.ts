import { TagNode, TagH } from '@/modules/common/markdown';

type TableOfContent = TagH & { readonly num: number };

interface UseReturn {
  readonly hs: TableOfContent[];
}

/**
 * 目次で使う
 */
export const useHooks = (nodes: TagNode[]): UseReturn => {
  const tagHs = nodes.filter(
    n => n.type === 'h' && (n.size === 1 || n.size === 2)
  ) as TagH[];

  let num = 0;
  const hs: TableOfContent[] = tagHs.map((h: TagH) => {
    if (h.size === 1) num++;

    return {
      ...h,
      num,
    };
  });

  return { hs };
};
