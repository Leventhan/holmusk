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

    Food.find({}, {select: ['name', 'id']})
    .where({name: {contains: term}})
    .limit(10)
    .exec(function(err, results) {
      if (err) {
        return res.serverError(err);
      }

      res.ok(results);
    });
  }
};
