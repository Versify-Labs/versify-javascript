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
import RewardUpdate from './RewardUpdate';

/**
 * The Contact11 model module.
 * @module model/Contact11
 * @version 1.0.0
 */
class Contact11 {
    /**
     * Constructs a new <code>Contact11</code>.
     * Contact to update
     * @alias module:model/Contact11
     * @implements module:model/RewardUpdate
     */
    constructor() { 
        RewardUpdate.initialize(this);
        Contact11.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact11} obj Optional instance to populate.
     * @return {module:model/Contact11} The populated <code>Contact11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact11();
            RewardUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
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
     * Validates the JSON data with respect to <code>Contact11</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact11</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The description of the reward
 * @member {String} description
 * @default ''
 */
Contact11.prototype['description'] = '';

/**
 * The image of the reward
 * @member {String} image
 */
Contact11.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact11.prototype['metadata'] = undefined;

/**
 * The name of the reward. This is displayable to the customer.
 * @member {String} name
 * @default 'Reward'
 */
Contact11.prototype['name'] = 'Reward';


// Implement RewardUpdate interface:
/**
 * The description of the reward
 * @member {String} description
 * @default ''
 */
RewardUpdate.prototype['description'] = '';
/**
 * The image of the reward
 * @member {String} image
 */
RewardUpdate.prototype['image'] = undefined;
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
RewardUpdate.prototype['metadata'] = undefined;
/**
 * The name of the reward. This is displayable to the customer.
 * @member {String} name
 * @default 'Reward'
 */
RewardUpdate.prototype['name'] = 'Reward';




export default Contact11;

