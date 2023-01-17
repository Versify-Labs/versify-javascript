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
 * The BodyAccessTokenV2OauthAccessTokenPost model module.
 * @module model/BodyAccessTokenV2OauthAccessTokenPost
 * @version 1.0.0
 */
class BodyAccessTokenV2OauthAccessTokenPost {
    /**
     * Constructs a new <code>BodyAccessTokenV2OauthAccessTokenPost</code>.
     * @alias module:model/BodyAccessTokenV2OauthAccessTokenPost
     * @param code {String} The code to authenticate with.
     * @param customClaims {Object} The custom claims to use for authentication.
     */
    constructor(code, customClaims) { 
        
        BodyAccessTokenV2OauthAccessTokenPost.initialize(this, code, customClaims);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, customClaims) { 
        obj['code'] = code;
        obj['custom_claims'] = customClaims;
    }

    /**
     * Constructs a <code>BodyAccessTokenV2OauthAccessTokenPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyAccessTokenV2OauthAccessTokenPost} obj Optional instance to populate.
     * @return {module:model/BodyAccessTokenV2OauthAccessTokenPost} The populated <code>BodyAccessTokenV2OauthAccessTokenPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodyAccessTokenV2OauthAccessTokenPost();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('custom_claims')) {
                obj['custom_claims'] = ApiClient.convertToType(data['custom_claims'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BodyAccessTokenV2OauthAccessTokenPost</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BodyAccessTokenV2OauthAccessTokenPost</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BodyAccessTokenV2OauthAccessTokenPost.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}

BodyAccessTokenV2OauthAccessTokenPost.RequiredProperties = ["code", "custom_claims"];

/**
 * The code to authenticate with.
 * @member {String} code
 */
BodyAccessTokenV2OauthAccessTokenPost.prototype['code'] = undefined;

/**
 * The custom claims to use for authentication.
 * @member {Object} custom_claims
 */
BodyAccessTokenV2OauthAccessTokenPost.prototype['custom_claims'] = undefined;






export default BodyAccessTokenV2OauthAccessTokenPost;

