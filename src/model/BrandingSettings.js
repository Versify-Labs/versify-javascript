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
import Brand from './Brand';
import Query from './Query';
import WalletPosition from './WalletPosition';

/**
 * The BrandingSettings model module.
 * @module model/BrandingSettings
 * @version 1.0.0
 */
class BrandingSettings {
    /**
     * Constructs a new <code>BrandingSettings</code>.
     * The branding settings of the account
     * @alias module:model/BrandingSettings
     * @implements module:model/Brand
     */
    constructor() { 
        Brand.initialize(this);
        BrandingSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrandingSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrandingSettings} obj Optional instance to populate.
     * @return {module:model/BrandingSettings} The populated <code>BrandingSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingSettings();
            Brand.constructFromObject(data, obj);

            if (data.hasOwnProperty('action_color')) {
                obj['action_color'] = ApiClient.convertToType(data['action_color'], 'String');
            }
            if (data.hasOwnProperty('background_color')) {
                obj['background_color'] = ApiClient.convertToType(data['background_color'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('primary_color')) {
                obj['primary_color'] = ApiClient.convertToType(data['primary_color'], 'String');
            }
            if (data.hasOwnProperty('secondary_color')) {
                obj['secondary_color'] = ApiClient.convertToType(data['secondary_color'], 'String');
            }
            if (data.hasOwnProperty('tertiary_color')) {
                obj['tertiary_color'] = ApiClient.convertToType(data['tertiary_color'], 'String');
            }
            if (data.hasOwnProperty('wallet_action_color')) {
                obj['wallet_action_color'] = ApiClient.convertToType(data['wallet_action_color'], 'String');
            }
            if (data.hasOwnProperty('wallet_background_color')) {
                obj['wallet_background_color'] = ApiClient.convertToType(data['wallet_background_color'], 'String');
            }
            if (data.hasOwnProperty('wallet_display_filters')) {
                obj['wallet_display_filters'] = ApiClient.convertToType(data['wallet_display_filters'], [Query]);
            }
            if (data.hasOwnProperty('wallet_position')) {
                obj['wallet_position'] = ApiClient.convertToType(data['wallet_position'], WalletPosition);
            }
            if (data.hasOwnProperty('wallet_welcome_message')) {
                obj['wallet_welcome_message'] = ApiClient.convertToType(data['wallet_welcome_message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['action_color'] && !(typeof data['action_color'] === 'string' || data['action_color'] instanceof String)) {
            throw new Error("Expected the field `action_color` to be a primitive type in the JSON string but got " + data['action_color']);
        }
        // ensure the json data is a string
        if (data['background_color'] && !(typeof data['background_color'] === 'string' || data['background_color'] instanceof String)) {
            throw new Error("Expected the field `background_color` to be a primitive type in the JSON string but got " + data['background_color']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['primary_color'] && !(typeof data['primary_color'] === 'string' || data['primary_color'] instanceof String)) {
            throw new Error("Expected the field `primary_color` to be a primitive type in the JSON string but got " + data['primary_color']);
        }
        // ensure the json data is a string
        if (data['secondary_color'] && !(typeof data['secondary_color'] === 'string' || data['secondary_color'] instanceof String)) {
            throw new Error("Expected the field `secondary_color` to be a primitive type in the JSON string but got " + data['secondary_color']);
        }
        // ensure the json data is a string
        if (data['tertiary_color'] && !(typeof data['tertiary_color'] === 'string' || data['tertiary_color'] instanceof String)) {
            throw new Error("Expected the field `tertiary_color` to be a primitive type in the JSON string but got " + data['tertiary_color']);
        }
        // ensure the json data is a string
        if (data['wallet_action_color'] && !(typeof data['wallet_action_color'] === 'string' || data['wallet_action_color'] instanceof String)) {
            throw new Error("Expected the field `wallet_action_color` to be a primitive type in the JSON string but got " + data['wallet_action_color']);
        }
        // ensure the json data is a string
        if (data['wallet_background_color'] && !(typeof data['wallet_background_color'] === 'string' || data['wallet_background_color'] instanceof String)) {
            throw new Error("Expected the field `wallet_background_color` to be a primitive type in the JSON string but got " + data['wallet_background_color']);
        }
        if (data['wallet_display_filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['wallet_display_filters'])) {
                throw new Error("Expected the field `wallet_display_filters` to be an array in the JSON data but got " + data['wallet_display_filters']);
            }
            // validate the optional field `wallet_display_filters` (array)
            for (const item of data['wallet_display_filters']) {
                Query.validateJsonObject(item);
            };
        }
        // validate the optional field `wallet_position`
        if (data['wallet_position']) { // data not null
          WalletPosition.validateJSON(data['wallet_position']);
        }
        // ensure the json data is a string
        if (data['wallet_welcome_message'] && !(typeof data['wallet_welcome_message'] === 'string' || data['wallet_welcome_message'] instanceof String)) {
            throw new Error("Expected the field `wallet_welcome_message` to be a primitive type in the JSON string but got " + data['wallet_welcome_message']);
        }

        return true;
    }


}



/**
 * The action color of the brand
 * @member {String} action_color
 * @default '#000000'
 */
BrandingSettings.prototype['action_color'] = '#000000';

/**
 * The background color of the brand
 * @member {String} background_color
 * @default '#000000'
 */
BrandingSettings.prototype['background_color'] = '#000000';

/**
 * The URL of the brand's logo
 * @member {String} logo
 */
BrandingSettings.prototype['logo'] = undefined;

/**
 * The primary color of the brand
 * @member {String} primary_color
 * @default '#000000'
 */
BrandingSettings.prototype['primary_color'] = '#000000';

/**
 * The secondary color of the brand
 * @member {String} secondary_color
 * @default '#000000'
 */
BrandingSettings.prototype['secondary_color'] = '#000000';

/**
 * The tertiary color of the brand
 * @member {String} tertiary_color
 * @default '#000000'
 */
BrandingSettings.prototype['tertiary_color'] = '#000000';

/**
 * The wallet action color of the brand
 * @member {String} wallet_action_color
 * @default '#000000'
 */
BrandingSettings.prototype['wallet_action_color'] = '#000000';

/**
 * The wallet background color of the brand
 * @member {String} wallet_background_color
 * @default '#000000'
 */
BrandingSettings.prototype['wallet_background_color'] = '#000000';

/**
 * The wallet display filters of the brand
 * @member {Array.<module:model/Query>} wallet_display_filters
 */
BrandingSettings.prototype['wallet_display_filters'] = undefined;

/**
 * The wallet position of the brand
 * @member {module:model/WalletPosition} wallet_position
 */
BrandingSettings.prototype['wallet_position'] = undefined;

/**
 * The wallet welcome message of the brand
 * @member {String} wallet_welcome_message
 * @default 'Welcome'
 */
BrandingSettings.prototype['wallet_welcome_message'] = 'Welcome';


// Implement Brand interface:
/**
 * The action color of the brand
 * @member {String} action_color
 * @default '#000000'
 */
Brand.prototype['action_color'] = '#000000';
/**
 * The background color of the brand
 * @member {String} background_color
 * @default '#000000'
 */
Brand.prototype['background_color'] = '#000000';
/**
 * The URL of the brand's logo
 * @member {String} logo
 */
Brand.prototype['logo'] = undefined;
/**
 * The primary color of the brand
 * @member {String} primary_color
 * @default '#000000'
 */
Brand.prototype['primary_color'] = '#000000';
/**
 * The secondary color of the brand
 * @member {String} secondary_color
 * @default '#000000'
 */
Brand.prototype['secondary_color'] = '#000000';
/**
 * The tertiary color of the brand
 * @member {String} tertiary_color
 * @default '#000000'
 */
Brand.prototype['tertiary_color'] = '#000000';
/**
 * The wallet action color of the brand
 * @member {String} wallet_action_color
 * @default '#000000'
 */
Brand.prototype['wallet_action_color'] = '#000000';
/**
 * The wallet background color of the brand
 * @member {String} wallet_background_color
 * @default '#000000'
 */
Brand.prototype['wallet_background_color'] = '#000000';
/**
 * The wallet display filters of the brand
 * @member {Array.<module:model/Query>} wallet_display_filters
 */
Brand.prototype['wallet_display_filters'] = undefined;
/**
 * The wallet position of the brand
 * @member {module:model/WalletPosition} wallet_position
 */
Brand.prototype['wallet_position'] = undefined;
/**
 * The wallet welcome message of the brand
 * @member {String} wallet_welcome_message
 * @default 'Welcome'
 */
Brand.prototype['wallet_welcome_message'] = 'Welcome';




export default BrandingSettings;

