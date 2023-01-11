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
* Enum class ActionType.
* @enum {}
* @readonly
*/
export default class ActionType {
    
        /**
         * value: "create_note"
         * @const
         */
        "create_note" = "create_note";

    
        /**
         * value: "send_app_message"
         * @const
         */
        "send_app_message" = "send_app_message";

    
        /**
         * value: "send_email_message"
         * @const
         */
        "send_email_message" = "send_email_message";

    
        /**
         * value: "send_reward"
         * @const
         */
        "send_reward" = "send_reward";

    
        /**
         * value: "tag_contact"
         * @const
         */
        "tag_contact" = "tag_contact";

    
        /**
         * value: "match_all"
         * @const
         */
        "match_all" = "match_all";

    
        /**
         * value: "match_any"
         * @const
         */
        "match_any" = "match_any";

    
        /**
         * value: "wait"
         * @const
         */
        "wait" = "wait";

    

    /**
    * Returns a <code>ActionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActionType} The enum <code>ActionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

