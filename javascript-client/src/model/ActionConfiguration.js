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
import ActionConfig from './ActionConfig';
import Query from './Query';

/**
 * The ActionConfiguration model module.
 * @module model/ActionConfiguration
 * @version 1.0.0
 */
class ActionConfiguration {
    /**
     * Constructs a new <code>ActionConfiguration</code>.
     * The configuration for the action
     * @alias module:model/ActionConfiguration
     * @implements module:model/ActionConfig
     */
    constructor() { 
        ActionConfig.initialize(this);
        ActionConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActionConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionConfiguration} obj Optional instance to populate.
     * @return {module:model/ActionConfiguration} The populated <code>ActionConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionConfiguration();
            ActionConfig.constructFromObject(data, obj);

            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Query]);
            }
            if (data.hasOwnProperty('member')) {
                obj['member'] = ApiClient.convertToType(data['member'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActionConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActionConfiguration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['asset'] && !(typeof data['asset'] === 'string' || data['asset'] instanceof String)) {
            throw new Error("Expected the field `asset` to be a primitive type in the JSON string but got " + data['asset']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        if (data['filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['filters'])) {
                throw new Error("Expected the field `filters` to be an array in the JSON data but got " + data['filters']);
            }
            // validate the optional field `filters` (array)
            for (const item of data['filters']) {
                Query.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['member'] && !(typeof data['member'] === 'string' || data['member'] instanceof String)) {
            throw new Error("Expected the field `member` to be a primitive type in the JSON string but got " + data['member']);
        }
        // ensure the json data is a string
        if (data['message_type'] && !(typeof data['message_type'] === 'string' || data['message_type'] instanceof String)) {
            throw new Error("Expected the field `message_type` to be a primitive type in the JSON string but got " + data['message_type']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }

        return true;
    }


}



/**
 * The asset to send
 * @member {String} asset
 */
ActionConfiguration.prototype['asset'] = undefined;

/**
 * The body of the message
 * @member {String} body
 */
ActionConfiguration.prototype['body'] = undefined;

/**
 * The filters to match
 * @member {Array.<module:model/Query>} filters
 */
ActionConfiguration.prototype['filters'] = undefined;

/**
 * The member to send the message to
 * @member {String} member
 */
ActionConfiguration.prototype['member'] = undefined;

/**
 * The type of the message
 * @member {String} message_type
 */
ActionConfiguration.prototype['message_type'] = undefined;

/**
 * The note to create
 * @member {String} note
 */
ActionConfiguration.prototype['note'] = undefined;

/**
 * The quantity of the reward
 * @member {Number} quantity
 */
ActionConfiguration.prototype['quantity'] = undefined;

/**
 * The number of seconds to wait
 * @member {Number} seconds
 */
ActionConfiguration.prototype['seconds'] = undefined;

/**
 * The subject of the message
 * @member {String} subject
 */
ActionConfiguration.prototype['subject'] = undefined;

/**
 * The tags to add to the contact
 * @member {Array.<String>} tags
 */
ActionConfiguration.prototype['tags'] = undefined;


// Implement ActionConfig interface:
/**
 * The asset to send
 * @member {String} asset
 */
ActionConfig.prototype['asset'] = undefined;
/**
 * The body of the message
 * @member {String} body
 */
ActionConfig.prototype['body'] = undefined;
/**
 * The filters to match
 * @member {Array.<module:model/Query>} filters
 */
ActionConfig.prototype['filters'] = undefined;
/**
 * The member to send the message to
 * @member {String} member
 */
ActionConfig.prototype['member'] = undefined;
/**
 * The type of the message
 * @member {String} message_type
 */
ActionConfig.prototype['message_type'] = undefined;
/**
 * The note to create
 * @member {String} note
 */
ActionConfig.prototype['note'] = undefined;
/**
 * The quantity of the reward
 * @member {Number} quantity
 */
ActionConfig.prototype['quantity'] = undefined;
/**
 * The number of seconds to wait
 * @member {Number} seconds
 */
ActionConfig.prototype['seconds'] = undefined;
/**
 * The subject of the message
 * @member {String} subject
 */
ActionConfig.prototype['subject'] = undefined;
/**
 * The tags to add to the contact
 * @member {Array.<String>} tags
 */
ActionConfig.prototype['tags'] = undefined;




export default ActionConfiguration;

