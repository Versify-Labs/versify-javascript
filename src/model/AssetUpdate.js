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

import ApiClient from '../ApiClient';
import AssetStatus from './AssetStatus';

/**
 * The AssetUpdate model module.
 * @module model/AssetUpdate
 * @version 1.0.0
 */
class AssetUpdate {
    /**
     * Constructs a new <code>AssetUpdate</code>.
     * A asset update request body.
     * @alias module:model/AssetUpdate
     */
    constructor() { 
        
        AssetUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetUpdate} obj Optional instance to populate.
     * @return {module:model/AssetUpdate} The populated <code>AssetUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetUpdate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], AssetStatus);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['properties'])) {
            throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          AssetStatus.validateJSON(data['status']);
        }

        return true;
    }


}



/**
 * The description of the asset
 * @member {String} description
 */
AssetUpdate.prototype['description'] = undefined;

/**
 * The image of the asset
 * @member {String} image
 */
AssetUpdate.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
AssetUpdate.prototype['metadata'] = undefined;

/**
 * The name of the asset. Displayed on third party apps.
 * @member {String} name
 */
AssetUpdate.prototype['name'] = undefined;

/**
 * The properties of the asset. Displayed on third party apps.
 * @member {Array.<Object>} properties
 */
AssetUpdate.prototype['properties'] = undefined;

/**
 * The status of the asset
 * @member {module:model/AssetStatus} status
 */
AssetUpdate.prototype['status'] = undefined;






export default AssetUpdate;

