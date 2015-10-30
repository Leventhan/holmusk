/**
 * Module dependencies
 */

var assert = require('assert');
var fs = require('fs');

/**
 * Locals
 */

var parser = require('../lib/parser');

/**
 * Tests
 */

describe('parse.js', function() {
    describe('parseNutrition', function() {
        it('should parse correctly', function () {
          var nutrition = {
            'Calories': '421',
            'Sodium': '1,269 mg',
            'Total Fat': '10 g',
            'Potassium': '221 mg',
            'Saturated': '3 g',
            'Total Carbs': '58 g',
            'Polyunsaturated': '2 g',
            'Dietary Fiber': '4 g',
            'Monounsaturated': '4 g',
            'Sugars': '4 g',
            'Trans': '0 g',
            'Protein': '24 g',
            'Cholesterol': '0 mg',
            'Vitamin A': '21%',
            'Calcium': '2%',
            'Vitamin C': '14%',
            'Iron': '8%'
          };

          fs.readFile('test/stubs/food.json', 'utf8', function (err,data) {
            var food = JSON.parse(data);
            var parsed = parser.parseNutrition(food.nutrition);
            assert.equal(nutrition, parsed);
          });
        });
    });
});