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
* Enum class TeamMemberRole.
* @enum {}
* @readonly
*/
export default class TeamMemberRole {
    
        /**
         * value: "admin"
         * @const
         */
        "admin" = "admin";

    
        /**
         * value: "guest"
         * @const
         */
        "guest" = "guest";

    
        /**
         * value: "member"
         * @const
         */
        "member" = "member";

    
        /**
         * value: "support"
         * @const
         */
        "support" = "support";

    

    /**
    * Returns a <code>TeamMemberRole</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TeamMemberRole} The enum <code>TeamMemberRole</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

