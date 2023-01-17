# VersifylabsVersifyClient.MintsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMintV2MintsPost**](MintsApi.md#createMintV2MintsPost) | **POST** /v2/mints | Create mint
[**createMintV2MintsPost_0**](MintsApi.md#createMintV2MintsPost_0) | **POST** /v2/mints | Create mint
[**deleteMintV2MintsMintIdDelete**](MintsApi.md#deleteMintV2MintsMintIdDelete) | **DELETE** /v2/mints/{mint_id} | Delete mint
[**deleteMintV2MintsMintIdDelete_0**](MintsApi.md#deleteMintV2MintsMintIdDelete_0) | **DELETE** /v2/mints/{mint_id} | Delete mint
[**getMintV2MintsMintIdGet**](MintsApi.md#getMintV2MintsMintIdGet) | **GET** /v2/mints/{mint_id} | Get mint
[**getMintV2MintsMintIdGet_0**](MintsApi.md#getMintV2MintsMintIdGet_0) | **GET** /v2/mints/{mint_id} | Get mint
[**listMintsV2MintsGet**](MintsApi.md#listMintsV2MintsGet) | **GET** /v2/mints | List mints
[**listMintsV2MintsGet_0**](MintsApi.md#listMintsV2MintsGet_0) | **GET** /v2/mints | List mints
[**searchMintsV2MintsSearchPost**](MintsApi.md#searchMintsV2MintsSearchPost) | **POST** /v2/mints/search | Search mints
[**searchMintsV2MintsSearchPost_0**](MintsApi.md#searchMintsV2MintsSearchPost_0) | **POST** /v2/mints/search | Search mints
[**updateMintV2MintsMintIdPut**](MintsApi.md#updateMintV2MintsMintIdPut) | **PUT** /v2/mints/{mint_id} | Update mint
[**updateMintV2MintsMintIdPut_0**](MintsApi.md#updateMintV2MintsMintIdPut_0) | **PUT** /v2/mints/{mint_id} | Update mint



## createMintV2MintsPost

> Mint createMintV2MintsPost(asset6, opts)

Create mint

Create a mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let asset6 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createMintV2MintsPost(asset6, opts, (error, data, response) => {
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
 **asset6** | [**Asset6**](Asset6.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMintV2MintsPost_0

> Mint createMintV2MintsPost_0(asset6, opts)

Create mint

Create a mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let asset6 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createMintV2MintsPost_0(asset6, opts, (error, data, response) => {
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
 **asset6** | [**Asset6**](Asset6.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMintV2MintsMintIdDelete

> ApiDeleteResponse deleteMintV2MintsMintIdDelete(mintId, opts)

Delete mint

Delete an mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteMintV2MintsMintIdDelete(mintId, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMintV2MintsMintIdDelete_0

> ApiDeleteResponse deleteMintV2MintsMintIdDelete_0(mintId, opts)

Delete mint

Delete an mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteMintV2MintsMintIdDelete_0(mintId, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMintV2MintsMintIdGet

> Mint getMintV2MintsMintIdGet(mintId, opts)

Get mint

Get a mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getMintV2MintsMintIdGet(mintId, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMintV2MintsMintIdGet_0

> Mint getMintV2MintsMintIdGet_0(mintId, opts)

Get mint

Get a mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getMintV2MintsMintIdGet_0(mintId, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMintsV2MintsGet

> ApiListResponse listMintsV2MintsGet(opts)

List mints

List mints with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listMintsV2MintsGet(opts, (error, data, response) => {
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


## listMintsV2MintsGet_0

> ApiListResponse listMintsV2MintsGet_0(opts)

List mints

List mints with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listMintsV2MintsGet_0(opts, (error, data, response) => {
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


## searchMintsV2MintsSearchPost

> ApiSearchResponse searchMintsV2MintsSearchPost(searchContacts, opts)

Search mints

Search mints with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchMintsV2MintsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchMintsV2MintsSearchPost_0

> ApiSearchResponse searchMintsV2MintsSearchPost_0(searchContacts, opts)

Search mints

Search mints with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchMintsV2MintsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateMintV2MintsMintIdPut

> Mint updateMintV2MintsMintIdPut(mintId, contact7, opts)

Update mint

Update an mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let contact7 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateMintV2MintsMintIdPut(mintId, contact7, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **contact7** | [**Contact7**](Contact7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMintV2MintsMintIdPut_0

> Mint updateMintV2MintsMintIdPut_0(mintId, contact7, opts)

Update mint

Update an mint

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.MintsApi();
let mintId = con_12121231231231321; // String | Unique identifier of the contact
let contact7 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateMintV2MintsMintIdPut_0(mintId, contact7, opts, (error, data, response) => {
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
 **mintId** | **String**| Unique identifier of the contact | 
 **contact7** | [**Contact7**](Contact7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Mint**](Mint.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

