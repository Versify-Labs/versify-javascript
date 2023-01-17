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
import Query from './Query';
import TriggerScheduleConfiguration from './TriggerScheduleConfiguration';

/**
 * The TriggerConfig model module.
 * @module model/TriggerConfig
 * @version 1.0.0
 */
class TriggerConfig {
    /**
     * Constructs a new <code>TriggerConfig</code>.
     * A trigger configuration.
     * @alias module:model/TriggerConfig
     * @param detailType {String} The detail type of the trigger
     * @param source {String} The source of the trigger
     */
    constructor(detailType, source) { 
        
        TriggerConfig.initialize(this, detailType, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, detailType, source) { 
        obj['detail_type'] = detailType;
        obj['source'] = source;
    }

    /**
     * Constructs a <code>TriggerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerConfig} obj Optional instance to populate.
     * @return {module:model/TriggerConfig} The populated <code>TriggerConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerConfig();

            if (data.hasOwnProperty('detail_filters')) {
                obj['detail_filters'] = ApiClient.convertToType(data['detail_filters'], [Query]);
            }
            if (data.hasOwnProperty('detail_type')) {
                obj['detail_type'] = ApiClient.convertToType(data['detail_type'], 'String');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = TriggerScheduleConfiguration.constructFromObject(data['schedule']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TriggerConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TriggerConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TriggerConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['detail_filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['detail_filters'])) {
                throw new Error("Expected the field `detail_filters` to be an array in the JSON data but got " + data['detail_filters']);
            }
            // validate the optional field `detail_filters` (array)
            for (const item of data['detail_filters']) {
                Query.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['detail_type'] && !(typeof data['detail_type'] === 'string' || data['detail_type'] instanceof String)) {
            throw new Error("Expected the field `detail_type` to be a primitive type in the JSON string but got " + data['detail_type']);
        }
        // validate the optional field `schedule`
        if (data['schedule']) { // data not null
          TriggerScheduleConfiguration.validateJSON(data['schedule']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }

        return true;
    }


}

TriggerConfig.RequiredProperties = ["detail_type", "source"];

/**
 * The detail filters of the trigger
 * @member {Array.<module:model/Query>} detail_filters
 */
TriggerConfig.prototype['detail_filters'] = undefined;

/**
 * The detail type of the trigger
 * @member {String} detail_type
 */
TriggerConfig.prototype['detail_type'] = undefined;

/**
 * @member {module:model/TriggerScheduleConfiguration} schedule
 */
TriggerConfig.prototype['schedule'] = undefined;

/**
 * The source of the trigger
 * @member {String} source
 */
TriggerConfig.prototype['source'] = undefined;






export default TriggerConfig;
