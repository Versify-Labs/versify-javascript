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
import AccountUpdate from './AccountUpdate';
import BrandSettings from './BrandSettings';

/**
 * The Account2 model module.
 * @module model/Account2
 * @version 1.0.0
 */
class Account2 {
    /**
     * Constructs a new <code>Account2</code>.
     * Account to update
     * @alias module:model/Account2
     * @implements module:model/AccountUpdate
     */
    constructor() { 
        AccountUpdate.initialize(this);
        Account2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Account2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account2} obj Optional instance to populate.
     * @return {module:model/Account2} The populated <code>Account2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account2();
            AccountUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('brand')) {
                obj['brand'] = BrandSettings.constructFromObject(data['brand']);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Account2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Account2</code>.
     */
    static validateJSON(data) {
        // validate the optional field `brand`
        if (data['brand']) { // data not null
          BrandSettings.validateJSON(data['brand']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {module:model/BrandSettings} brand
 */
Account2.prototype['brand'] = undefined;

/**
 * The domain of the account
 * @member {String} domain
 */
Account2.prototype['domain'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Account2.prototype['metadata'] = undefined;

/**
 * The name of the account
 * @member {String} name
 */
Account2.prototype['name'] = undefined;


// Implement AccountUpdate interface:
/**
 * @member {module:model/BrandSettings} brand
 */
AccountUpdate.prototype['brand'] = undefined;
/**
 * The domain of the account
 * @member {String} domain
 */
AccountUpdate.prototype['domain'] = undefined;
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
AccountUpdate.prototype['metadata'] = undefined;
/**
 * The name of the account
 * @member {String} name
 */
AccountUpdate.prototype['name'] = undefined;




export default Account2;

