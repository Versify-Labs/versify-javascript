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
    instance = new VersifyApi.RewardsApi();
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

  describe('RewardsApi', function() {
    describe('createRewardV2RewardsPost', function() {
      it('should call createRewardV2RewardsPost successfully', function(done) {
        //uncomment below and update the code to test createRewardV2RewardsPost
        //instance.createRewardV2RewardsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRewardV2RewardsPost_0', function() {
      it('should call createRewardV2RewardsPost_0 successfully', function(done) {
        //uncomment below and update the code to test createRewardV2RewardsPost_0
        //instance.createRewardV2RewardsPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRewardV2RewardsRewardIdDelete', function() {
      it('should call deleteRewardV2RewardsRewardIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteRewardV2RewardsRewardIdDelete
        //instance.deleteRewardV2RewardsRewardIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRewardV2RewardsRewardIdDelete_0', function() {
      it('should call deleteRewardV2RewardsRewardIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteRewardV2RewardsRewardIdDelete_0
        //instance.deleteRewardV2RewardsRewardIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRewardV2RewardsRewardIdGet', function() {
      it('should call getRewardV2RewardsRewardIdGet successfully', function(done) {
        //uncomment below and update the code to test getRewardV2RewardsRewardIdGet
        //instance.getRewardV2RewardsRewardIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRewardV2RewardsRewardIdGet_0', function() {
      it('should call getRewardV2RewardsRewardIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getRewardV2RewardsRewardIdGet_0
        //instance.getRewardV2RewardsRewardIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRewardsV2RewardsGet', function() {
      it('should call listRewardsV2RewardsGet successfully', function(done) {
        //uncomment below and update the code to test listRewardsV2RewardsGet
        //instance.listRewardsV2RewardsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRewardsV2RewardsGet_0', function() {
      it('should call listRewardsV2RewardsGet_0 successfully', function(done) {
        //uncomment below and update the code to test listRewardsV2RewardsGet_0
        //instance.listRewardsV2RewardsGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRewardsV2RewardsSearchPost', function() {
      it('should call searchRewardsV2RewardsSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchRewardsV2RewardsSearchPost
        //instance.searchRewardsV2RewardsSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRewardsV2RewardsSearchPost_0', function() {
      it('should call searchRewardsV2RewardsSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchRewardsV2RewardsSearchPost_0
        //instance.searchRewardsV2RewardsSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRewardV2RewardsRewardIdPut', function() {
      it('should call updateRewardV2RewardsRewardIdPut successfully', function(done) {
        //uncomment below and update the code to test updateRewardV2RewardsRewardIdPut
        //instance.updateRewardV2RewardsRewardIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRewardV2RewardsRewardIdPut_0', function() {
      it('should call updateRewardV2RewardsRewardIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateRewardV2RewardsRewardIdPut_0
        //instance.updateRewardV2RewardsRewardIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
