/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Locals
 */

var scraper = require('../lib/scraper');

/**
 * Tests
 */

describe('scraper.js', function() {
  describe('scrape', function () {
    it('should scrape correctly', function (done) {
        this.timeout(8000);
        scraper.scrape({}, function(err, results) {
            assert.equal(err, null);
            assert.equal(20, results.length);
            done();
        });
    });
  });
});