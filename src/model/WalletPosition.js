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
* Enum class WalletPosition.
* @enum {}
* @readonly
*/
export default class WalletPosition {
    
        /**
         * value: "top-left"
         * @const
         */
        "top-left" = "top-left";

    
        /**
         * value: "top-right"
         * @const
         */
        "top-right" = "top-right";

    
        /**
         * value: "bottom-left"
         * @const
         */
        "bottom-left" = "bottom-left";

    
        /**
         * value: "bottom-right"
         * @const
         */
        "bottom-right" = "bottom-right";

    

    /**
    * Returns a <code>WalletPosition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WalletPosition} The enum <code>WalletPosition</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

