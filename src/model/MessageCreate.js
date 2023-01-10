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

/**
 * The MessageCreate model module.
 * @module model/MessageCreate
 * @version 1.0.0
 */
class MessageCreate {
    /**
     * Constructs a new <code>MessageCreate</code>.
     * A message create request body.
     * @alias module:model/MessageCreate
     */
    constructor() { 
        
        MessageCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageCreate} obj Optional instance to populate.
     * @return {module:model/MessageCreate} The populated <code>MessageCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageCreate();

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
     * Validates the JSON data with respect to <code>MessageCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MessageCreate</code>.
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
MessageCreate.prototype['content_body'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
MessageCreate.prototype['metadata'] = undefined;






export default MessageCreate;
