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
import EventUpdate from './EventUpdate';

/**
 * The Contact5 model module.
 * @module model/Contact5
 * @version 1.0.0
 */
class Contact5 {
    /**
     * Constructs a new <code>Contact5</code>.
     * Contact to update
     * @alias module:model/Contact5
     * @implements module:model/EventUpdate
     */
    constructor() { 
        EventUpdate.initialize(this);
        Contact5.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact5} obj Optional instance to populate.
     * @return {module:model/Contact5} The populated <code>Contact5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact5();
            EventUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact5</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact5</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact5.prototype['metadata'] = undefined;


// Implement EventUpdate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
EventUpdate.prototype['metadata'] = undefined;




export default Contact5;

