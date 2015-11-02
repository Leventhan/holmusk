/**
 * Module Dependencies
 */

var _ = require('underscore');
var Xray = require('x-ray');
var x = Xray();

/**
 * Locals
 */

var parser = require('./parser');

/**
 * Constants
 */

var DEFAULT_PAGES = 1;
var DEFAULT_BRAND = 'generic';

/**
 * Scraper
 */

module.exports = {
  /*
  * Scrapes {pages} worth of a given {brand}'s' foods
  * @param brand name {String}
  * @param number of pages {Integer}
  * @param on-completion callback {Function}
  * @return collection of Food JSON objects {Array} within callback
  */
  scrape: function(options, callback) {
    brand = options.brand || DEFAULT_BRAND;
    pages = options.pages || DEFAULT_PAGES;

    x('http://www.myfitnesspal.com/nutrition-facts-calories/' + brand,
      '.food_search_results li', [{
          name: '.food_description a',
          company: '.food_description a.brand',
          url: '.food_description a@href',
          nutrition: x('.food_description a@href', '#nutrition-facts@html')
        }])
      .paginate('.next_page@href')
      .limit(pages)
      (function(err, arr) {
        var foods = _.map(arr, function(food) {
          food.nutrition = parser.parseNutrition(food.nutrition);
          return food;
        });

        callback(null, foods);
      });
  }

};
