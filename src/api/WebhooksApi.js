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


import ApiClient from "../ApiClient";
import ApiDeleteResponse from '../model/ApiDeleteResponse';
import ApiListResponse from '../model/ApiListResponse';
import ApiSearchResponse from '../model/ApiSearchResponse';
import Asset13 from '../model/Asset13';
import Contact13 from '../model/Contact13';
import HTTPValidationError from '../model/HTTPValidationError';
import SearchContacts from '../model/SearchContacts';
import Webhook from '../model/Webhook';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWebhookV2WebhooksPost operation.
     * @callback module:api/WebhooksApi~createWebhookV2WebhooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create webhook
     * Create a webhook
     * @param {module:model/Asset13} asset13 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~createWebhookV2WebhooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    createWebhookV2WebhooksPost(asset13, opts, callback) {
      opts = opts || {};
      let postBody = asset13;
      // verify the required parameter 'asset13' is set
      if (asset13 === undefined || asset13 === null) {
        throw new Error("Missing the required parameter 'asset13' when calling createWebhookV2WebhooksPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWebhookV2WebhooksPost_0 operation.
     * @callback module:api/WebhooksApi~createWebhookV2WebhooksPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create webhook
     * Create a webhook
     * @param {module:model/Asset13} asset13 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~createWebhookV2WebhooksPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    createWebhookV2WebhooksPost_0(asset13, opts, callback) {
      opts = opts || {};
      let postBody = asset13;
      // verify the required parameter 'asset13' is set
      if (asset13 === undefined || asset13 === null) {
        throw new Error("Missing the required parameter 'asset13' when calling createWebhookV2WebhooksPost_0");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookV2WebhooksWebhookIdDelete operation.
     * @callback module:api/WebhooksApi~deleteWebhookV2WebhooksWebhookIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete webhook
     * Delete an webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~deleteWebhookV2WebhooksWebhookIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteWebhookV2WebhooksWebhookIdDelete(webhookId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhookV2WebhooksWebhookIdDelete");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiDeleteResponse;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookV2WebhooksWebhookIdDelete_0 operation.
     * @callback module:api/WebhooksApi~deleteWebhookV2WebhooksWebhookIdDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete webhook
     * Delete an webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~deleteWebhookV2WebhooksWebhookIdDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteWebhookV2WebhooksWebhookIdDelete_0(webhookId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhookV2WebhooksWebhookIdDelete_0");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiDeleteResponse;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookV2WebhooksWebhookIdGet operation.
     * @callback module:api/WebhooksApi~getWebhookV2WebhooksWebhookIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook
     * Get a webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~getWebhookV2WebhooksWebhookIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    getWebhookV2WebhooksWebhookIdGet(webhookId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhookV2WebhooksWebhookIdGet");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookV2WebhooksWebhookIdGet_0 operation.
     * @callback module:api/WebhooksApi~getWebhookV2WebhooksWebhookIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook
     * Get a webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~getWebhookV2WebhooksWebhookIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    getWebhookV2WebhooksWebhookIdGet_0(webhookId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhookV2WebhooksWebhookIdGet_0");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listWebhooksV2WebhooksGet operation.
     * @callback module:api/WebhooksApi~listWebhooksV2WebhooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List webhooks
     * List webhooks with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~listWebhooksV2WebhooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listWebhooksV2WebhooksGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page_num': opts['pageNum'],
        'page_size': opts['pageSize'],
        'collection': opts['collection'],
        'status': opts['status']
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiListResponse;
      return this.apiClient.callApi(
        '/v2/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listWebhooksV2WebhooksGet_0 operation.
     * @callback module:api/WebhooksApi~listWebhooksV2WebhooksGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List webhooks
     * List webhooks with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~listWebhooksV2WebhooksGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listWebhooksV2WebhooksGet_0(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page_num': opts['pageNum'],
        'page_size': opts['pageSize'],
        'collection': opts['collection'],
        'status': opts['status']
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiListResponse;
      return this.apiClient.callApi(
        '/v2/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchWebhooksV2WebhooksSearchPost operation.
     * @callback module:api/WebhooksApi~searchWebhooksV2WebhooksSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search webhooks
     * Search webhooks with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~searchWebhooksV2WebhooksSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchWebhooksV2WebhooksSearchPost(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchWebhooksV2WebhooksSearchPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiSearchResponse;
      return this.apiClient.callApi(
        '/v2/webhooks/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchWebhooksV2WebhooksSearchPost_0 operation.
     * @callback module:api/WebhooksApi~searchWebhooksV2WebhooksSearchPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search webhooks
     * Search webhooks with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~searchWebhooksV2WebhooksSearchPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchWebhooksV2WebhooksSearchPost_0(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchWebhooksV2WebhooksSearchPost_0");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiSearchResponse;
      return this.apiClient.callApi(
        '/v2/webhooks/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhookV2WebhooksWebhookIdPut operation.
     * @callback module:api/WebhooksApi~updateWebhookV2WebhooksWebhookIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update webhook
     * Update an webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {module:model/Contact13} contact13 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~updateWebhookV2WebhooksWebhookIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    updateWebhookV2WebhooksWebhookIdPut(webhookId, contact13, opts, callback) {
      opts = opts || {};
      let postBody = contact13;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhookV2WebhooksWebhookIdPut");
      }
      // verify the required parameter 'contact13' is set
      if (contact13 === undefined || contact13 === null) {
        throw new Error("Missing the required parameter 'contact13' when calling updateWebhookV2WebhooksWebhookIdPut");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhookV2WebhooksWebhookIdPut_0 operation.
     * @callback module:api/WebhooksApi~updateWebhookV2WebhooksWebhookIdPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update webhook
     * Update an webhook
     * @param {String} webhookId Unique identifier of the contact
     * @param {module:model/Contact13} contact13 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/WebhooksApi~updateWebhookV2WebhooksWebhookIdPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    updateWebhookV2WebhooksWebhookIdPut_0(webhookId, contact13, opts, callback) {
      opts = opts || {};
      let postBody = contact13;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhookV2WebhooksWebhookIdPut_0");
      }
      // verify the required parameter 'contact13' is set
      if (contact13 === undefined || contact13 === null) {
        throw new Error("Missing the required parameter 'contact13' when calling updateWebhookV2WebhooksWebhookIdPut_0");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'Versify-Account': opts['versifyAccount']
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/v2/webhooks/{webhook_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
