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
import MintCreate from './MintCreate';

/**
 * The Asset6 model module.
 * @module model/Asset6
 * @version 1.0.0
 */
class Asset6 {
    /**
     * Constructs a new <code>Asset6</code>.
     * Asset to create
     * @alias module:model/Asset6
     * @implements module:model/MintCreate
     */
    constructor() { 
        MintCreate.initialize(this);
        Asset6.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Asset6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset6} obj Optional instance to populate.
     * @return {module:model/Asset6} The populated <code>Asset6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset6();
            MintCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Asset6</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Asset6</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Asset6.prototype['metadata'] = undefined;


// Implement MintCreate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
MintCreate.prototype['metadata'] = undefined;




export default Asset6;
