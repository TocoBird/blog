import { srcCreatePages } from './src/modules/framework/createPages';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = srcCreatePages;
