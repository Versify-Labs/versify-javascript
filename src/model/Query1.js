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
import Operator from './Operator';
import Query from './Query';
import QueryValue from './QueryValue';

/**
 * The Query1 model module.
 * @module model/Query1
 * @version 1.0.0
 */
class Query1 {
    /**
     * Constructs a new <code>Query1</code>.
     * The search query
     * @alias module:model/Query1
     * @implements module:model/Query
     * @param operator {module:model/Operator} The operator to use
     * @param value {module:model/QueryValue} 
     */
    constructor(operator, value) { 
        Query.initialize(this, operator, value);
        Query1.initialize(this, operator, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operator, value) { 
        obj['operator'] = operator;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Query1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Query1} obj Optional instance to populate.
     * @return {module:model/Query1} The populated <code>Query1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Query1();
            Query.constructFromObject(data, obj);

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], Operator);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = QueryValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Query1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Query1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Query1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // validate the optional field `operator`
        if (data['operator']) { // data not null
          Operator.validateJSON(data['operator']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          QueryValue.validateJSON(data['value']);
        }

        return true;
    }


}

Query1.RequiredProperties = ["operator", "value"];

/**
 * The field to query the data on
 * @member {String} field
 */
Query1.prototype['field'] = undefined;

/**
 * The operator to use
 * @member {module:model/Operator} operator
 */
Query1.prototype['operator'] = undefined;

/**
 * @member {module:model/QueryValue} value
 */
Query1.prototype['value'] = undefined;


// Implement Query interface:
/**
 * The field to query the data on
 * @member {String} field
 */
Query.prototype['field'] = undefined;
/**
 * The operator to use
 * @member {module:model/Operator} operator
 */
Query.prototype['operator'] = undefined;
/**
 * @member {module:model/QueryValue} value
 */
Query.prototype['value'] = undefined;




export default Query1;
