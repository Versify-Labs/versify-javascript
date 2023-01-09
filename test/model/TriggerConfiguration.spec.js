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
    instance = new VersifyApi.TriggerConfiguration();
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

  describe('TriggerConfiguration', function() {
    it('should create an instance of TriggerConfiguration', function() {
      // uncomment below and update the code to test TriggerConfiguration
      //var instance = new VersifyApi.TriggerConfiguration();
      //expect(instance).to.be.a(VersifyApi.TriggerConfiguration);
    });

    it('should have the property detailFilters (base name: "detail_filters")', function() {
      // uncomment below and update the code to test the property detailFilters
      //var instance = new VersifyApi.TriggerConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property detailType (base name: "detail_type")', function() {
      // uncomment below and update the code to test the property detailType
      //var instance = new VersifyApi.TriggerConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new VersifyApi.TriggerConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new VersifyApi.TriggerConfiguration();
      //expect(instance).to.be();
    });

  });

}));
