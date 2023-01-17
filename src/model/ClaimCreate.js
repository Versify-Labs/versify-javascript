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
 * The ClaimCreate model module.
 * @module model/ClaimCreate
 * @version 1.0.0
 */
class ClaimCreate {
    /**
     * Constructs a new <code>ClaimCreate</code>.
     * A claim create request body.
     * @alias module:model/ClaimCreate
     * @param asset {String} The asset being claimed
     * @param code {String} The code used to submit the claim.
     */
    constructor(asset, code) { 
        
        ClaimCreate.initialize(this, asset, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, asset, code) { 
        obj['asset'] = asset;
        obj['code'] = code;
    }

    /**
     * Constructs a <code>ClaimCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClaimCreate} obj Optional instance to populate.
     * @return {module:model/ClaimCreate} The populated <code>ClaimCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClaimCreate();

            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClaimCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClaimCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClaimCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['asset'] && !(typeof data['asset'] === 'string' || data['asset'] instanceof String)) {
            throw new Error("Expected the field `asset` to be a primitive type in the JSON string but got " + data['asset']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}

ClaimCreate.RequiredProperties = ["asset", "code"];

/**
 * The asset being claimed
 * @member {String} asset
 */
ClaimCreate.prototype['asset'] = undefined;

/**
 * The code used to submit the claim.
 * @member {String} code
 */
ClaimCreate.prototype['code'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
ClaimCreate.prototype['metadata'] = undefined;

/**
 * The number of assets being claimed
 * @member {Number} quantity
 * @default 1
 */
ClaimCreate.prototype['quantity'] = 1;






export default ClaimCreate;
