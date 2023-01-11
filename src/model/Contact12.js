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
 * The Contact12 model module.
 * @module model/Contact12
 * @version 1.0.0
 */
class Contact12 {
    /**
     * Constructs a new <code>Contact12</code>.
     * Contact to update
     * @alias module:model/Contact12
     * @implements module:model/TagUpdate
     */
    constructor() { 
        TagUpdate.initialize(this);
        Contact12.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact12} obj Optional instance to populate.
     * @return {module:model/Contact12} The populated <code>Contact12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact12();
            TagUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact12</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact12</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact12.prototype['metadata'] = undefined;


// Implement TagUpdate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
TagUpdate.prototype['metadata'] = undefined;




export default Contact12;

