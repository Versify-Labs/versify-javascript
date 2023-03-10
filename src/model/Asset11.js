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
import RewardCreate from './RewardCreate';
import RewardType from './RewardType';

/**
 * The Asset11 model module.
 * @module model/Asset11
 * @version 1.0.0
 */
class Asset11 {
    /**
     * Constructs a new <code>Asset11</code>.
     * Asset to create
     * @alias module:model/Asset11
     * @implements module:model/RewardCreate
     * @param asset {String} The asset the reward is for
     */
    constructor(asset) { 
        RewardCreate.initialize(this, asset);
        Asset11.initialize(this, asset);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, asset) { 
        obj['asset'] = asset;
    }

    /**
     * Constructs a <code>Asset11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset11} obj Optional instance to populate.
     * @return {module:model/Asset11} The populated <code>Asset11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset11();
            RewardCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('asset_quantity')) {
                obj['asset_quantity'] = ApiClient.convertToType(data['asset_quantity'], 'Number');
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
            if (data.hasOwnProperty('reward_type')) {
                obj['reward_type'] = ApiClient.convertToType(data['reward_type'], RewardType);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Asset11</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Asset11</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Asset11.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        // validate the optional field `reward_type`
        if (data['reward_type']) { // data not null
          RewardType.validateJSON(data['reward_type']);
        }

        return true;
    }


}

Asset11.RequiredProperties = ["asset"];

/**
 * The asset the reward is for
 * @member {String} asset
 */
Asset11.prototype['asset'] = undefined;

/**
 * The quantity of the asset needed to redeem the reward
 * @member {Number} asset_quantity
 * @default 1
 */
Asset11.prototype['asset_quantity'] = 1;

/**
 * The description of the reward
 * @member {String} description
 * @default ''
 */
Asset11.prototype['description'] = '';

/**
 * The image of the reward
 * @member {String} image
 */
Asset11.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Asset11.prototype['metadata'] = undefined;

/**
 * The name of the reward. This is displayable to the customer.
 * @member {String} name
 * @default 'Reward'
 */
Asset11.prototype['name'] = 'Reward';

/**
 * The type of the reward
 * @member {module:model/RewardType} reward_type
 */
Asset11.prototype['reward_type'] = undefined;


// Implement RewardCreate interface:
/**
 * The asset the reward is for
 * @member {String} asset
 */
RewardCreate.prototype['asset'] = undefined;
/**
 * The quantity of the asset needed to redeem the reward
 * @member {Number} asset_quantity
 * @default 1
 */
RewardCreate.prototype['asset_quantity'] = 1;
/**
 * The description of the reward
 * @member {String} description
 * @default ''
 */
RewardCreate.prototype['description'] = '';
/**
 * The image of the reward
 * @member {String} image
 */
RewardCreate.prototype['image'] = undefined;
/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
RewardCreate.prototype['metadata'] = undefined;
/**
 * The name of the reward. This is displayable to the customer.
 * @member {String} name
 * @default 'Reward'
 */
RewardCreate.prototype['name'] = 'Reward';
/**
 * The type of the reward
 * @member {module:model/RewardType} reward_type
 */
RewardCreate.prototype['reward_type'] = undefined;




export default Asset11;

