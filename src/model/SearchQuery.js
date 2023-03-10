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
import Query1 from './Query1';

/**
 * The SearchQuery model module.
 * @module model/SearchQuery
 * @version 1.0.0
 */
class SearchQuery {
    /**
     * Constructs a new <code>SearchQuery</code>.
     * @alias module:model/SearchQuery
     * @param query {module:model/Query1} 
     */
    constructor(query) { 
        
        SearchQuery.initialize(this, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query) { 
        obj['query'] = query;
    }

    /**
     * Constructs a <code>SearchQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchQuery} obj Optional instance to populate.
     * @return {module:model/SearchQuery} The populated <code>SearchQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchQuery();

            if (data.hasOwnProperty('page_num')) {
                obj['page_num'] = ApiClient.convertToType(data['page_num'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = Query1.constructFromObject(data['query']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchQuery</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchQuery</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchQuery.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `query`
        if (data['query']) { // data not null
          Query1.validateJSON(data['query']);
        }

        return true;
    }


}

SearchQuery.RequiredProperties = ["query"];

/**
 * The page number
 * @member {Number} page_num
 * @default 1
 */
SearchQuery.prototype['page_num'] = 1;

/**
 * The number of items per page
 * @member {Number} page_size
 * @default 10
 */
SearchQuery.prototype['page_size'] = 10;

/**
 * @member {module:model/Query1} query
 */
SearchQuery.prototype['query'] = undefined;






export default SearchQuery;

