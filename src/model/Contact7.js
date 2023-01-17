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
import MintUpdate from './MintUpdate';

/**
 * The Contact7 model module.
 * @module model/Contact7
 * @version 1.0.0
 */
class Contact7 {
    /**
     * Constructs a new <code>Contact7</code>.
     * Contact to update
     * @alias module:model/Contact7
     * @implements module:model/MintUpdate
     */
    constructor() { 
        MintUpdate.initialize(this);
        Contact7.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact7} obj Optional instance to populate.
     * @return {module:model/Contact7} The populated <code>Contact7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact7();
            MintUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact7</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact7</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Contact7.prototype['metadata'] = undefined;


// Implement MintUpdate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
MintUpdate.prototype['metadata'] = undefined;




export default Contact7;
