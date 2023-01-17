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
import Asset4 from '../model/Asset4';
import Contact5 from '../model/Contact5';
import HTTPValidationError from '../model/HTTPValidationError';
import Journey from '../model/Journey';
import SearchContacts from '../model/SearchContacts';

/**
* Journeys service.
* @module api/JourneysApi
* @version 1.0.0
*/
export default class JourneysApi {

    /**
    * Constructs a new JourneysApi. 
    * @alias module:api/JourneysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createJourneyV2JourneysPost operation.
     * @callback module:api/JourneysApi~createJourneyV2JourneysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create journey
     * Create a journey
     * @param {module:model/Asset4} asset4 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~createJourneyV2JourneysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    createJourneyV2JourneysPost(asset4, opts, callback) {
      opts = opts || {};
      let postBody = asset4;
      // verify the required parameter 'asset4' is set
      if (asset4 === undefined || asset4 === null) {
        throw new Error("Missing the required parameter 'asset4' when calling createJourneyV2JourneysPost");
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createJourneyV2JourneysPost_0 operation.
     * @callback module:api/JourneysApi~createJourneyV2JourneysPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create journey
     * Create a journey
     * @param {module:model/Asset4} asset4 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~createJourneyV2JourneysPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    createJourneyV2JourneysPost_0(asset4, opts, callback) {
      opts = opts || {};
      let postBody = asset4;
      // verify the required parameter 'asset4' is set
      if (asset4 === undefined || asset4 === null) {
        throw new Error("Missing the required parameter 'asset4' when calling createJourneyV2JourneysPost_0");
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJourneyV2JourneysJourneyIdDelete operation.
     * @callback module:api/JourneysApi~deleteJourneyV2JourneysJourneyIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete journey
     * Delete an journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~deleteJourneyV2JourneysJourneyIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteJourneyV2JourneysJourneyIdDelete(journeyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling deleteJourneyV2JourneysJourneyIdDelete");
      }

      let pathParams = {
        'journey_id': journeyId
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
        '/v2/journeys/{journey_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJourneyV2JourneysJourneyIdDelete_0 operation.
     * @callback module:api/JourneysApi~deleteJourneyV2JourneysJourneyIdDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete journey
     * Delete an journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~deleteJourneyV2JourneysJourneyIdDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteJourneyV2JourneysJourneyIdDelete_0(journeyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling deleteJourneyV2JourneysJourneyIdDelete_0");
      }

      let pathParams = {
        'journey_id': journeyId
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
        '/v2/journeys/{journey_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJourneyV2JourneysJourneyIdGet operation.
     * @callback module:api/JourneysApi~getJourneyV2JourneysJourneyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journey
     * Get a journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~getJourneyV2JourneysJourneyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    getJourneyV2JourneysJourneyIdGet(journeyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling getJourneyV2JourneysJourneyIdGet");
      }

      let pathParams = {
        'journey_id': journeyId
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys/{journey_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJourneyV2JourneysJourneyIdGet_0 operation.
     * @callback module:api/JourneysApi~getJourneyV2JourneysJourneyIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journey
     * Get a journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~getJourneyV2JourneysJourneyIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    getJourneyV2JourneysJourneyIdGet_0(journeyId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling getJourneyV2JourneysJourneyIdGet_0");
      }

      let pathParams = {
        'journey_id': journeyId
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys/{journey_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listJourneysV2JourneysGet operation.
     * @callback module:api/JourneysApi~listJourneysV2JourneysGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List journeys
     * List journeys with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~listJourneysV2JourneysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listJourneysV2JourneysGet(opts, callback) {
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
        '/v2/journeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listJourneysV2JourneysGet_0 operation.
     * @callback module:api/JourneysApi~listJourneysV2JourneysGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List journeys
     * List journeys with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~listJourneysV2JourneysGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listJourneysV2JourneysGet_0(opts, callback) {
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
        '/v2/journeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchJourneysV2JourneysSearchPost operation.
     * @callback module:api/JourneysApi~searchJourneysV2JourneysSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search journeys
     * Search journeys with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~searchJourneysV2JourneysSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchJourneysV2JourneysSearchPost(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchJourneysV2JourneysSearchPost");
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
        '/v2/journeys/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchJourneysV2JourneysSearchPost_0 operation.
     * @callback module:api/JourneysApi~searchJourneysV2JourneysSearchPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search journeys
     * Search journeys with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~searchJourneysV2JourneysSearchPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchJourneysV2JourneysSearchPost_0(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchJourneysV2JourneysSearchPost_0");
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
        '/v2/journeys/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJourneyV2JourneysJourneyIdPut operation.
     * @callback module:api/JourneysApi~updateJourneyV2JourneysJourneyIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update journey
     * Update an journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {module:model/Contact5} contact5 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~updateJourneyV2JourneysJourneyIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    updateJourneyV2JourneysJourneyIdPut(journeyId, contact5, opts, callback) {
      opts = opts || {};
      let postBody = contact5;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling updateJourneyV2JourneysJourneyIdPut");
      }
      // verify the required parameter 'contact5' is set
      if (contact5 === undefined || contact5 === null) {
        throw new Error("Missing the required parameter 'contact5' when calling updateJourneyV2JourneysJourneyIdPut");
      }

      let pathParams = {
        'journey_id': journeyId
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys/{journey_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateJourneyV2JourneysJourneyIdPut_0 operation.
     * @callback module:api/JourneysApi~updateJourneyV2JourneysJourneyIdPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Journey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update journey
     * Update an journey
     * @param {String} journeyId Unique identifier of the contact
     * @param {module:model/Contact5} contact5 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/JourneysApi~updateJourneyV2JourneysJourneyIdPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Journey}
     */
    updateJourneyV2JourneysJourneyIdPut_0(journeyId, contact5, opts, callback) {
      opts = opts || {};
      let postBody = contact5;
      // verify the required parameter 'journeyId' is set
      if (journeyId === undefined || journeyId === null) {
        throw new Error("Missing the required parameter 'journeyId' when calling updateJourneyV2JourneysJourneyIdPut_0");
      }
      // verify the required parameter 'contact5' is set
      if (contact5 === undefined || contact5 === null) {
        throw new Error("Missing the required parameter 'contact5' when calling updateJourneyV2JourneysJourneyIdPut_0");
      }

      let pathParams = {
        'journey_id': journeyId
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
      let returnType = Journey;
      return this.apiClient.callApi(
        '/v2/journeys/{journey_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
