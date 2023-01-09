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
import SearchQuery from './SearchQuery';

/**
 * The SearchContacts model module.
 * @module model/SearchContacts
 * @version 1.0.0
 */
class SearchContacts {
    /**
     * Constructs a new <code>SearchContacts</code>.
     * Search contacts
     * @alias module:model/SearchContacts
     * @implements module:model/SearchQuery
     * @param query {String} The search query
     */
    constructor(query) { 
        SearchQuery.initialize(this, query);
        SearchContacts.initialize(this, query);
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
     * Constructs a <code>SearchContacts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchContacts} obj Optional instance to populate.
     * @return {module:model/SearchContacts} The populated <code>SearchContacts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchContacts();
            SearchQuery.constructFromObject(data, obj);

            if (data.hasOwnProperty('page_num')) {
                obj['page_num'] = ApiClient.convertToType(data['page_num'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchContacts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchContacts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchContacts.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}

SearchContacts.RequiredProperties = ["query"];

/**
 * The page number
 * @member {Number} page_num
 * @default 1
 */
SearchContacts.prototype['page_num'] = 1;

/**
 * The number of items per page
 * @member {Number} page_size
 * @default 10
 */
SearchContacts.prototype['page_size'] = 10;

/**
 * The search query
 * @member {String} query
 */
SearchContacts.prototype['query'] = undefined;


// Implement SearchQuery interface:
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
 * The search query
 * @member {String} query
 */
SearchQuery.prototype['query'] = undefined;




export default SearchContacts;

