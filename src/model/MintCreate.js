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
 * The MintCreate model module.
 * @module model/MintCreate
 * @version 1.0.0
 */
class MintCreate {
    /**
     * Constructs a new <code>MintCreate</code>.
     * A mint create request body.
     * @alias module:model/MintCreate
     */
    constructor() { 
        
        MintCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MintCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MintCreate} obj Optional instance to populate.
     * @return {module:model/MintCreate} The populated <code>MintCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MintCreate();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MintCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MintCreate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
MintCreate.prototype['metadata'] = undefined;






export default MintCreate;

