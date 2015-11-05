/**
* Food.js
*
* @description :: A Food object describing its name and nutritional value.
*/

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true
    },
    company: {
      type: 'string',
      required: true
    },
    nutrition: {
      type: 'json',
      required: true
    }
  },
  afterCreate: function(newlyInsertedRecord, cb) {
    index(newlyInsertedRecord, cb);
  }
};

/**
 * Helper method for indexing a new record on ElasticSearch
 *
 * @param {Object} record              - the newly inserted waterline record
 * @param {Function} callback          - the Sails.js lifecycle callback callback
 */
function index(record, callback) {
  var food = record;
  ElasticSearchService.index({
    index: 'foods',
    type: 'food',
    id: food.id,
    body: {
      name: food.name,
      id: food.id
    }
  }).then(function(response) {
    callback();
  }, function(err) {
    console.error('Error creating ES index for Food#' + food.id);
    callback(err);
  });
};
