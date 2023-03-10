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
import TriggerScheduleConfig from './TriggerScheduleConfig';

/**
 * The TriggerScheduleConfiguration model module.
 * @module model/TriggerScheduleConfiguration
 * @version 1.0.0
 */
class TriggerScheduleConfiguration {
    /**
     * Constructs a new <code>TriggerScheduleConfiguration</code>.
     * The schedule configuration for the trigger
     * @alias module:model/TriggerScheduleConfiguration
     * @implements module:model/TriggerScheduleConfig
     */
    constructor() { 
        TriggerScheduleConfig.initialize(this);
        TriggerScheduleConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerScheduleConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerScheduleConfiguration} obj Optional instance to populate.
     * @return {module:model/TriggerScheduleConfiguration} The populated <code>TriggerScheduleConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerScheduleConfiguration();
            TriggerScheduleConfig.constructFromObject(data, obj);

            if (data.hasOwnProperty('at')) {
                obj['at'] = ApiClient.convertToType(data['at'], 'Number');
            }
            if (data.hasOwnProperty('cron')) {
                obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TriggerScheduleConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TriggerScheduleConfiguration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cron'] && !(typeof data['cron'] === 'string' || data['cron'] instanceof String)) {
            throw new Error("Expected the field `cron` to be a primitive type in the JSON string but got " + data['cron']);
        }
        // ensure the json data is a string
        if (data['rate'] && !(typeof data['rate'] === 'string' || data['rate'] instanceof String)) {
            throw new Error("Expected the field `rate` to be a primitive type in the JSON string but got " + data['rate']);
        }

        return true;
    }


}



/**
 * The timestamp to trigger the event at
 * @member {Number} at
 */
TriggerScheduleConfiguration.prototype['at'] = undefined;

/**
 * The cron expression to trigger the event at
 * @member {String} cron
 */
TriggerScheduleConfiguration.prototype['cron'] = undefined;

/**
 * The timestamp to stop triggering the event at
 * @member {Number} end
 */
TriggerScheduleConfiguration.prototype['end'] = undefined;

/**
 * The rate to trigger the event at
 * @member {String} rate
 */
TriggerScheduleConfiguration.prototype['rate'] = undefined;

/**
 * The timestamp to start triggering the event at
 * @member {Number} start
 */
TriggerScheduleConfiguration.prototype['start'] = undefined;


// Implement TriggerScheduleConfig interface:
/**
 * The timestamp to trigger the event at
 * @member {Number} at
 */
TriggerScheduleConfig.prototype['at'] = undefined;
/**
 * The cron expression to trigger the event at
 * @member {String} cron
 */
TriggerScheduleConfig.prototype['cron'] = undefined;
/**
 * The timestamp to stop triggering the event at
 * @member {Number} end
 */
TriggerScheduleConfig.prototype['end'] = undefined;
/**
 * The rate to trigger the event at
 * @member {String} rate
 */
TriggerScheduleConfig.prototype['rate'] = undefined;
/**
 * The timestamp to start triggering the event at
 * @member {Number} start
 */
TriggerScheduleConfig.prototype['start'] = undefined;




export default TriggerScheduleConfiguration;

