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
    instance = new VersifyClient.ClaimsApi();
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

  describe('ClaimsApi', function() {
    describe('createClaimV2ClaimsPost', function() {
      it('should call createClaimV2ClaimsPost successfully', function(done) {
        //uncomment below and update the code to test createClaimV2ClaimsPost
        //instance.createClaimV2ClaimsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClaimV2ClaimsPost_0', function() {
      it('should call createClaimV2ClaimsPost_0 successfully', function(done) {
        //uncomment below and update the code to test createClaimV2ClaimsPost_0
        //instance.createClaimV2ClaimsPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClaimV2ClaimsClaimIdDelete', function() {
      it('should call deleteClaimV2ClaimsClaimIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteClaimV2ClaimsClaimIdDelete
        //instance.deleteClaimV2ClaimsClaimIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClaimV2ClaimsClaimIdDelete_0', function() {
      it('should call deleteClaimV2ClaimsClaimIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteClaimV2ClaimsClaimIdDelete_0
        //instance.deleteClaimV2ClaimsClaimIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClaimV2ClaimsClaimIdGet', function() {
      it('should call getClaimV2ClaimsClaimIdGet successfully', function(done) {
        //uncomment below and update the code to test getClaimV2ClaimsClaimIdGet
        //instance.getClaimV2ClaimsClaimIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClaimV2ClaimsClaimIdGet_0', function() {
      it('should call getClaimV2ClaimsClaimIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getClaimV2ClaimsClaimIdGet_0
        //instance.getClaimV2ClaimsClaimIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listClaimsV2ClaimsGet', function() {
      it('should call listClaimsV2ClaimsGet successfully', function(done) {
        //uncomment below and update the code to test listClaimsV2ClaimsGet
        //instance.listClaimsV2ClaimsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listClaimsV2ClaimsGet_0', function() {
      it('should call listClaimsV2ClaimsGet_0 successfully', function(done) {
        //uncomment below and update the code to test listClaimsV2ClaimsGet_0
        //instance.listClaimsV2ClaimsGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchClaimsV2ClaimsSearchPost', function() {
      it('should call searchClaimsV2ClaimsSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchClaimsV2ClaimsSearchPost
        //instance.searchClaimsV2ClaimsSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchClaimsV2ClaimsSearchPost_0', function() {
      it('should call searchClaimsV2ClaimsSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchClaimsV2ClaimsSearchPost_0
        //instance.searchClaimsV2ClaimsSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClaimV2ClaimsClaimIdPut', function() {
      it('should call updateClaimV2ClaimsClaimIdPut successfully', function(done) {
        //uncomment below and update the code to test updateClaimV2ClaimsClaimIdPut
        //instance.updateClaimV2ClaimsClaimIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClaimV2ClaimsClaimIdPut_0', function() {
      it('should call updateClaimV2ClaimsClaimIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateClaimV2ClaimsClaimIdPut_0
        //instance.updateClaimV2ClaimsClaimIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
