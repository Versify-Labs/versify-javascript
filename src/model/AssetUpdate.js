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

/**
 * The AssetUpdate model module.
 * @module model/AssetUpdate
 * @version 1.0.0
 */
class AssetUpdate {
    /**
     * Constructs a new <code>AssetUpdate</code>.
     * Base Serializer class.  Almost ALWAYS should be used in conjunction with &#x60;fastapi_contrib.serializers.openapi.patch&#x60; decorator to correctly handle inherited model fields and OpenAPI Schema generation with &#x60;response_model&#x60;.  Responsible for sanitizing data &amp; converting JSON to &amp; from MongoDBModel.  Contains supplemental function, related to MongoDBModel, mostly proxied to corresponding functions inside model (ex. save, update)  Heavily uses &#x60;Meta&#x60; class for fine-tuning input &amp; output. Main fields are:     * exclude - set of fields that are excluded when serializing to dict                 and sanitizing list of dicts     * model - class of the MongoDBModel to use, inherits fields from it     * write_only_fields - set of fields that can be accepted in request,                           but excluded when serializing to dict     * read_only_fields - set of fields that cannot be accepted in request,                           but included when serializing to dict  Example usage:  .. code-block:: python      app &#x3D; FastAPI()       class SomeModel(MongoDBModel):         field1: str       @openapi.patch     class SomeSerializer(Serializer):         read_only1: str &#x3D; \&quot;const\&quot;         write_only2: int         not_visible: str &#x3D; \&quot;42\&quot;          class Meta:             model &#x3D; SomeModel             exclude &#x3D; {\&quot;not_visible\&quot;}             write_only_fields &#x3D; {\&quot;write_only2\&quot;}             read_only_fields &#x3D; {\&quot;read_only1\&quot;}       @app.get(\&quot;/\&quot;, response_model&#x3D;SomeSerializer.response_model)     async def root(serializer: SomeSerializer):         model_instance &#x3D; await serializer.save()         return model_instance.dict()  POST-ing to this route following JSON:  .. code-block:: json      {\&quot;read_only1\&quot;: \&quot;a\&quot;, \&quot;write_only2\&quot;: 123, \&quot;field1\&quot;: \&quot;b\&quot;}  Should return following response:  .. code-block:: json      {\&quot;id\&quot;: 1, \&quot;field1\&quot;: \&quot;b\&quot;, \&quot;read_only1\&quot;: \&quot;const\&quot;}
     * @alias module:model/AssetUpdate
     * @param description {String} 
     * @param image {String} 
     * @param name {String} 
     */
    constructor(description, image, name) { 
        
        AssetUpdate.initialize(this, description, image, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, image, name) { 
        obj['description'] = description;
        obj['image'] = image;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AssetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetUpdate} obj Optional instance to populate.
     * @return {module:model/AssetUpdate} The populated <code>AssetUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetUpdate();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
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
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], AssetStatus);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssetUpdate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        // ensure the json data is an array
        if (!Array.isArray(data['properties'])) {
            throw new Error("Expected the field `properties` to be an array in the JSON data but got " + data['properties']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          AssetStatus.validateJSON(data['status']);
        }

        return true;
    }


}

AssetUpdate.RequiredProperties = ["description", "image", "name"];

/**
 * @member {Boolean} active
 * @default true
 */
AssetUpdate.prototype['active'] = true;

/**
 * @member {Number} created
 */
AssetUpdate.prototype['created'] = undefined;

/**
 * @member {Boolean} default
 * @default false
 */
AssetUpdate.prototype['default'] = false;

/**
 * @member {String} description
 */
AssetUpdate.prototype['description'] = undefined;

/**
 * @member {String} image
 */
AssetUpdate.prototype['image'] = undefined;

/**
 * @member {Object} metadata
 */
AssetUpdate.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
AssetUpdate.prototype['name'] = undefined;

/**
 * @member {Array.<Object>} properties
 */
AssetUpdate.prototype['properties'] = undefined;

/**
 * @member {module:model/AssetStatus} status
 */
AssetUpdate.prototype['status'] = undefined;

/**
 * @member {Number} updated
 */
AssetUpdate.prototype['updated'] = undefined;






export default AssetUpdate;

