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
* Enum class SubscriptionPlan.
* @enum {}
* @readonly
*/
export default class SubscriptionPlan {
    
        /**
         * value: "trial"
         * @const
         */
        "trial" = "trial";

    
        /**
         * value: "growth"
         * @const
         */
        "growth" = "growth";

    
        /**
         * value: "enterprise"
         * @const
         */
        "enterprise" = "enterprise";

    

    /**
    * Returns a <code>SubscriptionPlan</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SubscriptionPlan} The enum <code>SubscriptionPlan</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

