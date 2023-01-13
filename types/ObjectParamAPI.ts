import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { Account1 } from '../models/Account1';
import { Account2 } from '../models/Account2';
import { AccountCreate } from '../models/AccountCreate';
import { AccountMetrics } from '../models/AccountMetrics';
import { AccountStatus } from '../models/AccountStatus';
import { AccountUpdate } from '../models/AccountUpdate';
import { ApiDeleteResponse } from '../models/ApiDeleteResponse';
import { ApiListResponse } from '../models/ApiListResponse';
import { App } from '../models/App';
import { Billing } from '../models/Billing';
import { BillingSettings } from '../models/BillingSettings';
import { Brand } from '../models/Brand';
import { BrandSettings } from '../models/BrandSettings';
import { BrandingSettings } from '../models/BrandingSettings';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { Operator } from '../models/Operator';
import { Query } from '../models/Query';
import { QueryValue } from '../models/QueryValue';
import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { SubscriptionStatus } from '../models/SubscriptionStatus';
import { TeamMember } from '../models/TeamMember';
import { TeamMemberRole } from '../models/TeamMemberRole';
import { ValidationError } from '../models/ValidationError';
import { WalletPosition } from '../models/WalletPosition';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiCreateAccountV2AccountsPostRequest {
    /**
     * 
     * @type Account1
     * @memberof AccountsApicreateAccountV2AccountsPost
     */
    account1: Account1
}

export interface AccountsApiDeleteAccountV2AccountsAccountIdDeleteRequest {
    /**
     * Unique identifier of the account
     * @type string
     * @memberof AccountsApideleteAccountV2AccountsAccountIdDelete
     */
    accountId: string
}

export interface AccountsApiGetAccountMetricsV2AccountsAccountIdMetricsGetRequest {
    /**
     * Unique identifier of the account
     * @type string
     * @memberof AccountsApigetAccountMetricsV2AccountsAccountIdMetricsGet
     */
    accountId: string
    /**
     * Object types
     * @type Array&lt;string&gt;
     * @memberof AccountsApigetAccountMetricsV2AccountsAccountIdMetricsGet
     */
    objectTypes?: Array<string>
}

export interface AccountsApiGetAccountV2AccountsAccountIdGetRequest {
    /**
     * Unique identifier of the account
     * @type string
     * @memberof AccountsApigetAccountV2AccountsAccountIdGet
     */
    accountId: string
}

export interface AccountsApiListAccountsV2AccountsGetRequest {
}

export interface AccountsApiUpdateAccountV2AccountsAccountIdPutRequest {
    /**
     * Unique identifier of the account
     * @type string
     * @memberof AccountsApiupdateAccountV2AccountsAccountIdPut
     */
    accountId: string
    /**
     * 
     * @type Account2
     * @memberof AccountsApiupdateAccountV2AccountsAccountIdPut
     */
    account2: Account2
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an account
     * Create an account
     * @param param the request object
     */
    public createAccountV2AccountsPost(param: AccountsApiCreateAccountV2AccountsPostRequest, options?: Configuration): Promise<Account> {
        return this.api.createAccountV2AccountsPost(param.account1,  options).toPromise();
    }

    /**
     * Delete an account by ID
     * Delete an account
     * @param param the request object
     */
    public deleteAccountV2AccountsAccountIdDelete(param: AccountsApiDeleteAccountV2AccountsAccountIdDeleteRequest, options?: Configuration): Promise<ApiDeleteResponse> {
        return this.api.deleteAccountV2AccountsAccountIdDelete(param.accountId,  options).toPromise();
    }

    /**
     * Get account metrics by ID
     * Get account metrics
     * @param param the request object
     */
    public getAccountMetricsV2AccountsAccountIdMetricsGet(param: AccountsApiGetAccountMetricsV2AccountsAccountIdMetricsGetRequest, options?: Configuration): Promise<AccountMetrics> {
        return this.api.getAccountMetricsV2AccountsAccountIdMetricsGet(param.accountId, param.objectTypes,  options).toPromise();
    }

    /**
     * Get an account by ID
     * Get an account
     * @param param the request object
     */
    public getAccountV2AccountsAccountIdGet(param: AccountsApiGetAccountV2AccountsAccountIdGetRequest, options?: Configuration): Promise<Account> {
        return this.api.getAccountV2AccountsAccountIdGet(param.accountId,  options).toPromise();
    }

    /**
     * List accounts with optional filters and pagination parameters
     * List accounts
     * @param param the request object
     */
    public listAccountsV2AccountsGet(param: AccountsApiListAccountsV2AccountsGetRequest = {}, options?: Configuration): Promise<ApiListResponse> {
        return this.api.listAccountsV2AccountsGet( options).toPromise();
    }

    /**
     * Update an account by ID
     * Update an account
     * @param param the request object
     */
    public updateAccountV2AccountsAccountIdPut(param: AccountsApiUpdateAccountV2AccountsAccountIdPutRequest, options?: Configuration): Promise<Account> {
        return this.api.updateAccountV2AccountsAccountIdPut(param.accountId, param.account2,  options).toPromise();
    }

}
