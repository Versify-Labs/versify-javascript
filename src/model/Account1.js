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
import AccountCreate from './AccountCreate';

/**
 * The Account1 model module.
 * @module model/Account1
 * @version 1.0.0
 */
class Account1 {
    /**
     * Constructs a new <code>Account1</code>.
     * Account to create
     * @alias module:model/Account1
     * @implements module:model/AccountCreate
     * @param name {String} The name of the account. Displayable to customers.
     */
    constructor(name) { 
        AccountCreate.initialize(this, name);
        Account1.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Account1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account1} obj Optional instance to populate.
     * @return {module:model/Account1} The populated <code>Account1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account1();
            AccountCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Account1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Account1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Account1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

Account1.RequiredProperties = ["name"];

/**
 * The domain of the account. Displayable to customers.
 * @member {String} domain
 */
Account1.prototype['domain'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Account1.prototype['metadata'] = undefined;

/**
 * The name of the account. Displayable to customers.
 * @member {String} name
 */
Account1.prototype['name'] = undefined;


// Implement AccountCreate interface:
/**
 * The domain of the account. Displayable to customers.
 * @member {String} domain
 */
AccountCreate.prototype['domain'] = undefined;
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
AccountCreate.prototype['metadata'] = undefined;
/**
 * The name of the account. Displayable to customers.
 * @member {String} name
 */
AccountCreate.prototype['name'] = undefined;




export default Account1;
