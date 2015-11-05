/**
 * ElasticSearchService
 *
 * @description :: Lightweight wrapper over ElasticSearch
 */
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: sails.config.elasticsearch.host,
  log: sails.config.elasticsearch.log
});

module.exports = {
  search: function(options) {
    return client.search(options);
  },
  index: function(options) {
    return client.index(options);
  }
};
