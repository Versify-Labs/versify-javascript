import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Create an account
     * Create an account
     * @param account1 
     */
    public createAccountV2AccountsPost(account1: Account1, _options?: Configuration): Observable<Account> {
        const requestContextPromise = this.requestFactory.createAccountV2AccountsPost(account1, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccountV2AccountsPost(rsp)));
            }));
    }

    /**
     * Delete an account by ID
     * Delete an account
     * @param accountId Unique identifier of the account
     */
    public deleteAccountV2AccountsAccountIdDelete(accountId: string, _options?: Configuration): Observable<ApiDeleteResponse> {
        const requestContextPromise = this.requestFactory.deleteAccountV2AccountsAccountIdDelete(accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAccountV2AccountsAccountIdDelete(rsp)));
            }));
    }

    /**
     * Get account metrics by ID
     * Get account metrics
     * @param accountId Unique identifier of the account
     * @param objectTypes Object types
     */
    public getAccountMetricsV2AccountsAccountIdMetricsGet(accountId: string, objectTypes?: Array<string>, _options?: Configuration): Observable<AccountMetrics> {
        const requestContextPromise = this.requestFactory.getAccountMetricsV2AccountsAccountIdMetricsGet(accountId, objectTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountMetricsV2AccountsAccountIdMetricsGet(rsp)));
            }));
    }

    /**
     * Get an account by ID
     * Get an account
     * @param accountId Unique identifier of the account
     */
    public getAccountV2AccountsAccountIdGet(accountId: string, _options?: Configuration): Observable<Account> {
        const requestContextPromise = this.requestFactory.getAccountV2AccountsAccountIdGet(accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountV2AccountsAccountIdGet(rsp)));
            }));
    }

    /**
     * List accounts with optional filters and pagination parameters
     * List accounts
     */
    public listAccountsV2AccountsGet(_options?: Configuration): Observable<ApiListResponse> {
        const requestContextPromise = this.requestFactory.listAccountsV2AccountsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAccountsV2AccountsGet(rsp)));
            }));
    }

    /**
     * Update an account by ID
     * Update an account
     * @param accountId Unique identifier of the account
     * @param account2 
     */
    public updateAccountV2AccountsAccountIdPut(accountId: string, account2: Account2, _options?: Configuration): Observable<Account> {
        const requestContextPromise = this.requestFactory.updateAccountV2AccountsAccountIdPut(accountId, account2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAccountV2AccountsAccountIdPut(rsp)));
            }));
    }

}
