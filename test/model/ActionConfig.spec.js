/**
 * Versify API
 * Versify API
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
    factory(root.expect, root.VersifylabsVersifyClient);
  }
}(this, function(expect, VersifylabsVersifyClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VersifylabsVersifyClient.ActionConfig();
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

  describe('ActionConfig', function() {
    it('should create an instance of ActionConfig', function() {
      // uncomment below and update the code to test ActionConfig
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be.a(VersifylabsVersifyClient.ActionConfig);
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property member (base name: "member")', function() {
      // uncomment below and update the code to test the property member
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message_type")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property seconds (base name: "seconds")', function() {
      // uncomment below and update the code to test the property seconds
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new VersifylabsVersifyClient.ActionConfig();
      //expect(instance).to.be();
    });

  });

}));
