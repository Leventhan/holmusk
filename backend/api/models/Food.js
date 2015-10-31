/**
* Food.js
*
* @description :: A Food object describing its nutritional value.
* @docs        :: http://sailsjs.org/#!documentation/models
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
  }
};

