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
import Address1 from './Address1';
import ContactStatus from './ContactStatus';
import Name from './Name';
import SocialProfile from './SocialProfile';

/**
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.0
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * A contact document in the database.
     * @alias module:model/Contact
     * @param account {String} The account the contact belongs to
     * @param email {String} The email address of the contact
     */
    constructor(account, email) { 
        
        Contact.initialize(this, account, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, email) { 
        obj['account'] = account;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address1.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('browser')) {
                obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('last_seen')) {
                obj['last_seen'] = ApiClient.convertToType(data['last_seen'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = Name.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('social_profiles')) {
                obj['social_profiles'] = ApiClient.convertToType(data['social_profiles'], [SocialProfile]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], ContactStatus);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Contact.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['_id'] && !(typeof data['_id'] === 'string' || data['_id'] instanceof String)) {
            throw new Error("Expected the field `_id` to be a primitive type in the JSON string but got " + data['_id']);
        }
        // ensure the json data is a string
        if (data['account'] && !(typeof data['account'] === 'string' || data['account'] instanceof String)) {
            throw new Error("Expected the field `account` to be a primitive type in the JSON string but got " + data['account']);
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          Address1.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['avatar'] && !(typeof data['avatar'] === 'string' || data['avatar'] instanceof String)) {
            throw new Error("Expected the field `avatar` to be a primitive type in the JSON string but got " + data['avatar']);
        }
        // ensure the json data is a string
        if (data['browser'] && !(typeof data['browser'] === 'string' || data['browser'] instanceof String)) {
            throw new Error("Expected the field `browser` to be a primitive type in the JSON string but got " + data['browser']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          Name.validateJSON(data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['phone_number'] && !(typeof data['phone_number'] === 'string' || data['phone_number'] instanceof String)) {
            throw new Error("Expected the field `phone_number` to be a primitive type in the JSON string but got " + data['phone_number']);
        }
        if (data['social_profiles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['social_profiles'])) {
                throw new Error("Expected the field `social_profiles` to be an array in the JSON data but got " + data['social_profiles']);
            }
            // validate the optional field `social_profiles` (array)
            for (const item of data['social_profiles']) {
                SocialProfile.validateJsonObject(item);
            };
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          ContactStatus.validateJSON(data['status']);
        }

        return true;
    }


}

Contact.RequiredProperties = ["account", "email"];

/**
 * Unique identifier for the contact
 * @member {String} _id
 */
Contact.prototype['_id'] = undefined;

/**
 * The account the contact belongs to
 * @member {String} account
 */
Contact.prototype['account'] = undefined;

/**
 * @member {module:model/Address1} address
 */
Contact.prototype['address'] = undefined;

/**
 * The URL of the contact's avatar
 * @member {String} avatar
 */
Contact.prototype['avatar'] = undefined;

/**
 * The browser used by the contact
 * @member {String} browser
 */
Contact.prototype['browser'] = undefined;

/**
 * The timestamp when the event was created
 * @member {Number} created
 */
Contact.prototype['created'] = undefined;

/**
 * The email address of the contact
 * @member {String} email
 */
Contact.prototype['email'] = undefined;

/**
 * The timestamp when the contact was last seen
 * @member {Number} last_seen
 */
Contact.prototype['last_seen'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact.prototype['metadata'] = undefined;

/**
 * @member {module:model/Name} name
 */
Contact.prototype['name'] = undefined;

/**
 * The object type. Always 'contact'
 * @member {String} object
 * @default 'contact'
 */
Contact.prototype['object'] = 'contact';

/**
 * The ID of the user who owns the contact
 * @member {String} owner
 */
Contact.prototype['owner'] = undefined;

/**
 * The phone number of the contact
 * @member {String} phone_number
 */
Contact.prototype['phone_number'] = undefined;

/**
 * The social profiles associated with the contact
 * @member {Array.<module:model/SocialProfile>} social_profiles
 */
Contact.prototype['social_profiles'] = undefined;

/**
 * The status of the contact
 * @member {module:model/ContactStatus} status
 */
Contact.prototype['status'] = undefined;

/**
 * The timestamp when the event was last updated
 * @member {Number} updated
 */
Contact.prototype['updated'] = undefined;






export default Contact;

