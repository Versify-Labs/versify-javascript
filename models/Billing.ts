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

import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { SubscriptionStatus } from '../models/SubscriptionStatus';
import { HttpFile } from '../http/http';

/**
* Billing information for an account.
*/
export class Billing {
    /**
    * The Stripe customer ID
    */
    'stripeCustomerId'?: string;
    /**
    * The subscription plan
    */
    'subscriptionPlan'?: SubscriptionPlan;
    /**
    * The subscription status
    */
    'subscriptionStatus'?: SubscriptionStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stripeCustomerId",
            "baseName": "stripe_customer_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlan",
            "baseName": "subscription_plan",
            "type": "SubscriptionPlan",
            "format": ""
        },
        {
            "name": "subscriptionStatus",
            "baseName": "subscription_status",
            "type": "SubscriptionStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Billing.attributeTypeMap;
    }

    public constructor() {
    }
}
