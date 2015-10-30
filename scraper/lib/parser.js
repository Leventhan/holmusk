/**
 * Module Dependencies
 */

var _ = require('underscore');
var cheerio = require('cheerio');

/**
 * Export
 */

module.exports = {
  /**
   * Parses nutrition table without depending on DOM selectors
   * @param raw Nutrition HTML {String}
   * @return processed Nutrition {Object}
   */
  parseNutrition: function(nutrition){
    var $ = cheerio.load(nutrition);
    var contents = [];
    $('td').each(function(i, elem) {
      var value = $(this).text();
      var valueExists = (value.replace(/\s/g,'').length > 0);
      if (valueExists) {
          contents.push(value);
      }
    });

    var zipped = _.groupBy(contents, function(val, index){ return index % 2; });
    var keys = zipped[0];
    var values = zipped[1];
    var nutrition = _.object(keys, values);
    return nutrition;
  }
}
