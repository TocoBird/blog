import { convertNodes, Node } from '@/modules/common/markdown';

interface UseReturn {
  readonly nodes: Node[];
}

/**
 * 簡易的にやってしまう。後々ライブラリ入れて正確にする。
 */
export const useHooks = (text: string): UseReturn => {
  const nodes: Node[] = convertNodes(text);

  return {
    nodes,
  };
};
