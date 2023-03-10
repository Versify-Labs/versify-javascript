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
import Asset11 from '../model/Asset11';
import Contact11 from '../model/Contact11';
import HTTPValidationError from '../model/HTTPValidationError';
import Reward from '../model/Reward';
import SearchContacts from '../model/SearchContacts';

/**
* Rewards service.
* @module api/RewardsApi
* @version 1.0.0
*/
export default class RewardsApi {

    /**
    * Constructs a new RewardsApi. 
    * @alias module:api/RewardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRewardV2RewardsPost operation.
     * @callback module:api/RewardsApi~createRewardV2RewardsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reward
     * Create a reward
     * @param {module:model/Asset11} asset11 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~createRewardV2RewardsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    createRewardV2RewardsPost(asset11, opts, callback) {
      opts = opts || {};
      let postBody = asset11;
      // verify the required parameter 'asset11' is set
      if (asset11 === undefined || asset11 === null) {
        throw new Error("Missing the required parameter 'asset11' when calling createRewardV2RewardsPost");
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRewardV2RewardsPost_0 operation.
     * @callback module:api/RewardsApi~createRewardV2RewardsPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create reward
     * Create a reward
     * @param {module:model/Asset11} asset11 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~createRewardV2RewardsPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    createRewardV2RewardsPost_0(asset11, opts, callback) {
      opts = opts || {};
      let postBody = asset11;
      // verify the required parameter 'asset11' is set
      if (asset11 === undefined || asset11 === null) {
        throw new Error("Missing the required parameter 'asset11' when calling createRewardV2RewardsPost_0");
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRewardV2RewardsRewardIdDelete operation.
     * @callback module:api/RewardsApi~deleteRewardV2RewardsRewardIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete reward
     * Delete an reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~deleteRewardV2RewardsRewardIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteRewardV2RewardsRewardIdDelete(rewardId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling deleteRewardV2RewardsRewardIdDelete");
      }

      let pathParams = {
        'reward_id': rewardId
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
        '/v2/rewards/{reward_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRewardV2RewardsRewardIdDelete_0 operation.
     * @callback module:api/RewardsApi~deleteRewardV2RewardsRewardIdDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete reward
     * Delete an reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~deleteRewardV2RewardsRewardIdDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteRewardV2RewardsRewardIdDelete_0(rewardId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling deleteRewardV2RewardsRewardIdDelete_0");
      }

      let pathParams = {
        'reward_id': rewardId
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
        '/v2/rewards/{reward_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardV2RewardsRewardIdGet operation.
     * @callback module:api/RewardsApi~getRewardV2RewardsRewardIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get reward
     * Get a reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~getRewardV2RewardsRewardIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    getRewardV2RewardsRewardIdGet(rewardId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling getRewardV2RewardsRewardIdGet");
      }

      let pathParams = {
        'reward_id': rewardId
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards/{reward_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardV2RewardsRewardIdGet_0 operation.
     * @callback module:api/RewardsApi~getRewardV2RewardsRewardIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get reward
     * Get a reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~getRewardV2RewardsRewardIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    getRewardV2RewardsRewardIdGet_0(rewardId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling getRewardV2RewardsRewardIdGet_0");
      }

      let pathParams = {
        'reward_id': rewardId
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards/{reward_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRewardsV2RewardsGet operation.
     * @callback module:api/RewardsApi~listRewardsV2RewardsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List rewards
     * List rewards with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~listRewardsV2RewardsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listRewardsV2RewardsGet(opts, callback) {
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
        '/v2/rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRewardsV2RewardsGet_0 operation.
     * @callback module:api/RewardsApi~listRewardsV2RewardsGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List rewards
     * List rewards with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~listRewardsV2RewardsGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listRewardsV2RewardsGet_0(opts, callback) {
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
        '/v2/rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchRewardsV2RewardsSearchPost operation.
     * @callback module:api/RewardsApi~searchRewardsV2RewardsSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search rewards
     * Search rewards with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~searchRewardsV2RewardsSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchRewardsV2RewardsSearchPost(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchRewardsV2RewardsSearchPost");
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
        '/v2/rewards/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchRewardsV2RewardsSearchPost_0 operation.
     * @callback module:api/RewardsApi~searchRewardsV2RewardsSearchPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search rewards
     * Search rewards with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~searchRewardsV2RewardsSearchPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchRewardsV2RewardsSearchPost_0(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchRewardsV2RewardsSearchPost_0");
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
        '/v2/rewards/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRewardV2RewardsRewardIdPut operation.
     * @callback module:api/RewardsApi~updateRewardV2RewardsRewardIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update reward
     * Update an reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {module:model/Contact11} contact11 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~updateRewardV2RewardsRewardIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    updateRewardV2RewardsRewardIdPut(rewardId, contact11, opts, callback) {
      opts = opts || {};
      let postBody = contact11;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling updateRewardV2RewardsRewardIdPut");
      }
      // verify the required parameter 'contact11' is set
      if (contact11 === undefined || contact11 === null) {
        throw new Error("Missing the required parameter 'contact11' when calling updateRewardV2RewardsRewardIdPut");
      }

      let pathParams = {
        'reward_id': rewardId
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards/{reward_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRewardV2RewardsRewardIdPut_0 operation.
     * @callback module:api/RewardsApi~updateRewardV2RewardsRewardIdPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Reward} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update reward
     * Update an reward
     * @param {String} rewardId Unique identifier of the contact
     * @param {module:model/Contact11} contact11 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/RewardsApi~updateRewardV2RewardsRewardIdPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Reward}
     */
    updateRewardV2RewardsRewardIdPut_0(rewardId, contact11, opts, callback) {
      opts = opts || {};
      let postBody = contact11;
      // verify the required parameter 'rewardId' is set
      if (rewardId === undefined || rewardId === null) {
        throw new Error("Missing the required parameter 'rewardId' when calling updateRewardV2RewardsRewardIdPut_0");
      }
      // verify the required parameter 'contact11' is set
      if (contact11 === undefined || contact11 === null) {
        throw new Error("Missing the required parameter 'contact11' when calling updateRewardV2RewardsRewardIdPut_0");
      }

      let pathParams = {
        'reward_id': rewardId
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
      let returnType = Reward;
      return this.apiClient.callApi(
        '/v2/rewards/{reward_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
