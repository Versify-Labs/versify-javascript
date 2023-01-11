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
    instance = new VersifylabsVersifyClient.Brand();
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

  describe('Brand', function() {
    it('should create an instance of Brand', function() {
      // uncomment below and update the code to test Brand
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be.a(VersifylabsVersifyClient.Brand);
    });

    it('should have the property actionColor (base name: "action_color")', function() {
      // uncomment below and update the code to test the property actionColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColor (base name: "background_color")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property primaryColor (base name: "primary_color")', function() {
      // uncomment below and update the code to test the property primaryColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property secondaryColor (base name: "secondary_color")', function() {
      // uncomment below and update the code to test the property secondaryColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property tertiaryColor (base name: "tertiary_color")', function() {
      // uncomment below and update the code to test the property tertiaryColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property walletActionColor (base name: "wallet_action_color")', function() {
      // uncomment below and update the code to test the property walletActionColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property walletBackgroundColor (base name: "wallet_background_color")', function() {
      // uncomment below and update the code to test the property walletBackgroundColor
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property walletDisplayFilters (base name: "wallet_display_filters")', function() {
      // uncomment below and update the code to test the property walletDisplayFilters
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property walletPosition (base name: "wallet_position")', function() {
      // uncomment below and update the code to test the property walletPosition
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

    it('should have the property walletWelcomeMessage (base name: "wallet_welcome_message")', function() {
      // uncomment below and update the code to test the property walletWelcomeMessage
      //var instance = new VersifylabsVersifyClient.Brand();
      //expect(instance).to.be();
    });

  });

}));
