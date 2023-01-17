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
    instance = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost();
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

  describe('BodyAccessTokenV2OauthAccessTokenPost', function() {
    it('should create an instance of BodyAccessTokenV2OauthAccessTokenPost', function() {
      // uncomment below and update the code to test BodyAccessTokenV2OauthAccessTokenPost
      //var instance = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost();
      //expect(instance).to.be.a(VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost();
      //expect(instance).to.be();
    });

    it('should have the property customClaims (base name: "custom_claims")', function() {
      // uncomment below and update the code to test the property customClaims
      //var instance = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost();
      //expect(instance).to.be();
    });

  });

}));
