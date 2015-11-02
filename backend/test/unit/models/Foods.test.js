/**
 * Module dependencies
 */
var assert = require('assert');

/**
 * Tests
 */
describe('FoodModel', function() {

  describe('#create()', function() {
    it('should be able to create a Food', function(done) {
      Food.create({
        name: 'Cheese - Caraway',
        url: 'http://www.myfitnesspal.com/food/calories/1008',
        company: 'Generic',
        nutrition: {
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
        }
      })
      .then(function(food) {
        assert.equal(food.name, 'Cheese - Caraway', 'should have set the name');
        assert.equal(food.url, 'http://www.myfitnesspal.com/food/calories/1008',
                     'should have set the url');
        assert.equal(food.company, 'Generic', 'should have set the company');
        assert.equal(Object.keys(food.nutrition).length,
                     17, 'should have nutrition information');
        done();
      })
      .catch(done);
    });
  });

});
