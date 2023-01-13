/**
 * Versify API
 * Versify API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ApiDeleteResponse {
    /**
    * Whether the item has been deleted
    */
    'deleted'?: boolean;
    /**
    * Unique identifier for the item
    */
    'id': string;
    /**
    * The object type
    */
    'object'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiDeleteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
