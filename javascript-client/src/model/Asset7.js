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
import MessageCreate from './MessageCreate';

/**
 * The Asset7 model module.
 * @module model/Asset7
 * @version 1.0.0
 */
class Asset7 {
    /**
     * Constructs a new <code>Asset7</code>.
     * Asset to create
     * @alias module:model/Asset7
     * @implements module:model/MessageCreate
     */
    constructor() { 
        MessageCreate.initialize(this);
        Asset7.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Asset7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset7} obj Optional instance to populate.
     * @return {module:model/Asset7} The populated <code>Asset7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset7();
            MessageCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('content_body')) {
                obj['content_body'] = ApiClient.convertToType(data['content_body'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Asset7</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Asset7</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content_body'] && !(typeof data['content_body'] === 'string' || data['content_body'] instanceof String)) {
            throw new Error("Expected the field `content_body` to be a primitive type in the JSON string but got " + data['content_body']);
        }

        return true;
    }


}



/**
 * The body of the message
 * @member {String} content_body
 */
Asset7.prototype['content_body'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Asset7.prototype['metadata'] = undefined;


// Implement MessageCreate interface:
/**
 * The body of the message
 * @member {String} content_body
 */
MessageCreate.prototype['content_body'] = undefined;
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
MessageCreate.prototype['metadata'] = undefined;




export default Asset7;

