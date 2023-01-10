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

/**
 * The SocialProfile model module.
 * @module model/SocialProfile
 * @version 1.0.0
 */
class SocialProfile {
    /**
     * Constructs a new <code>SocialProfile</code>.
     * A social profile for a contact.
     * @alias module:model/SocialProfile
     * @param name {String} The name of the social network
     * @param url {String} The URL of the social profile
     */
    constructor(name, url) { 
        
        SocialProfile.initialize(this, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, url) { 
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>SocialProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SocialProfile} obj Optional instance to populate.
     * @return {module:model/SocialProfile} The populated <code>SocialProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialProfile();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SocialProfile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SocialProfile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SocialProfile.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

SocialProfile.RequiredProperties = ["name", "url"];

/**
 * The name of the social network
 * @member {String} name
 */
SocialProfile.prototype['name'] = undefined;

/**
 * The URL of the social profile
 * @member {String} url
 */
SocialProfile.prototype['url'] = undefined;






export default SocialProfile;

