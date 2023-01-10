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
    instance = new VersifyClient.TagsApi();
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

  describe('TagsApi', function() {
    describe('createTagV2TagsPost', function() {
      it('should call createTagV2TagsPost successfully', function(done) {
        //uncomment below and update the code to test createTagV2TagsPost
        //instance.createTagV2TagsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTagV2TagsPost_0', function() {
      it('should call createTagV2TagsPost_0 successfully', function(done) {
        //uncomment below and update the code to test createTagV2TagsPost_0
        //instance.createTagV2TagsPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTagV2TagsTagIdDelete', function() {
      it('should call deleteTagV2TagsTagIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteTagV2TagsTagIdDelete
        //instance.deleteTagV2TagsTagIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTagV2TagsTagIdDelete_0', function() {
      it('should call deleteTagV2TagsTagIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteTagV2TagsTagIdDelete_0
        //instance.deleteTagV2TagsTagIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagV2TagsTagIdGet', function() {
      it('should call getTagV2TagsTagIdGet successfully', function(done) {
        //uncomment below and update the code to test getTagV2TagsTagIdGet
        //instance.getTagV2TagsTagIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTagV2TagsTagIdGet_0', function() {
      it('should call getTagV2TagsTagIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getTagV2TagsTagIdGet_0
        //instance.getTagV2TagsTagIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTagsV2TagsGet', function() {
      it('should call listTagsV2TagsGet successfully', function(done) {
        //uncomment below and update the code to test listTagsV2TagsGet
        //instance.listTagsV2TagsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTagsV2TagsGet_0', function() {
      it('should call listTagsV2TagsGet_0 successfully', function(done) {
        //uncomment below and update the code to test listTagsV2TagsGet_0
        //instance.listTagsV2TagsGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTagsV2TagsSearchPost', function() {
      it('should call searchTagsV2TagsSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchTagsV2TagsSearchPost
        //instance.searchTagsV2TagsSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTagsV2TagsSearchPost_0', function() {
      it('should call searchTagsV2TagsSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchTagsV2TagsSearchPost_0
        //instance.searchTagsV2TagsSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagV2TagsTagIdPut', function() {
      it('should call updateTagV2TagsTagIdPut successfully', function(done) {
        //uncomment below and update the code to test updateTagV2TagsTagIdPut
        //instance.updateTagV2TagsTagIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTagV2TagsTagIdPut_0', function() {
      it('should call updateTagV2TagsTagIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateTagV2TagsTagIdPut_0
        //instance.updateTagV2TagsTagIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
