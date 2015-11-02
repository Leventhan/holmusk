/**
 * Module dependencies
 */
var request = require('supertest');

/**
 * Tests
 */
describe('FoodsController', function() {

  describe('GET /foods', function() {
    it('should respond with JSON', function(done) {
      request(sails.hooks.http.app)
        .get('/api/v1/foods')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('GET /foods/:id', function() {
    var INVALID_ID = 0;

    it('should respond with JSON', function(done) {
      request(sails.hooks.http.app)
        .get('/api/v1/foods/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when id is invalid', function(done) {
      request(sails.hooks.http.app)
        .get('/api/v1/foods/' + INVALID_ID)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('GET /foods/autocomplete', function() {
    it('should respond with JSON', function(done) {
      request(sails.hooks.http.app)
        .get('/api/v1/foods/autocomplete?q=cheese')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 400 when query is missing', function(done) {
      request(sails.hooks.http.app)
        .get('/api/v1/foods/autocomplete')
        .expect(400)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe('POST /foods', function() {
    it('should respond with JSON', function(done) {
      var food = {
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
      };

      request(sails.hooks.http.app)
        .post('/api/v1/foods')
        .send(food)
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 400 if attributes are missing', function(done) {
      var food = {
        name: 'Cheese - Caraway',
        url: 'http://www.myfitnesspal.com/food/calories/1008',
        company: 'Generic'
      };

      request(sails.hooks.http.app)
        .post('/api/v1/foods')
        .send(food)
        .expect(400)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

});
