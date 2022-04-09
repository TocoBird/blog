import type { GatsbyNode } from 'gatsby';
import { srcCreatePages } from './src/modules/framework/createPages';

export const createPages: GatsbyNode['createPages'] = srcCreatePages;
