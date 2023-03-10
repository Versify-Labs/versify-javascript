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
    instance = new VersifyClient.MessagesApi();
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

  describe('MessagesApi', function() {
    describe('createMessageV2MessagesPost', function() {
      it('should call createMessageV2MessagesPost successfully', function(done) {
        //uncomment below and update the code to test createMessageV2MessagesPost
        //instance.createMessageV2MessagesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMessageV2MessagesPost_0', function() {
      it('should call createMessageV2MessagesPost_0 successfully', function(done) {
        //uncomment below and update the code to test createMessageV2MessagesPost_0
        //instance.createMessageV2MessagesPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMessageV2MessagesMessageIdDelete', function() {
      it('should call deleteMessageV2MessagesMessageIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteMessageV2MessagesMessageIdDelete
        //instance.deleteMessageV2MessagesMessageIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMessageV2MessagesMessageIdDelete_0', function() {
      it('should call deleteMessageV2MessagesMessageIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteMessageV2MessagesMessageIdDelete_0
        //instance.deleteMessageV2MessagesMessageIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMessageV2MessagesMessageIdGet', function() {
      it('should call getMessageV2MessagesMessageIdGet successfully', function(done) {
        //uncomment below and update the code to test getMessageV2MessagesMessageIdGet
        //instance.getMessageV2MessagesMessageIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMessageV2MessagesMessageIdGet_0', function() {
      it('should call getMessageV2MessagesMessageIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getMessageV2MessagesMessageIdGet_0
        //instance.getMessageV2MessagesMessageIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMessagesV2MessagesGet', function() {
      it('should call listMessagesV2MessagesGet successfully', function(done) {
        //uncomment below and update the code to test listMessagesV2MessagesGet
        //instance.listMessagesV2MessagesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMessagesV2MessagesGet_0', function() {
      it('should call listMessagesV2MessagesGet_0 successfully', function(done) {
        //uncomment below and update the code to test listMessagesV2MessagesGet_0
        //instance.listMessagesV2MessagesGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchMessagesV2MessagesSearchPost', function() {
      it('should call searchMessagesV2MessagesSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchMessagesV2MessagesSearchPost
        //instance.searchMessagesV2MessagesSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchMessagesV2MessagesSearchPost_0', function() {
      it('should call searchMessagesV2MessagesSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchMessagesV2MessagesSearchPost_0
        //instance.searchMessagesV2MessagesSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMessageV2MessagesMessageIdPut', function() {
      it('should call updateMessageV2MessagesMessageIdPut successfully', function(done) {
        //uncomment below and update the code to test updateMessageV2MessagesMessageIdPut
        //instance.updateMessageV2MessagesMessageIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMessageV2MessagesMessageIdPut_0', function() {
      it('should call updateMessageV2MessagesMessageIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateMessageV2MessagesMessageIdPut_0
        //instance.updateMessageV2MessagesMessageIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
