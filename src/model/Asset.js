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
import AssetStatus from './AssetStatus';
import BlockchainType from './BlockchainType';

/**
 * The Asset model module.
 * @module model/Asset
 * @version 1.0.0
 */
class Asset {
    /**
     * Constructs a new <code>Asset</code>.
     * A asset document in the database.
     * @alias module:model/Asset
     * @param account {String} The account the asset belongs to
     * @param collection {String} The ID of the collection that the asset belongs to
     * @param contractAddress {String} The contract address of the asset
     * @param description {String} The description of the asset
     * @param image {String} The image of the asset
     * @param name {String} The name of the asset. Displayed on third party apps.
     * @param tokenId {String} The token ID of the asset
     */
    constructor(account, collection, contractAddress, description, image, name, tokenId) { 
        
        Asset.initialize(this, account, collection, contractAddress, description, image, name, tokenId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account, collection, contractAddress, description, image, name, tokenId) { 
        obj['account'] = account;
        obj['collection'] = collection;
        obj['contract_address'] = contractAddress;
        obj['description'] = description;
        obj['image'] = image;
        obj['name'] = name;
        obj['token_id'] = tokenId;
    }

    /**
     * Constructs a <code>Asset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset} obj Optional instance to populate.
     * @return {module:model/Asset} The populated <code>Asset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], BlockchainType);
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
            if (data.hasOwnProperty('contract_address')) {
                obj['contract_address'] = ApiClient.convertToType(data['contract_address'], 'String');
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
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], AssetStatus);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Asset</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Asset</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Asset.RequiredProperties) {
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
        // validate the optional field `chain`
        if (data['chain']) { // data not null
          BlockchainType.validateJSON(data['chain']);
        }
        // ensure the json data is a string
        if (data['collection'] && !(typeof data['collection'] === 'string' || data['collection'] instanceof String)) {
            throw new Error("Expected the field `collection` to be a primitive type in the JSON string but got " + data['collection']);
        }
        // ensure the json data is a string
        if (data['contract_address'] && !(typeof data['contract_address'] === 'string' || data['contract_address'] instanceof String)) {
            throw new Error("Expected the field `contract_address` to be a primitive type in the JSON string but got " + data['contract_address']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['properties'])) {
            throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          AssetStatus.validateJSON(data['status']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

Asset.RequiredProperties = ["account", "collection", "contract_address", "description", "image", "name", "token_id"];

/**
 * Unique identifier for the asset
 * @member {String} _id
 */
Asset.prototype['_id'] = undefined;

/**
 * The account the asset belongs to
 * @member {String} account
 */
Asset.prototype['account'] = undefined;

/**
 * The blockchain the asset is on
 * @member {module:model/BlockchainType} chain
 */
Asset.prototype['chain'] = undefined;

/**
 * The ID of the collection that the asset belongs to
 * @member {String} collection
 */
Asset.prototype['collection'] = undefined;

/**
 * The contract address of the asset
 * @member {String} contract_address
 */
Asset.prototype['contract_address'] = undefined;

/**
 * The timestamp when the event was created
 * @member {Number} created
 */
Asset.prototype['created'] = undefined;

/**
 * The description of the asset
 * @member {String} description
 */
Asset.prototype['description'] = undefined;

/**
 * The image of the asset
 * @member {String} image
 */
Asset.prototype['image'] = undefined;

/**
 * Arbitrary metadata associated with the object
 * @member {Object} metadata
 */
Asset.prototype['metadata'] = undefined;

/**
 * The name of the asset. Displayed on third party apps.
 * @member {String} name
 */
Asset.prototype['name'] = undefined;

/**
 * The object type
 * @member {String} object
 * @default 'asset'
 */
Asset.prototype['object'] = 'asset';

/**
 * The properties of the asset. Displayed on third party apps.
 * @member {Array.<Object>} properties
 */
Asset.prototype['properties'] = undefined;

/**
 * The status of the asset
 * @member {module:model/AssetStatus} status
 */
Asset.prototype['status'] = undefined;

/**
 * The token ID of the asset
 * @member {String} token_id
 */
Asset.prototype['token_id'] = undefined;

/**
 * The timestamp when the event was last updated
 * @member {Number} updated
 */
Asset.prototype['updated'] = undefined;






export default Asset;

