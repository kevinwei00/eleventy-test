module.exports = function (config) {
  return {
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      includes: '_templates',
      layouts: '_layouts',
    },
  };
};
