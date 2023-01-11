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
import HTTPValidationError from '../model/HTTPValidationError';
import User from '../model/User';
import User1 from '../model/User1';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCurrentUserV2UsersMeGet operation.
     * @callback module:api/UsersApi~getCurrentUserV2UsersMeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user
     * Get current user
     * @param {module:api/UsersApi~getCurrentUserV2UsersMeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    getCurrentUserV2UsersMeGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/v2/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCurrentUserV2UsersMePut operation.
     * @callback module:api/UsersApi~updateCurrentUserV2UsersMePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current user
     * Update current user
     * @param {module:model/User1} user1 
     * @param {module:api/UsersApi~updateCurrentUserV2UsersMePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    updateCurrentUserV2UsersMePut(user1, callback) {
      let postBody = user1;
      // verify the required parameter 'user1' is set
      if (user1 === undefined || user1 === null) {
        throw new Error("Missing the required parameter 'user1' when calling updateCurrentUserV2UsersMePut");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/v2/users/me', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
