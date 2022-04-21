'use strict';

/**
 * story-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::story-blog.story-blog');
