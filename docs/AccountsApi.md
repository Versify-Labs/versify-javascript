# VersifylabsVersifyClient.AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccountV2AccountsPost**](AccountsApi.md#createAccountV2AccountsPost) | **POST** /v2/accounts | Create an account
[**deleteAccountV2AccountsAccountIdDelete**](AccountsApi.md#deleteAccountV2AccountsAccountIdDelete) | **DELETE** /v2/accounts/{account_id} | Delete an account
[**getAccountMetricsV2AccountsAccountIdMetricsGet**](AccountsApi.md#getAccountMetricsV2AccountsAccountIdMetricsGet) | **GET** /v2/accounts/{account_id}/metrics | Get account metrics
[**getAccountV2AccountsAccountIdGet**](AccountsApi.md#getAccountV2AccountsAccountIdGet) | **GET** /v2/accounts/{account_id} | Get an account
[**listAccountsV2AccountsGet**](AccountsApi.md#listAccountsV2AccountsGet) | **GET** /v2/accounts | List accounts
[**updateAccountV2AccountsAccountIdPut**](AccountsApi.md#updateAccountV2AccountsAccountIdPut) | **PUT** /v2/accounts/{account_id} | Update an account



## createAccountV2AccountsPost

> Account createAccountV2AccountsPost(account1)

Create an account

Create an account

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
let account1 = {"domain":"acme.com","name":"Acme Corp"}; // Account1 | 
apiInstance.createAccountV2AccountsPost(account1, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account1** | [**Account1**](Account1.md)|  | 

### Return type

[**Account**](Account.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAccountV2AccountsAccountIdDelete

> ApiDeleteResponse deleteAccountV2AccountsAccountIdDelete(accountId)

Delete an account

Delete an account by ID

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
let accountId = act_2323213123123123; // String | Unique identifier of the account
apiInstance.deleteAccountV2AccountsAccountIdDelete(accountId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Unique identifier of the account | 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountMetricsV2AccountsAccountIdMetricsGet

> AccountMetrics getAccountMetricsV2AccountsAccountIdMetricsGet(accountId, opts)

Get account metrics

Get account metrics by ID

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
let accountId = act_2323213123123123; // String | Unique identifier of the account
let opts = {
  'objectTypes': contact // [String] | Object types
};
apiInstance.getAccountMetricsV2AccountsAccountIdMetricsGet(accountId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Unique identifier of the account | 
 **objectTypes** | [**[String]**](String.md)| Object types | [optional] 

### Return type

[**AccountMetrics**](AccountMetrics.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountV2AccountsAccountIdGet

> Account getAccountV2AccountsAccountIdGet(accountId)

Get an account

Get an account by ID

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
let accountId = act_2323213123123123; // String | Unique identifier of the account
apiInstance.getAccountV2AccountsAccountIdGet(accountId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Unique identifier of the account | 

### Return type

[**Account**](Account.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccountsV2AccountsGet

> ApiListResponse listAccountsV2AccountsGet()

List accounts

List accounts with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
apiInstance.listAccountsV2AccountsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiListResponse**](ApiListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAccountV2AccountsAccountIdPut

> Account updateAccountV2AccountsAccountIdPut(accountId, account2)

Update an account

Update an account by ID

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AccountsApi();
let accountId = act_2323213123123123; // String | Unique identifier of the account
let account2 = {"brand":{"primary_color":"#000000","secondary_color":"#FFFFFF"},"domain":"acme.com","name":"Acme"}; // Account2 | 
apiInstance.updateAccountV2AccountsAccountIdPut(accountId, account2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Unique identifier of the account | 
 **account2** | [**Account2**](Account2.md)|  | 

### Return type

[**Account**](Account.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

