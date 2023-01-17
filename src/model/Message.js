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
import MessageStatus from './MessageStatus';
import MessageType from './MessageType';

/**
 * The Message model module.
 * @module model/Message
 * @version 1.0.0
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * A message document in the database.
     * @alias module:model/Message
     * @param account {String} The account the message belongs to
     */
    constructor(account) { 
        
        Message.initialize(this, account);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account) { 
        obj['account'] = account;
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('bcc_list')) {
                obj['bcc_list'] = ApiClient.convertToType(data['bcc_list'], ['String']);
            }
            if (data.hasOwnProperty('cc_list')) {
                obj['cc_list'] = ApiClient.convertToType(data['cc_list'], ['String']);
            }
            if (data.hasOwnProperty('content_body')) {
                obj['content_body'] = ApiClient.convertToType(data['content_body'], 'String');
            }
            if (data.hasOwnProperty('content_preheader')) {
                obj['content_preheader'] = ApiClient.convertToType(data['content_preheader'], 'String');
            }
            if (data.hasOwnProperty('content_subject')) {
                obj['content_subject'] = ApiClient.convertToType(data['content_subject'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('from_email')) {
                obj['from_email'] = ApiClient.convertToType(data['from_email'], 'String');
            }
            if (data.hasOwnProperty('from_name')) {
                obj['from_name'] = ApiClient.convertToType(data['from_name'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], MessageType);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('reply_to_email')) {
                obj['reply_to_email'] = ApiClient.convertToType(data['reply_to_email'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], MessageStatus);
            }
            if (data.hasOwnProperty('to_contact')) {
                obj['to_contact'] = ApiClient.convertToType(data['to_contact'], 'String');
            }
            if (data.hasOwnProperty('to_email')) {
                obj['to_email'] = ApiClient.convertToType(data['to_email'], 'String');
            }
            if (data.hasOwnProperty('to_name')) {
                obj['to_name'] = ApiClient.convertToType(data['to_name'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Message</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Message</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Message.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['_id'] && !(typeof data['_id'] === 'string' || data['_id'] instanceof String)) {
            throw new Error("Expected the field `_id` to be a primitive type in the JSON string but got " + data['_id']);
        }
        // ensure the json data is a string
        if (data['account'] && !(typeof data['account'] === 'string' || data['account'] instanceof String)) {
            throw new Error("Expected the field `account` to be a primitive type in the JSON string but got " + data['account']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bcc_list'])) {
            throw new Error("Expected the field `bcc_list` to be an array in the JSON data but got " + data['bcc_list']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cc_list'])) {
            throw new Error("Expected the field `cc_list` to be an array in the JSON data but got " + data['cc_list']);
        }
        // ensure the json data is a string
        if (data['content_body'] && !(typeof data['content_body'] === 'string' || data['content_body'] instanceof String)) {
            throw new Error("Expected the field `content_body` to be a primitive type in the JSON string but got " + data['content_body']);
        }
        // ensure the json data is a string
        if (data['content_preheader'] && !(typeof data['content_preheader'] === 'string' || data['content_preheader'] instanceof String)) {
            throw new Error("Expected the field `content_preheader` to be a primitive type in the JSON string but got " + data['content_preheader']);
        }
        // ensure the json data is a string
        if (data['content_subject'] && !(typeof data['content_subject'] === 'string' || data['content_subject'] instanceof String)) {
            throw new Error("Expected the field `content_subject` to be a primitive type in the JSON string but got " + data['content_subject']);
        }
        // ensure the json data is a string
        if (data['from_email'] && !(typeof data['from_email'] === 'string' || data['from_email'] instanceof String)) {
            throw new Error("Expected the field `from_email` to be a primitive type in the JSON string but got " + data['from_email']);
        }
        // ensure the json data is a string
        if (data['from_name'] && !(typeof data['from_name'] === 'string' || data['from_name'] instanceof String)) {
            throw new Error("Expected the field `from_name` to be a primitive type in the JSON string but got " + data['from_name']);
        }
        // validate the optional field `message_type`
        if (data['message_type']) { // data not null
          MessageType.validateJSON(data['message_type']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['reply_to_email'] && !(typeof data['reply_to_email'] === 'string' || data['reply_to_email'] instanceof String)) {
            throw new Error("Expected the field `reply_to_email` to be a primitive type in the JSON string but got " + data['reply_to_email']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          MessageStatus.validateJSON(data['status']);
        }
        // ensure the json data is a string
        if (data['to_contact'] && !(typeof data['to_contact'] === 'string' || data['to_contact'] instanceof String)) {
            throw new Error("Expected the field `to_contact` to be a primitive type in the JSON string but got " + data['to_contact']);
        }
        // ensure the json data is a string
        if (data['to_email'] && !(typeof data['to_email'] === 'string' || data['to_email'] instanceof String)) {
            throw new Error("Expected the field `to_email` to be a primitive type in the JSON string but got " + data['to_email']);
        }
        // ensure the json data is a string
        if (data['to_name'] && !(typeof data['to_name'] === 'string' || data['to_name'] instanceof String)) {
            throw new Error("Expected the field `to_name` to be a primitive type in the JSON string but got " + data['to_name']);
        }

        return true;
    }


}

Message.RequiredProperties = ["account"];

/**
 * Unique identifier for the message
 * @member {String} _id
 */
Message.prototype['_id'] = undefined;

/**
 * The account the message belongs to
 * @member {String} account
 */
Message.prototype['account'] = undefined;

/**
 * The bcc list of the message
 * @member {Array.<String>} bcc_list
 */
Message.prototype['bcc_list'] = undefined;

/**
 * The cc list of the message
 * @member {Array.<String>} cc_list
 */
Message.prototype['cc_list'] = undefined;

/**
 * The body of the message
 * @member {String} content_body
 * @default ''
 */
Message.prototype['content_body'] = '';

/**
 * The preheader of the message
 * @member {String} content_preheader
 */
Message.prototype['content_preheader'] = undefined;

/**
 * The subject of the message
 * @member {String} content_subject
 */
Message.prototype['content_subject'] = undefined;

/**
 * The timestamp when the event was created
 * @member {Number} created
 */
Message.prototype['created'] = undefined;

/**
 * The from email of the message
 * @member {String} from_email
 */
Message.prototype['from_email'] = undefined;

/**
 * The from name of the message
 * @member {String} from_name
 */
Message.prototype['from_name'] = undefined;

/**
 * The type of the message
 * @member {module:model/MessageType} message_type
 */
Message.prototype['message_type'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Message.prototype['metadata'] = undefined;

/**
 * The object type. Always \"message\"
 * @member {String} object
 * @default 'message'
 */
Message.prototype['object'] = 'message';

/**
 * The reply to email of the message
 * @member {String} reply_to_email
 */
Message.prototype['reply_to_email'] = undefined;

/**
 * The status of the message
 * @member {module:model/MessageStatus} status
 */
Message.prototype['status'] = undefined;

/**
 * The to contact of the message
 * @member {String} to_contact
 */
Message.prototype['to_contact'] = undefined;

/**
 * The to email of the message
 * @member {String} to_email
 */
Message.prototype['to_email'] = undefined;

/**
 * The to name of the message
 * @member {String} to_name
 */
Message.prototype['to_name'] = undefined;

/**
 * The timestamp when the event was last updated
 * @member {Number} updated
 */
Message.prototype['updated'] = undefined;






export default Message;

