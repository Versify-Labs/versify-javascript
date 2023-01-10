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


import ApiClient from "../ApiClient";
import ApiDeleteResponse from '../model/ApiDeleteResponse';
import ApiListResponse from '../model/ApiListResponse';
import ApiSearchResponse from '../model/ApiSearchResponse';
import Asset2 from '../model/Asset2';
import Claim from '../model/Claim';
import Contact2 from '../model/Contact2';
import HTTPValidationError from '../model/HTTPValidationError';
import SearchContacts from '../model/SearchContacts';

/**
* Claims service.
* @module api/ClaimsApi
* @version 1.0.0
*/
export default class ClaimsApi {

    /**
    * Constructs a new ClaimsApi. 
    * @alias module:api/ClaimsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createClaimV2ClaimsPost operation.
     * @callback module:api/ClaimsApi~createClaimV2ClaimsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create claim
     * Create a claim
     * @param {module:model/Asset2} asset2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~createClaimV2ClaimsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    createClaimV2ClaimsPost(asset2, opts, callback) {
      opts = opts || {};
      let postBody = asset2;
      // verify the required parameter 'asset2' is set
      if (asset2 === undefined || asset2 === null) {
        throw new Error("Missing the required parameter 'asset2' when calling createClaimV2ClaimsPost");
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createClaimV2ClaimsPost_0 operation.
     * @callback module:api/ClaimsApi~createClaimV2ClaimsPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create claim
     * Create a claim
     * @param {module:model/Asset2} asset2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~createClaimV2ClaimsPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    createClaimV2ClaimsPost_0(asset2, opts, callback) {
      opts = opts || {};
      let postBody = asset2;
      // verify the required parameter 'asset2' is set
      if (asset2 === undefined || asset2 === null) {
        throw new Error("Missing the required parameter 'asset2' when calling createClaimV2ClaimsPost_0");
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClaimV2ClaimsClaimIdDelete operation.
     * @callback module:api/ClaimsApi~deleteClaimV2ClaimsClaimIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete claim
     * Delete an claim
     * @param {String} claimId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~deleteClaimV2ClaimsClaimIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteClaimV2ClaimsClaimIdDelete(claimId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling deleteClaimV2ClaimsClaimIdDelete");
      }

      let pathParams = {
        'claim_id': claimId
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
        '/v2/claims/{claim_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClaimV2ClaimsClaimIdDelete_0 operation.
     * @callback module:api/ClaimsApi~deleteClaimV2ClaimsClaimIdDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete claim
     * Delete an claim
     * @param {String} claimId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~deleteClaimV2ClaimsClaimIdDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteClaimV2ClaimsClaimIdDelete_0(claimId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling deleteClaimV2ClaimsClaimIdDelete_0");
      }

      let pathParams = {
        'claim_id': claimId
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
        '/v2/claims/{claim_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClaimV2ClaimsClaimIdGet operation.
     * @callback module:api/ClaimsApi~getClaimV2ClaimsClaimIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get claim
     * Get a claim
     * @param {String} claimId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~getClaimV2ClaimsClaimIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    getClaimV2ClaimsClaimIdGet(claimId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling getClaimV2ClaimsClaimIdGet");
      }

      let pathParams = {
        'claim_id': claimId
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims/{claim_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClaimV2ClaimsClaimIdGet_0 operation.
     * @callback module:api/ClaimsApi~getClaimV2ClaimsClaimIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get claim
     * Get a claim
     * @param {String} claimId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~getClaimV2ClaimsClaimIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    getClaimV2ClaimsClaimIdGet_0(claimId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling getClaimV2ClaimsClaimIdGet_0");
      }

      let pathParams = {
        'claim_id': claimId
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims/{claim_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listClaimsV2ClaimsGet operation.
     * @callback module:api/ClaimsApi~listClaimsV2ClaimsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List claims
     * List claims with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~listClaimsV2ClaimsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listClaimsV2ClaimsGet(opts, callback) {
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
        '/v2/claims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listClaimsV2ClaimsGet_0 operation.
     * @callback module:api/ClaimsApi~listClaimsV2ClaimsGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List claims
     * List claims with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~listClaimsV2ClaimsGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listClaimsV2ClaimsGet_0(opts, callback) {
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
        '/v2/claims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchClaimsV2ClaimsSearchPost operation.
     * @callback module:api/ClaimsApi~searchClaimsV2ClaimsSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search claims
     * Search claims with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~searchClaimsV2ClaimsSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchClaimsV2ClaimsSearchPost(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchClaimsV2ClaimsSearchPost");
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
        '/v2/claims/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchClaimsV2ClaimsSearchPost_0 operation.
     * @callback module:api/ClaimsApi~searchClaimsV2ClaimsSearchPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search claims
     * Search claims with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~searchClaimsV2ClaimsSearchPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchClaimsV2ClaimsSearchPost_0(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchClaimsV2ClaimsSearchPost_0");
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
        '/v2/claims/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClaimV2ClaimsClaimIdPut operation.
     * @callback module:api/ClaimsApi~updateClaimV2ClaimsClaimIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update claim
     * Update an claim
     * @param {String} claimId Unique identifier of the contact
     * @param {module:model/Contact2} contact2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~updateClaimV2ClaimsClaimIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    updateClaimV2ClaimsClaimIdPut(claimId, contact2, opts, callback) {
      opts = opts || {};
      let postBody = contact2;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling updateClaimV2ClaimsClaimIdPut");
      }
      // verify the required parameter 'contact2' is set
      if (contact2 === undefined || contact2 === null) {
        throw new Error("Missing the required parameter 'contact2' when calling updateClaimV2ClaimsClaimIdPut");
      }

      let pathParams = {
        'claim_id': claimId
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims/{claim_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClaimV2ClaimsClaimIdPut_0 operation.
     * @callback module:api/ClaimsApi~updateClaimV2ClaimsClaimIdPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Claim} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update claim
     * Update an claim
     * @param {String} claimId Unique identifier of the contact
     * @param {module:model/Contact2} contact2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/ClaimsApi~updateClaimV2ClaimsClaimIdPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Claim}
     */
    updateClaimV2ClaimsClaimIdPut_0(claimId, contact2, opts, callback) {
      opts = opts || {};
      let postBody = contact2;
      // verify the required parameter 'claimId' is set
      if (claimId === undefined || claimId === null) {
        throw new Error("Missing the required parameter 'claimId' when calling updateClaimV2ClaimsClaimIdPut_0");
      }
      // verify the required parameter 'contact2' is set
      if (contact2 === undefined || contact2 === null) {
        throw new Error("Missing the required parameter 'contact2' when calling updateClaimV2ClaimsClaimIdPut_0");
      }

      let pathParams = {
        'claim_id': claimId
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
      let returnType = Claim;
      return this.apiClient.callApi(
        '/v2/claims/{claim_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}