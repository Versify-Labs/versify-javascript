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
import RewardType from './RewardType';

/**
 * The Reward model module.
 * @module model/Reward
 * @version 1.0.0
 */
class Reward {
    /**
     * Constructs a new <code>Reward</code>.
     * A reward document in the database.
     * @alias module:model/Reward
     * @param account {String} The account the reward belongs to
     * @param asset {String} The asset the reward is for
     */
    constructor(account, asset) { 
        
        Reward.initialize(this, account, asset);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, asset) { 
        obj['account'] = account;
        obj['asset'] = asset;
    }

    /**
     * Constructs a <code>Reward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Reward} obj Optional instance to populate.
     * @return {module:model/Reward} The populated <code>Reward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reward();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('asset_quantity')) {
                obj['asset_quantity'] = ApiClient.convertToType(data['asset_quantity'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('reward_type')) {
                obj['reward_type'] = ApiClient.convertToType(data['reward_type'], RewardType);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Reward</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Reward</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Reward.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['asset'] && !(typeof data['asset'] === 'string' || data['asset'] instanceof String)) {
            throw new Error("Expected the field `asset` to be a primitive type in the JSON string but got " + data['asset']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // validate the optional field `reward_type`
        if (data['reward_type']) { // data not null
          RewardType.validateJSON(data['reward_type']);
        }

        return true;
    }


}

Reward.RequiredProperties = ["account", "asset"];

/**
 * Unique identifier for the reward
 * @member {String} _id
 */
Reward.prototype['_id'] = undefined;

/**
 * The account the reward belongs to
 * @member {String} account
 */
Reward.prototype['account'] = undefined;

/**
 * Whether the reward is active
 * @member {Boolean} active
 * @default true
 */
Reward.prototype['active'] = true;

/**
 * The asset the reward is for
 * @member {String} asset
 */
Reward.prototype['asset'] = undefined;

/**
 * The quantity of the asset needed to redeem the reward
 * @member {Number} asset_quantity
 * @default 1
 */
Reward.prototype['asset_quantity'] = 1;

/**
 * The timestamp when the event was created
 * @member {Number} created
 */
Reward.prototype['created'] = undefined;

/**
 * The description of the reward
 * @member {String} description
 * @default ''
 */
Reward.prototype['description'] = '';

/**
 * The image of the reward
 * @member {String} image
 */
Reward.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Reward.prototype['metadata'] = undefined;

/**
 * The name of the reward. This is displayable to the customer.
 * @member {String} name
 * @default 'Reward'
 */
Reward.prototype['name'] = 'Reward';

/**
 * The object type. Always \"reward\"
 * @member {String} object
 * @default 'reward'
 */
Reward.prototype['object'] = 'reward';

/**
 * The type of the reward
 * @member {module:model/RewardType} reward_type
 */
Reward.prototype['reward_type'] = undefined;

/**
 * The timestamp when the event was last updated
 * @member {Number} updated
 */
Reward.prototype['updated'] = undefined;






export default Reward;
