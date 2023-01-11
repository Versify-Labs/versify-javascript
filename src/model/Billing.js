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
import SubscriptionPlan from './SubscriptionPlan';
import SubscriptionStatus from './SubscriptionStatus';

/**
 * The Billing model module.
 * @module model/Billing
 * @version 1.0.0
 */
class Billing {
    /**
     * Constructs a new <code>Billing</code>.
     * Billing information for an account.
     * @alias module:model/Billing
     */
    constructor() { 
        
        Billing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Billing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Billing} obj Optional instance to populate.
     * @return {module:model/Billing} The populated <code>Billing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Billing();

            if (data.hasOwnProperty('stripe_customer_id')) {
                obj['stripe_customer_id'] = ApiClient.convertToType(data['stripe_customer_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan')) {
                obj['subscription_plan'] = ApiClient.convertToType(data['subscription_plan'], SubscriptionPlan);
            }
            if (data.hasOwnProperty('subscription_status')) {
                obj['subscription_status'] = ApiClient.convertToType(data['subscription_status'], SubscriptionStatus);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Billing</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Billing</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['stripe_customer_id'] && !(typeof data['stripe_customer_id'] === 'string' || data['stripe_customer_id'] instanceof String)) {
            throw new Error("Expected the field `stripe_customer_id` to be a primitive type in the JSON string but got " + data['stripe_customer_id']);
        }
        // validate the optional field `subscription_plan`
        if (data['subscription_plan']) { // data not null
          SubscriptionPlan.validateJSON(data['subscription_plan']);
        }
        // validate the optional field `subscription_status`
        if (data['subscription_status']) { // data not null
          SubscriptionStatus.validateJSON(data['subscription_status']);
        }

        return true;
    }


}



/**
 * The Stripe customer ID
 * @member {String} stripe_customer_id
 */
Billing.prototype['stripe_customer_id'] = undefined;

/**
 * The subscription plan
 * @member {module:model/SubscriptionPlan} subscription_plan
 */
Billing.prototype['subscription_plan'] = undefined;

/**
 * The subscription status
 * @member {module:model/SubscriptionStatus} subscription_status
 */
Billing.prototype['subscription_status'] = undefined;






export default Billing;

