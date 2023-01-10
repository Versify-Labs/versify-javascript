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
import AccountFeatures from './AccountFeatures';

/**
 * The AccountFeatures model module.
 * @module model/AccountFeatures
 * @version 1.0.0
 */
class AccountFeatures {
    /**
     * Constructs a new <code>AccountFeatures</code>.
     * The features enabled for the account
     * @alias module:model/AccountFeatures
     * @implements module:model/AccountFeatures
     */
    constructor() { 
        AccountFeatures.initialize(this);
        AccountFeatures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountFeatures} obj Optional instance to populate.
     * @return {module:model/AccountFeatures} The populated <code>AccountFeatures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountFeatures();
            AccountFeatures.constructFromObject(data, obj);

            if (data.hasOwnProperty('journeys')) {
                obj['journeys'] = ApiClient.convertToType(data['journeys'], 'Boolean');
            }
            if (data.hasOwnProperty('mints')) {
                obj['mints'] = ApiClient.convertToType(data['mints'], 'Boolean');
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountFeatures</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountFeatures</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whether journeys are enabled
 * @member {Boolean} journeys
 * @default true
 */
AccountFeatures.prototype['journeys'] = true;

/**
 * Whether mints are enabled
 * @member {Boolean} mints
 * @default true
 */
AccountFeatures.prototype['mints'] = true;

/**
 * Whether rewards are enabled
 * @member {Boolean} rewards
 * @default true
 */
AccountFeatures.prototype['rewards'] = true;


// Implement AccountFeatures interface:
/**
 * Whether journeys are enabled
 * @member {Boolean} journeys
 * @default true
 */
AccountFeatures.prototype['journeys'] = true;
/**
 * Whether mints are enabled
 * @member {Boolean} mints
 * @default true
 */
AccountFeatures.prototype['mints'] = true;
/**
 * Whether rewards are enabled
 * @member {Boolean} rewards
 * @default true
 */
AccountFeatures.prototype['rewards'] = true;




export default AccountFeatures;
