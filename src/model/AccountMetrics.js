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
 * The AccountMetrics model module.
 * @module model/AccountMetrics
 * @version 1.0.0
 */
class AccountMetrics {
    /**
     * Constructs a new <code>AccountMetrics</code>.
     * Base model for all other models
     * @alias module:model/AccountMetrics
     */
    constructor() { 
        
        AccountMetrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountMetrics} obj Optional instance to populate.
     * @return {module:model/AccountMetrics} The populated <code>AccountMetrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountMetrics();

            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], 'Number');
            }
            if (data.hasOwnProperty('journey_runs')) {
                obj['journey_runs'] = ApiClient.convertToType(data['journey_runs'], 'Number');
            }
            if (data.hasOwnProperty('journeys')) {
                obj['journeys'] = ApiClient.convertToType(data['journeys'], 'Number');
            }
            if (data.hasOwnProperty('mints')) {
                obj['mints'] = ApiClient.convertToType(data['mints'], 'Number');
            }
            if (data.hasOwnProperty('redemptions')) {
                obj['redemptions'] = ApiClient.convertToType(data['redemptions'], 'Number');
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountMetrics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountMetrics</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The number of contacts in the account
 * @member {Number} contacts
 * @default 0
 */
AccountMetrics.prototype['contacts'] = 0;

/**
 * The number of journey runs in the account
 * @member {Number} journey_runs
 * @default 0
 */
AccountMetrics.prototype['journey_runs'] = 0;

/**
 * The number of journeys in the account
 * @member {Number} journeys
 * @default 0
 */
AccountMetrics.prototype['journeys'] = 0;

/**
 * The number of mints in the account
 * @member {Number} mints
 * @default 0
 */
AccountMetrics.prototype['mints'] = 0;

/**
 * The number of redemptions in the account
 * @member {Number} redemptions
 * @default 0
 */
AccountMetrics.prototype['redemptions'] = 0;

/**
 * The number of rewards in the account
 * @member {Number} rewards
 * @default 0
 */
AccountMetrics.prototype['rewards'] = 0;






export default AccountMetrics;
