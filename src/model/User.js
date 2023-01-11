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
import IdentityProvider from './IdentityProvider';
import Name3 from './Name3';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * A user document in the database.
     * @alias module:model/User
     * @param avatar {String} The URL of the user's avatar
     * @param email {String} The email address of the user
     */
    constructor(avatar, email) { 
        
        User.initialize(this, avatar, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, avatar, email) { 
        obj['avatar'] = avatar;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_verified')) {
                obj['email_verified'] = ApiClient.convertToType(data['email_verified'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = Name3.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('phone_number_verified')) {
                obj['phone_number_verified'] = ApiClient.convertToType(data['phone_number_verified'], 'Boolean');
            }
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], [IdentityProvider]);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of User.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['_id'] && !(typeof data['_id'] === 'string' || data['_id'] instanceof String)) {
            throw new Error("Expected the field `_id` to be a primitive type in the JSON string but got " + data['_id']);
        }
        // ensure the json data is a string
        if (data['avatar'] && !(typeof data['avatar'] === 'string' || data['avatar'] instanceof String)) {
            throw new Error("Expected the field `avatar` to be a primitive type in the JSON string but got " + data['avatar']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          Name3.validateJSON(data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['phone_number'] && !(typeof data['phone_number'] === 'string' || data['phone_number'] instanceof String)) {
            throw new Error("Expected the field `phone_number` to be a primitive type in the JSON string but got " + data['phone_number']);
        }
        if (data['providers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['providers'])) {
                throw new Error("Expected the field `providers` to be an array in the JSON data but got " + data['providers']);
            }
            // validate the optional field `providers` (array)
            for (const item of data['providers']) {
                IdentityProvider.validateJsonObject(item);
            };
        }

        return true;
    }


}

User.RequiredProperties = ["avatar", "email"];

/**
 * Unique identifier for the user
 * @member {String} _id
 */
User.prototype['_id'] = undefined;

/**
 * Whether the user is active
 * @member {Boolean} active
 * @default true
 */
User.prototype['active'] = true;

/**
 * The URL of the user's avatar
 * @member {String} avatar
 */
User.prototype['avatar'] = undefined;

/**
 * The timestamp when the event was created
 * @member {Number} created
 */
User.prototype['created'] = undefined;

/**
 * The email address of the user
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * Whether the user's email address has been verified
 * @member {Boolean} email_verified
 * @default false
 */
User.prototype['email_verified'] = false;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
User.prototype['metadata'] = undefined;

/**
 * @member {module:model/Name3} name
 */
User.prototype['name'] = undefined;

/**
 * The object type. Always \"user\"
 * @member {String} object
 * @default 'user'
 */
User.prototype['object'] = 'user';

/**
 * The phone number of the user
 * @member {String} phone_number
 */
User.prototype['phone_number'] = undefined;

/**
 * Whether the user's phone number has been verified
 * @member {Boolean} phone_number_verified
 * @default false
 */
User.prototype['phone_number_verified'] = false;

/**
 * The identity providers the user belongs to
 * @member {Array.<module:model/IdentityProvider>} providers
 */
User.prototype['providers'] = undefined;

/**
 * The timestamp when the event was last updated
 * @member {Number} updated
 */
User.prototype['updated'] = undefined;






export default User;

