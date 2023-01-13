# .AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccountV2AccountsPost**](AccountsApi.md#createAccountV2AccountsPost) | **POST** /v2/accounts | Create an account
[**deleteAccountV2AccountsAccountIdDelete**](AccountsApi.md#deleteAccountV2AccountsAccountIdDelete) | **DELETE** /v2/accounts/{account_id} | Delete an account
[**getAccountMetricsV2AccountsAccountIdMetricsGet**](AccountsApi.md#getAccountMetricsV2AccountsAccountIdMetricsGet) | **GET** /v2/accounts/{account_id}/metrics | Get account metrics
[**getAccountV2AccountsAccountIdGet**](AccountsApi.md#getAccountV2AccountsAccountIdGet) | **GET** /v2/accounts/{account_id} | Get an account
[**listAccountsV2AccountsGet**](AccountsApi.md#listAccountsV2AccountsGet) | **GET** /v2/accounts | List accounts
[**updateAccountV2AccountsAccountIdPut**](AccountsApi.md#updateAccountV2AccountsAccountIdPut) | **PUT** /v2/accounts/{account_id} | Update an account


# **createAccountV2AccountsPost**
> Account createAccountV2AccountsPost(account1)

Create an account

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiCreateAccountV2AccountsPostRequest = {
  // Account1
  account1: null,
};

apiInstance.createAccountV2AccountsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account1** | **Account1**|  |


### Return type

**Account**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created account |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAccountV2AccountsAccountIdDelete**
> ApiDeleteResponse deleteAccountV2AccountsAccountIdDelete()

Delete an account by ID

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiDeleteAccountV2AccountsAccountIdDeleteRequest = {
  // string | Unique identifier of the account
  accountId: "act_2323213123123123",
};

apiInstance.deleteAccountV2AccountsAccountIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | Unique identifier of the account | defaults to undefined


### Return type

**ApiDeleteResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted account |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountMetricsV2AccountsAccountIdMetricsGet**
> AccountMetrics getAccountMetricsV2AccountsAccountIdMetricsGet()

Get account metrics by ID

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountMetricsV2AccountsAccountIdMetricsGetRequest = {
  // string | Unique identifier of the account
  accountId: "act_2323213123123123",
  // Array<string> | Object types (optional)
  objectTypes: [
    "contact",
  ],
};

apiInstance.getAccountMetricsV2AccountsAccountIdMetricsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | Unique identifier of the account | defaults to undefined
 **objectTypes** | **Array&lt;string&gt;** | Object types | (optional) defaults to undefined


### Return type

**AccountMetrics**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAccountV2AccountsAccountIdGet**
> Account getAccountV2AccountsAccountIdGet()

Get an account by ID

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAccountV2AccountsAccountIdGetRequest = {
  // string | Unique identifier of the account
  accountId: "act_2323213123123123",
};

apiInstance.getAccountV2AccountsAccountIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | Unique identifier of the account | defaults to undefined


### Return type

**Account**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAccountsV2AccountsGet**
> ApiListResponse listAccountsV2AccountsGet()

List accounts with optional filters and pagination parameters

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:any = {};

apiInstance.listAccountsV2AccountsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiListResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of accounts |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAccountV2AccountsAccountIdPut**
> Account updateAccountV2AccountsAccountIdPut(account2)

Update an account by ID

### Example


```typescript
import {  } from '@versifylabs/versify-client';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiUpdateAccountV2AccountsAccountIdPutRequest = {
  // string | Unique identifier of the account
  accountId: "act_2323213123123123",
  // Account2
  account2: null,
};

apiInstance.updateAccountV2AccountsAccountIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account2** | **Account2**|  |
 **accountId** | [**string**] | Unique identifier of the account | defaults to undefined


### Return type

**Account**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated account |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


