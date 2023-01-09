/**
 * Versify API
 * Versify API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VersifyApi);
  }
}(this, function(expect, VersifyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VersifyApi.AccountMetrics();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountMetrics', function() {
    it('should create an instance of AccountMetrics', function() {
      // uncomment below and update the code to test AccountMetrics
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be.a(VersifyApi.AccountMetrics);
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

    it('should have the property journeyRuns (base name: "journey_runs")', function() {
      // uncomment below and update the code to test the property journeyRuns
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

    it('should have the property journeys (base name: "journeys")', function() {
      // uncomment below and update the code to test the property journeys
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

    it('should have the property mints (base name: "mints")', function() {
      // uncomment below and update the code to test the property mints
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

    it('should have the property redemptions (base name: "redemptions")', function() {
      // uncomment below and update the code to test the property redemptions
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new VersifyApi.AccountMetrics();
      //expect(instance).to.be();
    });

  });

}));
