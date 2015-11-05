/**
 * Module Dependencies
 */

var _ = require('underscore');

/**
 * FoodController
 *
 * @description :: Server-side logic for managing foods
 */

module.exports = {
  /**
   * Autocomplete Foods
   *
   *  GET   /foods/autocomplete
   *
   * An API call to find and return Food instances whose names contain a search term q.
   *
   * @param {String} q             - the search term
   * @return {JSON} results        - the collection of Food instances
   */
  autocomplete: function(req, res) {
    var term = req.param('q');
    if (!term) {
      return res.badRequest('Missing required search term q.');
    }

    ElasticSearchService.search({
      index: 'foods',
      type: 'food',
      body: {
        size: 10,
        query: {
          match: {
            name: term
          }
        }
      }
    }).then(function(body) {
      var hits = body.hits.hits;
      results = _.pluck(hits, '_source');
      res.ok(results);
    }, function(error) {
      res.serverError(error.message);
    });

  }
};
