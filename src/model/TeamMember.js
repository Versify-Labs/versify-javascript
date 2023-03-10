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
import TeamMemberRole from './TeamMemberRole';

/**
 * The TeamMember model module.
 * @module model/TeamMember
 * @version 1.0.0
 */
class TeamMember {
    /**
     * Constructs a new <code>TeamMember</code>.
     * A team member.
     * @alias module:model/TeamMember
     * @param email {String} The email of the team member
     */
    constructor(email) { 
        
        TeamMember.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>TeamMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMember} obj Optional instance to populate.
     * @return {module:model/TeamMember} The populated <code>TeamMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMember();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], TeamMemberRole);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TeamMember</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TeamMember</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TeamMember.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // validate the optional field `role`
        if (data['role']) { // data not null
          TeamMemberRole.validateJSON(data['role']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }

        return true;
    }


}

TeamMember.RequiredProperties = ["email"];

/**
 * The email of the team member
 * @member {String} email
 */
TeamMember.prototype['email'] = undefined;

/**
 * The role of the team member
 * @member {module:model/TeamMemberRole} role
 */
TeamMember.prototype['role'] = undefined;

/**
 * The user ID of the team member
 * @member {String} user
 */
TeamMember.prototype['user'] = undefined;






export default TeamMember;

