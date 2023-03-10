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
import Name1 from './Name1';

/**
 * The ContactCreate model module.
 * @module model/ContactCreate
 * @version 1.0.0
 */
class ContactCreate {
    /**
     * Constructs a new <code>ContactCreate</code>.
     * A contact create request body.
     * @alias module:model/ContactCreate
     * @param email {String} The email address of the contact
     */
    constructor(email) { 
        
        ContactCreate.initialize(this, email);
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
     * Constructs a <code>ContactCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCreate} obj Optional instance to populate.
     * @return {module:model/ContactCreate} The populated <code>ContactCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactCreate();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = Name1.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContactCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // validate the optional field `name`
        if (data['name']) { // data not null
          Name1.validateJSON(data['name']);
        }
        // ensure the json data is a string
        if (data['phone_number'] && !(typeof data['phone_number'] === 'string' || data['phone_number'] instanceof String)) {
            throw new Error("Expected the field `phone_number` to be a primitive type in the JSON string but got " + data['phone_number']);
        }

        return true;
    }


}

ContactCreate.RequiredProperties = ["email"];

/**
 * The email address of the contact
 * @member {String} email
 */
ContactCreate.prototype['email'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
ContactCreate.prototype['metadata'] = undefined;

/**
 * @member {module:model/Name1} name
 */
ContactCreate.prototype['name'] = undefined;

/**
 * The phone number of the contact
 * @member {String} phone_number
 */
ContactCreate.prototype['phone_number'] = undefined;






export default ContactCreate;

