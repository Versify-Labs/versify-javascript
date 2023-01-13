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
import Asset from '../model/Asset';
import Asset1 from '../model/Asset1';
import Contact from '../model/Contact';
import HTTPValidationError from '../model/HTTPValidationError';
import SearchContacts from '../model/SearchContacts';

/**
* Assets service.
* @module api/AssetsApi
* @version 1.0.0
*/
export default class AssetsApi {

    /**
    * Constructs a new AssetsApi. 
    * @alias module:api/AssetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAssetV2AssetsPost operation.
     * @callback module:api/AssetsApi~createAssetV2AssetsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create asset
     * Create a asset
     * @param {module:model/Asset1} asset1 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~createAssetV2AssetsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    createAssetV2AssetsPost(asset1, opts, callback) {
      opts = opts || {};
      let postBody = asset1;
      // verify the required parameter 'asset1' is set
      if (asset1 === undefined || asset1 === null) {
        throw new Error("Missing the required parameter 'asset1' when calling createAssetV2AssetsPost");
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAssetV2AssetsPost_0 operation.
     * @callback module:api/AssetsApi~createAssetV2AssetsPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create asset
     * Create a asset
     * @param {module:model/Asset1} asset1 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~createAssetV2AssetsPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    createAssetV2AssetsPost_0(asset1, opts, callback) {
      opts = opts || {};
      let postBody = asset1;
      // verify the required parameter 'asset1' is set
      if (asset1 === undefined || asset1 === null) {
        throw new Error("Missing the required parameter 'asset1' when calling createAssetV2AssetsPost_0");
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssetV2AssetsAssetIdDelete operation.
     * @callback module:api/AssetsApi~deleteAssetV2AssetsAssetIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete asset
     * Delete an asset
     * @param {String} assetId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~deleteAssetV2AssetsAssetIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteAssetV2AssetsAssetIdDelete(assetId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling deleteAssetV2AssetsAssetIdDelete");
      }

      let pathParams = {
        'asset_id': assetId
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
        '/v2/assets/{asset_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssetV2AssetsAssetIdDelete_0 operation.
     * @callback module:api/AssetsApi~deleteAssetV2AssetsAssetIdDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete asset
     * Delete an asset
     * @param {String} assetId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~deleteAssetV2AssetsAssetIdDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiDeleteResponse}
     */
    deleteAssetV2AssetsAssetIdDelete_0(assetId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling deleteAssetV2AssetsAssetIdDelete_0");
      }

      let pathParams = {
        'asset_id': assetId
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
        '/v2/assets/{asset_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssetV2AssetsAssetIdGet operation.
     * @callback module:api/AssetsApi~getAssetV2AssetsAssetIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get asset
     * Get a asset
     * @param {String} assetId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~getAssetV2AssetsAssetIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    getAssetV2AssetsAssetIdGet(assetId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetV2AssetsAssetIdGet");
      }

      let pathParams = {
        'asset_id': assetId
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets/{asset_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssetV2AssetsAssetIdGet_0 operation.
     * @callback module:api/AssetsApi~getAssetV2AssetsAssetIdGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get asset
     * Get a asset
     * @param {String} assetId Unique identifier of the contact
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~getAssetV2AssetsAssetIdGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    getAssetV2AssetsAssetIdGet_0(assetId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetV2AssetsAssetIdGet_0");
      }

      let pathParams = {
        'asset_id': assetId
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets/{asset_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssetsV2AssetsGet operation.
     * @callback module:api/AssetsApi~listAssetsV2AssetsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List assets
     * List assets with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~listAssetsV2AssetsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listAssetsV2AssetsGet(opts, callback) {
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
        '/v2/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssetsV2AssetsGet_0 operation.
     * @callback module:api/AssetsApi~listAssetsV2AssetsGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List assets
     * List assets with optional filters and pagination parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNum Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 10)
     * @param {String} opts.collection Collection ID
     * @param {String} opts.status Collection status
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~listAssetsV2AssetsGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiListResponse}
     */
    listAssetsV2AssetsGet_0(opts, callback) {
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
        '/v2/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAssetsV2AssetsSearchPost operation.
     * @callback module:api/AssetsApi~searchAssetsV2AssetsSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search assets
     * Search assets with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~searchAssetsV2AssetsSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchAssetsV2AssetsSearchPost(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchAssetsV2AssetsSearchPost");
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
        '/v2/assets/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAssetsV2AssetsSearchPost_0 operation.
     * @callback module:api/AssetsApi~searchAssetsV2AssetsSearchPost_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search assets
     * Search assets with query string
     * @param {module:model/SearchContacts} searchContacts 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~searchAssetsV2AssetsSearchPost_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiSearchResponse}
     */
    searchAssetsV2AssetsSearchPost_0(searchContacts, opts, callback) {
      opts = opts || {};
      let postBody = searchContacts;
      // verify the required parameter 'searchContacts' is set
      if (searchContacts === undefined || searchContacts === null) {
        throw new Error("Missing the required parameter 'searchContacts' when calling searchAssetsV2AssetsSearchPost_0");
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
        '/v2/assets/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAssetV2AssetsAssetIdPut operation.
     * @callback module:api/AssetsApi~updateAssetV2AssetsAssetIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update asset
     * Update an asset
     * @param {String} assetId Unique identifier of the contact
     * @param {module:model/Contact} contact 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~updateAssetV2AssetsAssetIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    updateAssetV2AssetsAssetIdPut(assetId, contact, opts, callback) {
      opts = opts || {};
      let postBody = contact;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling updateAssetV2AssetsAssetIdPut");
      }
      // verify the required parameter 'contact' is set
      if (contact === undefined || contact === null) {
        throw new Error("Missing the required parameter 'contact' when calling updateAssetV2AssetsAssetIdPut");
      }

      let pathParams = {
        'asset_id': assetId
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets/{asset_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAssetV2AssetsAssetIdPut_0 operation.
     * @callback module:api/AssetsApi~updateAssetV2AssetsAssetIdPut_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update asset
     * Update an asset
     * @param {String} assetId Unique identifier of the contact
     * @param {module:model/Contact} contact 
     * @param {Object} opts Optional parameters
     * @param {String} opts.versifyAccount Versify Account ID
     * @param {module:api/AssetsApi~updateAssetV2AssetsAssetIdPut_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */
    updateAssetV2AssetsAssetIdPut_0(assetId, contact, opts, callback) {
      opts = opts || {};
      let postBody = contact;
      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling updateAssetV2AssetsAssetIdPut_0");
      }
      // verify the required parameter 'contact' is set
      if (contact === undefined || contact === null) {
        throw new Error("Missing the required parameter 'contact' when calling updateAssetV2AssetsAssetIdPut_0");
      }

      let pathParams = {
        'asset_id': assetId
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
      let returnType = Asset;
      return this.apiClient.callApi(
        '/v2/assets/{asset_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}