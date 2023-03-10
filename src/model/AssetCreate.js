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
 * The AssetCreate model module.
 * @module model/AssetCreate
 * @version 1.0.0
 */
class AssetCreate {
    /**
     * Constructs a new <code>AssetCreate</code>.
     * A asset create request body.
     * @alias module:model/AssetCreate
     * @param description {String} The description of the asset
     * @param image {String} The image of the asset
     * @param name {String} The name of the asset. Displayed on third party apps.
     */
    constructor(description, image, name) { 
        
        AssetCreate.initialize(this, description, image, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, image, name) { 
        obj['description'] = description;
        obj['image'] = image;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AssetCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetCreate} obj Optional instance to populate.
     * @return {module:model/AssetCreate} The populated <code>AssetCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetCreate();

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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

        return true;
    }


}

AssetCreate.RequiredProperties = ["description", "image", "name"];

/**
 * The description of the asset
 * @member {String} description
 */
AssetCreate.prototype['description'] = undefined;

/**
 * The image of the asset
 * @member {String} image
 */
AssetCreate.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
AssetCreate.prototype['metadata'] = undefined;

/**
 * The name of the asset. Displayed on third party apps.
 * @member {String} name
 */
AssetCreate.prototype['name'] = undefined;

/**
 * The properties of the asset. Displayed on third party apps.
 * @member {Array.<Object>} properties
 */
AssetCreate.prototype['properties'] = undefined;






export default AssetCreate;

