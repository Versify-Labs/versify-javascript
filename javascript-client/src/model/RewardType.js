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
* Enum class RewardType.
* @enum {}
* @readonly
*/
export default class RewardType {
    
        /**
         * value: "coupon"
         * @const
         */
        "coupon" = "coupon";

    
        /**
         * value: "discount"
         * @const
         */
        "discount" = "discount";

    
        /**
         * value: "gift"
         * @const
         */
        "gift" = "gift";

    

    /**
    * Returns a <code>RewardType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RewardType} The enum <code>RewardType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

