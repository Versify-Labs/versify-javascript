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
* Enum class AssetStatus.
* @enum {}
* @readonly
*/
export default class AssetStatus {
    
        /**
         * value: "draft"
         * @const
         */
        "draft" = "draft";

    
        /**
         * value: "pending"
         * @const
         */
        "pending" = "pending";

    
        /**
         * value: "minted"
         * @const
         */
        "minted" = "minted";

    
        /**
         * value: "failed"
         * @const
         */
        "failed" = "failed";

    

    /**
    * Returns a <code>AssetStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AssetStatus} The enum <code>AssetStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

