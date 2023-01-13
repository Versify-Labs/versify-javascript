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
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an account
     * Create an account
     * @param account1 
     */
    public createAccountV2AccountsPost(account1: Account1, _options?: Configuration): Promise<Account> {
        const result = this.api.createAccountV2AccountsPost(account1, _options);
        return result.toPromise();
    }

    /**
     * Delete an account by ID
     * Delete an account
     * @param accountId Unique identifier of the account
     */
    public deleteAccountV2AccountsAccountIdDelete(accountId: string, _options?: Configuration): Promise<ApiDeleteResponse> {
        const result = this.api.deleteAccountV2AccountsAccountIdDelete(accountId, _options);
        return result.toPromise();
    }

    /**
     * Get account metrics by ID
     * Get account metrics
     * @param accountId Unique identifier of the account
     * @param objectTypes Object types
     */
    public getAccountMetricsV2AccountsAccountIdMetricsGet(accountId: string, objectTypes?: Array<string>, _options?: Configuration): Promise<AccountMetrics> {
        const result = this.api.getAccountMetricsV2AccountsAccountIdMetricsGet(accountId, objectTypes, _options);
        return result.toPromise();
    }

    /**
     * Get an account by ID
     * Get an account
     * @param accountId Unique identifier of the account
     */
    public getAccountV2AccountsAccountIdGet(accountId: string, _options?: Configuration): Promise<Account> {
        const result = this.api.getAccountV2AccountsAccountIdGet(accountId, _options);
        return result.toPromise();
    }

    /**
     * List accounts with optional filters and pagination parameters
     * List accounts
     */
    public listAccountsV2AccountsGet(_options?: Configuration): Promise<ApiListResponse> {
        const result = this.api.listAccountsV2AccountsGet(_options);
        return result.toPromise();
    }

    /**
     * Update an account by ID
     * Update an account
     * @param accountId Unique identifier of the account
     * @param account2 
     */
    public updateAccountV2AccountsAccountIdPut(accountId: string, account2: Account2, _options?: Configuration): Promise<Account> {
        const result = this.api.updateAccountV2AccountsAccountIdPut(accountId, account2, _options);
        return result.toPromise();
    }


}



