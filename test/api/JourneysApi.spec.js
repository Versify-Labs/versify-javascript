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
    instance = new VersifyClient.JourneysApi();
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

  describe('JourneysApi', function() {
    describe('createJourneyV2JourneysPost', function() {
      it('should call createJourneyV2JourneysPost successfully', function(done) {
        //uncomment below and update the code to test createJourneyV2JourneysPost
        //instance.createJourneyV2JourneysPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createJourneyV2JourneysPost_0', function() {
      it('should call createJourneyV2JourneysPost_0 successfully', function(done) {
        //uncomment below and update the code to test createJourneyV2JourneysPost_0
        //instance.createJourneyV2JourneysPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJourneyV2JourneysJourneyIdDelete', function() {
      it('should call deleteJourneyV2JourneysJourneyIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteJourneyV2JourneysJourneyIdDelete
        //instance.deleteJourneyV2JourneysJourneyIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJourneyV2JourneysJourneyIdDelete_0', function() {
      it('should call deleteJourneyV2JourneysJourneyIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteJourneyV2JourneysJourneyIdDelete_0
        //instance.deleteJourneyV2JourneysJourneyIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJourneyV2JourneysJourneyIdGet', function() {
      it('should call getJourneyV2JourneysJourneyIdGet successfully', function(done) {
        //uncomment below and update the code to test getJourneyV2JourneysJourneyIdGet
        //instance.getJourneyV2JourneysJourneyIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJourneyV2JourneysJourneyIdGet_0', function() {
      it('should call getJourneyV2JourneysJourneyIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getJourneyV2JourneysJourneyIdGet_0
        //instance.getJourneyV2JourneysJourneyIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJourneysV2JourneysGet', function() {
      it('should call listJourneysV2JourneysGet successfully', function(done) {
        //uncomment below and update the code to test listJourneysV2JourneysGet
        //instance.listJourneysV2JourneysGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJourneysV2JourneysGet_0', function() {
      it('should call listJourneysV2JourneysGet_0 successfully', function(done) {
        //uncomment below and update the code to test listJourneysV2JourneysGet_0
        //instance.listJourneysV2JourneysGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchJourneysV2JourneysSearchPost', function() {
      it('should call searchJourneysV2JourneysSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchJourneysV2JourneysSearchPost
        //instance.searchJourneysV2JourneysSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchJourneysV2JourneysSearchPost_0', function() {
      it('should call searchJourneysV2JourneysSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchJourneysV2JourneysSearchPost_0
        //instance.searchJourneysV2JourneysSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJourneyV2JourneysJourneyIdPut', function() {
      it('should call updateJourneyV2JourneysJourneyIdPut successfully', function(done) {
        //uncomment below and update the code to test updateJourneyV2JourneysJourneyIdPut
        //instance.updateJourneyV2JourneysJourneyIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJourneyV2JourneysJourneyIdPut_0', function() {
      it('should call updateJourneyV2JourneysJourneyIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateJourneyV2JourneysJourneyIdPut_0
        //instance.updateJourneyV2JourneysJourneyIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
