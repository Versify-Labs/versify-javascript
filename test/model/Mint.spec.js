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
    instance = new VersifyClient.Mint();
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

  describe('Mint', function() {
    it('should create an instance of Mint', function() {
      // uncomment below and update the code to test Mint
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be.a(VersifyClient.Mint);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property journey (base name: "journey")', function() {
      // uncomment below and update the code to test the property journey
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property transaction (base name: "transaction")', function() {
      // uncomment below and update the code to test the property transaction
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

    it('should have the property walletAddress (base name: "wallet_address")', function() {
      // uncomment below and update the code to test the property walletAddress
      //var instance = new VersifyClient.Mint();
      //expect(instance).to.be();
    });

  });

}));