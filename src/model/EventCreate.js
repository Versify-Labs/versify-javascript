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
 * The EventCreate model module.
 * @module model/EventCreate
 * @version 1.0.0
 */
class EventCreate {
    /**
     * Constructs a new <code>EventCreate</code>.
     * A event create request body.
     * @alias module:model/EventCreate
     */
    constructor() { 
        
        EventCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventCreate} obj Optional instance to populate.
     * @return {module:model/EventCreate} The populated <code>EventCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventCreate();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventCreate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
EventCreate.prototype['metadata'] = undefined;






export default EventCreate;

