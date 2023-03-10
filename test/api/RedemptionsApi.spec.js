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
    factory(root.expect, root.VersifyClient);
  }
}(this, function(expect, VersifyClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VersifyClient.RedemptionsApi();
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

  describe('RedemptionsApi', function() {
    describe('createRedemptionV2RedemptionsPost', function() {
      it('should call createRedemptionV2RedemptionsPost successfully', function(done) {
        //uncomment below and update the code to test createRedemptionV2RedemptionsPost
        //instance.createRedemptionV2RedemptionsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRedemptionV2RedemptionsPost_0', function() {
      it('should call createRedemptionV2RedemptionsPost_0 successfully', function(done) {
        //uncomment below and update the code to test createRedemptionV2RedemptionsPost_0
        //instance.createRedemptionV2RedemptionsPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRedemptionV2RedemptionsRedemptionIdDelete', function() {
      it('should call deleteRedemptionV2RedemptionsRedemptionIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteRedemptionV2RedemptionsRedemptionIdDelete
        //instance.deleteRedemptionV2RedemptionsRedemptionIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRedemptionV2RedemptionsRedemptionIdDelete_0', function() {
      it('should call deleteRedemptionV2RedemptionsRedemptionIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteRedemptionV2RedemptionsRedemptionIdDelete_0
        //instance.deleteRedemptionV2RedemptionsRedemptionIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRedemptionV2RedemptionsRedemptionIdGet', function() {
      it('should call getRedemptionV2RedemptionsRedemptionIdGet successfully', function(done) {
        //uncomment below and update the code to test getRedemptionV2RedemptionsRedemptionIdGet
        //instance.getRedemptionV2RedemptionsRedemptionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRedemptionV2RedemptionsRedemptionIdGet_0', function() {
      it('should call getRedemptionV2RedemptionsRedemptionIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getRedemptionV2RedemptionsRedemptionIdGet_0
        //instance.getRedemptionV2RedemptionsRedemptionIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRedemptionsV2RedemptionsGet', function() {
      it('should call listRedemptionsV2RedemptionsGet successfully', function(done) {
        //uncomment below and update the code to test listRedemptionsV2RedemptionsGet
        //instance.listRedemptionsV2RedemptionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRedemptionsV2RedemptionsGet_0', function() {
      it('should call listRedemptionsV2RedemptionsGet_0 successfully', function(done) {
        //uncomment below and update the code to test listRedemptionsV2RedemptionsGet_0
        //instance.listRedemptionsV2RedemptionsGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRedemptionsV2RedemptionsSearchPost', function() {
      it('should call searchRedemptionsV2RedemptionsSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchRedemptionsV2RedemptionsSearchPost
        //instance.searchRedemptionsV2RedemptionsSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRedemptionsV2RedemptionsSearchPost_0', function() {
      it('should call searchRedemptionsV2RedemptionsSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchRedemptionsV2RedemptionsSearchPost_0
        //instance.searchRedemptionsV2RedemptionsSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRedemptionV2RedemptionsRedemptionIdPut', function() {
      it('should call updateRedemptionV2RedemptionsRedemptionIdPut successfully', function(done) {
        //uncomment below and update the code to test updateRedemptionV2RedemptionsRedemptionIdPut
        //instance.updateRedemptionV2RedemptionsRedemptionIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRedemptionV2RedemptionsRedemptionIdPut_0', function() {
      it('should call updateRedemptionV2RedemptionsRedemptionIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateRedemptionV2RedemptionsRedemptionIdPut_0
        //instance.updateRedemptionV2RedemptionsRedemptionIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
