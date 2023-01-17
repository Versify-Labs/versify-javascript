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
import TagUpdate from './TagUpdate';

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
     * @implements module:model/TagUpdate
     */
    constructor() { 
        TagUpdate.initialize(this);
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
            TagUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
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

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact11.prototype['metadata'] = undefined;


// Implement TagUpdate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
TagUpdate.prototype['metadata'] = undefined;




export default Contact11;
