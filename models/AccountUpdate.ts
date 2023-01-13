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

import { BrandSettings } from '../models/BrandSettings';
import { HttpFile } from '../http/http';

/**
* A account update request body.
*/
export class AccountUpdate {
    'brand'?: BrandSettings;
    /**
    * The domain of the account
    */
    'domain'?: string;
    /**
    * Arbitrary metadata associated with the object
    */
    'metadata'?: any;
    /**
    * The name of the account
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "BrandSettings",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
