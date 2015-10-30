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
}
scraper.scrape(options, function(err, results) {
  // TODO: call POST endpoint to insert new foods into DB
  console.log(results);
});