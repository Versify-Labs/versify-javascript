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
* Enum class MessageType.
* @enum {}
* @readonly
*/
export default class MessageType {
    
        /**
         * value: "app"
         * @const
         */
        "app" = "app";

    
        /**
         * value: "email"
         * @const
         */
        "email" = "email";

    

    /**
    * Returns a <code>MessageType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageType} The enum <code>MessageType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

