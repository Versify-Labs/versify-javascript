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
    instance = new VersifylabsVersifyClient.Contact();
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

  describe('Contact', function() {
    it('should create an instance of Contact', function() {
      // uncomment below and update the code to test Contact
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be.a(VersifylabsVersifyClient.Contact);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property browser (base name: "browser")', function() {
      // uncomment below and update the code to test the property browser
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property lastSeen (base name: "last_seen")', function() {
      // uncomment below and update the code to test the property lastSeen
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property socialProfiles (base name: "social_profiles")', function() {
      // uncomment below and update the code to test the property socialProfiles
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new VersifylabsVersifyClient.Contact();
      //expect(instance).to.be();
    });

  });

}));
