# VersifyApi.RewardsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRewardV2RewardsPost**](RewardsApi.md#createRewardV2RewardsPost) | **POST** /v2/rewards | Create reward
[**createRewardV2RewardsPost_0**](RewardsApi.md#createRewardV2RewardsPost_0) | **POST** /v2/rewards | Create reward
[**deleteRewardV2RewardsRewardIdDelete**](RewardsApi.md#deleteRewardV2RewardsRewardIdDelete) | **DELETE** /v2/rewards/{reward_id} | Delete reward
[**deleteRewardV2RewardsRewardIdDelete_0**](RewardsApi.md#deleteRewardV2RewardsRewardIdDelete_0) | **DELETE** /v2/rewards/{reward_id} | Delete reward
[**getRewardV2RewardsRewardIdGet**](RewardsApi.md#getRewardV2RewardsRewardIdGet) | **GET** /v2/rewards/{reward_id} | Get reward
[**getRewardV2RewardsRewardIdGet_0**](RewardsApi.md#getRewardV2RewardsRewardIdGet_0) | **GET** /v2/rewards/{reward_id} | Get reward
[**listRewardsV2RewardsGet**](RewardsApi.md#listRewardsV2RewardsGet) | **GET** /v2/rewards | List rewards
[**listRewardsV2RewardsGet_0**](RewardsApi.md#listRewardsV2RewardsGet_0) | **GET** /v2/rewards | List rewards
[**searchRewardsV2RewardsSearchPost**](RewardsApi.md#searchRewardsV2RewardsSearchPost) | **POST** /v2/rewards/search | Search rewards
[**searchRewardsV2RewardsSearchPost_0**](RewardsApi.md#searchRewardsV2RewardsSearchPost_0) | **POST** /v2/rewards/search | Search rewards
[**updateRewardV2RewardsRewardIdPut**](RewardsApi.md#updateRewardV2RewardsRewardIdPut) | **PUT** /v2/rewards/{reward_id} | Update reward
[**updateRewardV2RewardsRewardIdPut_0**](RewardsApi.md#updateRewardV2RewardsRewardIdPut_0) | **PUT** /v2/rewards/{reward_id} | Update reward



## createRewardV2RewardsPost

> Reward createRewardV2RewardsPost(asset11, opts)

Create reward

Create a reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let asset11 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset11 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createRewardV2RewardsPost(asset11, opts, (error, data, response) => {
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
 **asset11** | [**Asset11**](Asset11.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRewardV2RewardsPost_0

> Reward createRewardV2RewardsPost_0(asset11, opts)

Create reward

Create a reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let asset11 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset11 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createRewardV2RewardsPost_0(asset11, opts, (error, data, response) => {
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
 **asset11** | [**Asset11**](Asset11.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRewardV2RewardsRewardIdDelete

> ApiDeleteResponse deleteRewardV2RewardsRewardIdDelete(rewardId, opts)

Delete reward

Delete an reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteRewardV2RewardsRewardIdDelete(rewardId, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRewardV2RewardsRewardIdDelete_0

> ApiDeleteResponse deleteRewardV2RewardsRewardIdDelete_0(rewardId, opts)

Delete reward

Delete an reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteRewardV2RewardsRewardIdDelete_0(rewardId, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRewardV2RewardsRewardIdGet

> Reward getRewardV2RewardsRewardIdGet(rewardId, opts)

Get reward

Get a reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getRewardV2RewardsRewardIdGet(rewardId, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRewardV2RewardsRewardIdGet_0

> Reward getRewardV2RewardsRewardIdGet_0(rewardId, opts)

Get reward

Get a reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getRewardV2RewardsRewardIdGet_0(rewardId, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRewardsV2RewardsGet

> ApiListResponse listRewardsV2RewardsGet(opts)

List rewards

List rewards with optional filters and pagination parameters

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listRewardsV2RewardsGet(opts, (error, data, response) => {
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
 **pageNum** | **Number**| Page number | [optional] [default to 1]
 **pageSize** | **Number**| Page size | [optional] [default to 10]
 **collection** | **String**| Collection ID | [optional] 
 **status** | **String**| Collection status | [optional] 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiListResponse**](ApiListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRewardsV2RewardsGet_0

> ApiListResponse listRewardsV2RewardsGet_0(opts)

List rewards

List rewards with optional filters and pagination parameters

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listRewardsV2RewardsGet_0(opts, (error, data, response) => {
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
 **pageNum** | **Number**| Page number | [optional] [default to 1]
 **pageSize** | **Number**| Page size | [optional] [default to 10]
 **collection** | **String**| Collection ID | [optional] 
 **status** | **String**| Collection status | [optional] 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiListResponse**](ApiListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchRewardsV2RewardsSearchPost

> ApiSearchResponse searchRewardsV2RewardsSearchPost(searchContacts, opts)

Search rewards

Search rewards with query string

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchRewardsV2RewardsSearchPost(searchContacts, opts, (error, data, response) => {
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
 **searchContacts** | [**SearchContacts**](SearchContacts.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiSearchResponse**](ApiSearchResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchRewardsV2RewardsSearchPost_0

> ApiSearchResponse searchRewardsV2RewardsSearchPost_0(searchContacts, opts)

Search rewards

Search rewards with query string

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchRewardsV2RewardsSearchPost_0(searchContacts, opts, (error, data, response) => {
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
 **searchContacts** | [**SearchContacts**](SearchContacts.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiSearchResponse**](ApiSearchResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRewardV2RewardsRewardIdPut

> Reward updateRewardV2RewardsRewardIdPut(rewardId, contact11, opts)

Update reward

Update an reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let contact11 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact11 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateRewardV2RewardsRewardIdPut(rewardId, contact11, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **contact11** | [**Contact11**](Contact11.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRewardV2RewardsRewardIdPut_0

> Reward updateRewardV2RewardsRewardIdPut_0(rewardId, contact11, opts)

Update reward

Update an reward

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.RewardsApi();
let rewardId = con_12121231231231321; // String | Unique identifier of the contact
let contact11 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact11 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateRewardV2RewardsRewardIdPut_0(rewardId, contact11, opts, (error, data, response) => {
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
 **rewardId** | **String**| Unique identifier of the contact | 
 **contact11** | [**Contact11**](Contact11.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Reward**](Reward.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

