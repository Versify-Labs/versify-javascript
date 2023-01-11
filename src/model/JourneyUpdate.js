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

/**
 * The JourneyUpdate model module.
 * @module model/JourneyUpdate
 * @version 1.0.0
 */
class JourneyUpdate {
    /**
     * Constructs a new <code>JourneyUpdate</code>.
     * A journey update request body.
     * @alias module:model/JourneyUpdate
     */
    constructor() { 
        
        JourneyUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JourneyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JourneyUpdate} obj Optional instance to populate.
     * @return {module:model/JourneyUpdate} The populated <code>JourneyUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JourneyUpdate();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JourneyUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JourneyUpdate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
JourneyUpdate.prototype['metadata'] = undefined;






export default JourneyUpdate;

