'use strict';

/**
 * favorite-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-blog.favorite-blog');
