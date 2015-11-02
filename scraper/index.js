/**
 * Module Dependencies
 */

var requestify = require('requestify');

/**
 * Locals
 */

var scraper = require('./lib/scraper');

/**
 * Code
 */

var args = process.argv.slice(2);
var options = {
  pages: parseInt(args[0]),
  brand: args[1]
};

/*
* Here, we're calling our scraper (which is its own module and reusable
* throughout multiple applications) and performing an action with the results
* returned within the callback (in this case, saving the results into the DB.)
*/
scraper.scrape(options, function(err, results) {
  var CREATE_FOOD_URL = 'http://localhost:1337/api/v1/foods';

  // Insert scraped food objects into DB
  results.map(function(food) {
    requestify.post(CREATE_FOOD_URL, food)
    .then(function(response) {
      console.log(response.getBody());
    });
  });
});
