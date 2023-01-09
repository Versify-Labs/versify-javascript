/**
 * Versify API
 * Versify API documentation
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
import CollectionCreate from './CollectionCreate';

/**
 * The Asset3 model module.
 * @module model/Asset3
 * @version 1.0.0
 */
class Asset3 {
    /**
     * Constructs a new <code>Asset3</code>.
     * Asset to create
     * @alias module:model/Asset3
     * @implements module:model/CollectionCreate
     */
    constructor() { 
        CollectionCreate.initialize(this);
        Asset3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Asset3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset3} obj Optional instance to populate.
     * @return {module:model/Asset3} The populated <code>Asset3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset3();
            CollectionCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Asset3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Asset3</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Asset3.prototype['metadata'] = undefined;


// Implement CollectionCreate interface:
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
CollectionCreate.prototype['metadata'] = undefined;




export default Asset3;

