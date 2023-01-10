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

/**
 * The IdentityProvider model module.
 * @module model/IdentityProvider
 * @version 1.0.0
 */
class IdentityProvider {
    /**
     * Constructs a new <code>IdentityProvider</code>.
     * An identity provider for a user.
     * @alias module:model/IdentityProvider
     * @param providerSubject {String} The subject of the identity provider
     * @param providerType {String} The type of the identity provider
     */
    constructor(providerSubject, providerType) { 
        
        IdentityProvider.initialize(this, providerSubject, providerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, providerSubject, providerType) { 
        obj['provider_subject'] = providerSubject;
        obj['provider_type'] = providerType;
    }

    /**
     * Constructs a <code>IdentityProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityProvider} obj Optional instance to populate.
     * @return {module:model/IdentityProvider} The populated <code>IdentityProvider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityProvider();

            if (data.hasOwnProperty('provider_subject')) {
                obj['provider_subject'] = ApiClient.convertToType(data['provider_subject'], 'String');
            }
            if (data.hasOwnProperty('provider_type')) {
                obj['provider_type'] = ApiClient.convertToType(data['provider_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentityProvider</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProvider</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IdentityProvider.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['provider_subject'] && !(typeof data['provider_subject'] === 'string' || data['provider_subject'] instanceof String)) {
            throw new Error("Expected the field `provider_subject` to be a primitive type in the JSON string but got " + data['provider_subject']);
        }
        // ensure the json data is a string
        if (data['provider_type'] && !(typeof data['provider_type'] === 'string' || data['provider_type'] instanceof String)) {
            throw new Error("Expected the field `provider_type` to be a primitive type in the JSON string but got " + data['provider_type']);
        }

        return true;
    }


}

IdentityProvider.RequiredProperties = ["provider_subject", "provider_type"];

/**
 * The subject of the identity provider
 * @member {String} provider_subject
 */
IdentityProvider.prototype['provider_subject'] = undefined;

/**
 * The type of the identity provider
 * @member {String} provider_type
 */
IdentityProvider.prototype['provider_type'] = undefined;






export default IdentityProvider;
