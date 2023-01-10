# VersifyClient.RedemptionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRedemptionV2RedemptionsPost**](RedemptionsApi.md#createRedemptionV2RedemptionsPost) | **POST** /v2/redemptions | Create redemption
[**createRedemptionV2RedemptionsPost_0**](RedemptionsApi.md#createRedemptionV2RedemptionsPost_0) | **POST** /v2/redemptions | Create redemption
[**deleteRedemptionV2RedemptionsRedemptionIdDelete**](RedemptionsApi.md#deleteRedemptionV2RedemptionsRedemptionIdDelete) | **DELETE** /v2/redemptions/{redemption_id} | Delete redemption
[**deleteRedemptionV2RedemptionsRedemptionIdDelete_0**](RedemptionsApi.md#deleteRedemptionV2RedemptionsRedemptionIdDelete_0) | **DELETE** /v2/redemptions/{redemption_id} | Delete redemption
[**getRedemptionV2RedemptionsRedemptionIdGet**](RedemptionsApi.md#getRedemptionV2RedemptionsRedemptionIdGet) | **GET** /v2/redemptions/{redemption_id} | Get redemption
[**getRedemptionV2RedemptionsRedemptionIdGet_0**](RedemptionsApi.md#getRedemptionV2RedemptionsRedemptionIdGet_0) | **GET** /v2/redemptions/{redemption_id} | Get redemption
[**listRedemptionsV2RedemptionsGet**](RedemptionsApi.md#listRedemptionsV2RedemptionsGet) | **GET** /v2/redemptions | List redemptions
[**listRedemptionsV2RedemptionsGet_0**](RedemptionsApi.md#listRedemptionsV2RedemptionsGet_0) | **GET** /v2/redemptions | List redemptions
[**searchRedemptionsV2RedemptionsSearchPost**](RedemptionsApi.md#searchRedemptionsV2RedemptionsSearchPost) | **POST** /v2/redemptions/search | Search redemptions
[**searchRedemptionsV2RedemptionsSearchPost_0**](RedemptionsApi.md#searchRedemptionsV2RedemptionsSearchPost_0) | **POST** /v2/redemptions/search | Search redemptions
[**updateRedemptionV2RedemptionsRedemptionIdPut**](RedemptionsApi.md#updateRedemptionV2RedemptionsRedemptionIdPut) | **PUT** /v2/redemptions/{redemption_id} | Update redemption
[**updateRedemptionV2RedemptionsRedemptionIdPut_0**](RedemptionsApi.md#updateRedemptionV2RedemptionsRedemptionIdPut_0) | **PUT** /v2/redemptions/{redemption_id} | Update redemption



## createRedemptionV2RedemptionsPost

> Redemption createRedemptionV2RedemptionsPost(asset10, opts)

Create redemption

Create a redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let asset10 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset10 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createRedemptionV2RedemptionsPost(asset10, opts, (error, data, response) => {
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
 **asset10** | [**Asset10**](Asset10.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRedemptionV2RedemptionsPost_0

> Redemption createRedemptionV2RedemptionsPost_0(asset10, opts)

Create redemption

Create a redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let asset10 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset10 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createRedemptionV2RedemptionsPost_0(asset10, opts, (error, data, response) => {
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
 **asset10** | [**Asset10**](Asset10.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRedemptionV2RedemptionsRedemptionIdDelete

> ApiDeleteResponse deleteRedemptionV2RedemptionsRedemptionIdDelete(redemptionId, opts)

Delete redemption

Delete an redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteRedemptionV2RedemptionsRedemptionIdDelete(redemptionId, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRedemptionV2RedemptionsRedemptionIdDelete_0

> ApiDeleteResponse deleteRedemptionV2RedemptionsRedemptionIdDelete_0(redemptionId, opts)

Delete redemption

Delete an redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteRedemptionV2RedemptionsRedemptionIdDelete_0(redemptionId, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedemptionV2RedemptionsRedemptionIdGet

> Redemption getRedemptionV2RedemptionsRedemptionIdGet(redemptionId, opts)

Get redemption

Get a redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getRedemptionV2RedemptionsRedemptionIdGet(redemptionId, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRedemptionV2RedemptionsRedemptionIdGet_0

> Redemption getRedemptionV2RedemptionsRedemptionIdGet_0(redemptionId, opts)

Get redemption

Get a redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getRedemptionV2RedemptionsRedemptionIdGet_0(redemptionId, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRedemptionsV2RedemptionsGet

> ApiListResponse listRedemptionsV2RedemptionsGet(opts)

List redemptions

List redemptions with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listRedemptionsV2RedemptionsGet(opts, (error, data, response) => {
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


## listRedemptionsV2RedemptionsGet_0

> ApiListResponse listRedemptionsV2RedemptionsGet_0(opts)

List redemptions

List redemptions with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listRedemptionsV2RedemptionsGet_0(opts, (error, data, response) => {
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


## searchRedemptionsV2RedemptionsSearchPost

> ApiSearchResponse searchRedemptionsV2RedemptionsSearchPost(searchContacts, opts)

Search redemptions

Search redemptions with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchRedemptionsV2RedemptionsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchRedemptionsV2RedemptionsSearchPost_0

> ApiSearchResponse searchRedemptionsV2RedemptionsSearchPost_0(searchContacts, opts)

Search redemptions

Search redemptions with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchRedemptionsV2RedemptionsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateRedemptionV2RedemptionsRedemptionIdPut

> Redemption updateRedemptionV2RedemptionsRedemptionIdPut(redemptionId, contact10, opts)

Update redemption

Update an redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let contact10 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact10 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateRedemptionV2RedemptionsRedemptionIdPut(redemptionId, contact10, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **contact10** | [**Contact10**](Contact10.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRedemptionV2RedemptionsRedemptionIdPut_0

> Redemption updateRedemptionV2RedemptionsRedemptionIdPut_0(redemptionId, contact10, opts)

Update redemption

Update an redemption

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.RedemptionsApi();
let redemptionId = con_12121231231231321; // String | Unique identifier of the contact
let contact10 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact10 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateRedemptionV2RedemptionsRedemptionIdPut_0(redemptionId, contact10, opts, (error, data, response) => {
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
 **redemptionId** | **String**| Unique identifier of the contact | 
 **contact10** | [**Contact10**](Contact10.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Redemption**](Redemption.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

