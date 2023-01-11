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
    instance = new VersifylabsVersifyClient.WebhooksApi();
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

  describe('WebhooksApi', function() {
    describe('createWebhookV2WebhooksPost', function() {
      it('should call createWebhookV2WebhooksPost successfully', function(done) {
        //uncomment below and update the code to test createWebhookV2WebhooksPost
        //instance.createWebhookV2WebhooksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWebhookV2WebhooksPost_0', function() {
      it('should call createWebhookV2WebhooksPost_0 successfully', function(done) {
        //uncomment below and update the code to test createWebhookV2WebhooksPost_0
        //instance.createWebhookV2WebhooksPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhookV2WebhooksWebhookIdDelete', function() {
      it('should call deleteWebhookV2WebhooksWebhookIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteWebhookV2WebhooksWebhookIdDelete
        //instance.deleteWebhookV2WebhooksWebhookIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhookV2WebhooksWebhookIdDelete_0', function() {
      it('should call deleteWebhookV2WebhooksWebhookIdDelete_0 successfully', function(done) {
        //uncomment below and update the code to test deleteWebhookV2WebhooksWebhookIdDelete_0
        //instance.deleteWebhookV2WebhooksWebhookIdDelete_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookV2WebhooksWebhookIdGet', function() {
      it('should call getWebhookV2WebhooksWebhookIdGet successfully', function(done) {
        //uncomment below and update the code to test getWebhookV2WebhooksWebhookIdGet
        //instance.getWebhookV2WebhooksWebhookIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhookV2WebhooksWebhookIdGet_0', function() {
      it('should call getWebhookV2WebhooksWebhookIdGet_0 successfully', function(done) {
        //uncomment below and update the code to test getWebhookV2WebhooksWebhookIdGet_0
        //instance.getWebhookV2WebhooksWebhookIdGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listWebhooksV2WebhooksGet', function() {
      it('should call listWebhooksV2WebhooksGet successfully', function(done) {
        //uncomment below and update the code to test listWebhooksV2WebhooksGet
        //instance.listWebhooksV2WebhooksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listWebhooksV2WebhooksGet_0', function() {
      it('should call listWebhooksV2WebhooksGet_0 successfully', function(done) {
        //uncomment below and update the code to test listWebhooksV2WebhooksGet_0
        //instance.listWebhooksV2WebhooksGet_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchWebhooksV2WebhooksSearchPost', function() {
      it('should call searchWebhooksV2WebhooksSearchPost successfully', function(done) {
        //uncomment below and update the code to test searchWebhooksV2WebhooksSearchPost
        //instance.searchWebhooksV2WebhooksSearchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchWebhooksV2WebhooksSearchPost_0', function() {
      it('should call searchWebhooksV2WebhooksSearchPost_0 successfully', function(done) {
        //uncomment below and update the code to test searchWebhooksV2WebhooksSearchPost_0
        //instance.searchWebhooksV2WebhooksSearchPost_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhookV2WebhooksWebhookIdPut', function() {
      it('should call updateWebhookV2WebhooksWebhookIdPut successfully', function(done) {
        //uncomment below and update the code to test updateWebhookV2WebhooksWebhookIdPut
        //instance.updateWebhookV2WebhooksWebhookIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhookV2WebhooksWebhookIdPut_0', function() {
      it('should call updateWebhookV2WebhooksWebhookIdPut_0 successfully', function(done) {
        //uncomment below and update the code to test updateWebhookV2WebhooksWebhookIdPut_0
        //instance.updateWebhookV2WebhooksWebhookIdPut_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
