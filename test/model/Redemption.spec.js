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
    factory(root.expect, root.VersifyClient);
  }
}(this, function(expect, VersifyClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VersifyClient.Redemption();
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

  describe('Redemption', function() {
    it('should create an instance of Redemption', function() {
      // uncomment below and update the code to test Redemption
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be.a(VersifyClient.Redemption);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property couponCode (base name: "coupon_code")', function() {
      // uncomment below and update the code to test the property couponCode
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discount_amount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property discountCode (base name: "discount_code")', function() {
      // uncomment below and update the code to test the property discountCode
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property giftAmount (base name: "gift_amount")', function() {
      // uncomment below and update the code to test the property giftAmount
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property giftCode (base name: "gift_code")', function() {
      // uncomment below and update the code to test the property giftCode
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property passBarcode (base name: "pass_barcode")', function() {
      // uncomment below and update the code to test the property passBarcode
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property passPlatform (base name: "pass_platform")', function() {
      // uncomment below and update the code to test the property passPlatform
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property passSerialNumber (base name: "pass_serial_number")', function() {
      // uncomment below and update the code to test the property passSerialNumber
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property reward (base name: "reward")', function() {
      // uncomment below and update the code to test the property reward
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new VersifyClient.Redemption();
      //expect(instance).to.be();
    });

  });

}));