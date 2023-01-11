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

import ApiClient from '../ApiClient';

/**
 * The App model module.
 * @module model/App
 * @version 1.0.0
 */
class App {
    /**
     * Constructs a new <code>App</code>.
     * Settings used to configure external integrations.
     * @alias module:model/App
     */
    constructor() { 
        
        App.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/App} obj Optional instance to populate.
     * @return {module:model/App} The populated <code>App</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new App();

            if (data.hasOwnProperty('access_scope')) {
                obj['access_scope'] = ApiClient.convertToType(data['access_scope'], 'String');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('webhook_url')) {
                obj['webhook_url'] = ApiClient.convertToType(data['webhook_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>App</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>App</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_scope'] && !(typeof data['access_scope'] === 'string' || data['access_scope'] instanceof String)) {
            throw new Error("Expected the field `access_scope` to be a primitive type in the JSON string but got " + data['access_scope']);
        }
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['refresh_token'] && !(typeof data['refresh_token'] === 'string' || data['refresh_token'] instanceof String)) {
            throw new Error("Expected the field `refresh_token` to be a primitive type in the JSON string but got " + data['refresh_token']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['webhook_url'] && !(typeof data['webhook_url'] === 'string' || data['webhook_url'] instanceof String)) {
            throw new Error("Expected the field `webhook_url` to be a primitive type in the JSON string but got " + data['webhook_url']);
        }

        return true;
    }


}



/**
 * An application-specific list of permissions associated with the app
 * @member {String} access_scope
 */
App.prototype['access_scope'] = undefined;

/**
 * The access token of the app
 * @member {String} access_token
 */
App.prototype['access_token'] = undefined;

/**
 * The ID of the app
 * @member {String} id
 */
App.prototype['id'] = undefined;

/**
 * The name of the app
 * @member {String} name
 */
App.prototype['name'] = undefined;

/**
 * The refresh token of the app
 * @member {String} refresh_token
 */
App.prototype['refresh_token'] = undefined;

/**
 * The URL of the app
 * @member {String} url
 */
App.prototype['url'] = undefined;

/**
 * The webhook URL of the app
 * @member {String} webhook_url
 */
App.prototype['webhook_url'] = undefined;






export default App;

