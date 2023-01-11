# VersifyClient.AssetsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssetV2AssetsPost**](AssetsApi.md#createAssetV2AssetsPost) | **POST** /v2/assets | Create asset
[**createAssetV2AssetsPost_0**](AssetsApi.md#createAssetV2AssetsPost_0) | **POST** /v2/assets | Create asset
[**deleteAssetV2AssetsAssetIdDelete**](AssetsApi.md#deleteAssetV2AssetsAssetIdDelete) | **DELETE** /v2/assets/{asset_id} | Delete asset
[**deleteAssetV2AssetsAssetIdDelete_0**](AssetsApi.md#deleteAssetV2AssetsAssetIdDelete_0) | **DELETE** /v2/assets/{asset_id} | Delete asset
[**getAssetV2AssetsAssetIdGet**](AssetsApi.md#getAssetV2AssetsAssetIdGet) | **GET** /v2/assets/{asset_id} | Get asset
[**getAssetV2AssetsAssetIdGet_0**](AssetsApi.md#getAssetV2AssetsAssetIdGet_0) | **GET** /v2/assets/{asset_id} | Get asset
[**listAssetsV2AssetsGet**](AssetsApi.md#listAssetsV2AssetsGet) | **GET** /v2/assets | List assets
[**listAssetsV2AssetsGet_0**](AssetsApi.md#listAssetsV2AssetsGet_0) | **GET** /v2/assets | List assets
[**searchAssetsV2AssetsSearchPost**](AssetsApi.md#searchAssetsV2AssetsSearchPost) | **POST** /v2/assets/search | Search assets
[**searchAssetsV2AssetsSearchPost_0**](AssetsApi.md#searchAssetsV2AssetsSearchPost_0) | **POST** /v2/assets/search | Search assets
[**updateAssetV2AssetsAssetIdPut**](AssetsApi.md#updateAssetV2AssetsAssetIdPut) | **PUT** /v2/assets/{asset_id} | Update asset
[**updateAssetV2AssetsAssetIdPut_0**](AssetsApi.md#updateAssetV2AssetsAssetIdPut_0) | **PUT** /v2/assets/{asset_id} | Update asset



## createAssetV2AssetsPost

> Asset createAssetV2AssetsPost(asset1, opts)

Create asset

Create a asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let asset1 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset1 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createAssetV2AssetsPost(asset1, opts, (error, data, response) => {
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
 **asset1** | [**Asset1**](Asset1.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssetV2AssetsPost_0

> Asset createAssetV2AssetsPost_0(asset1, opts)

Create asset

Create a asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let asset1 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset1 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createAssetV2AssetsPost_0(asset1, opts, (error, data, response) => {
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
 **asset1** | [**Asset1**](Asset1.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssetV2AssetsAssetIdDelete

> ApiDeleteResponse deleteAssetV2AssetsAssetIdDelete(assetId, opts)

Delete asset

Delete an asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteAssetV2AssetsAssetIdDelete(assetId, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAssetV2AssetsAssetIdDelete_0

> ApiDeleteResponse deleteAssetV2AssetsAssetIdDelete_0(assetId, opts)

Delete asset

Delete an asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteAssetV2AssetsAssetIdDelete_0(assetId, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetV2AssetsAssetIdGet

> Asset getAssetV2AssetsAssetIdGet(assetId, opts)

Get asset

Get a asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getAssetV2AssetsAssetIdGet(assetId, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetV2AssetsAssetIdGet_0

> Asset getAssetV2AssetsAssetIdGet_0(assetId, opts)

Get asset

Get a asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getAssetV2AssetsAssetIdGet_0(assetId, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssetsV2AssetsGet

> ApiListResponse listAssetsV2AssetsGet(opts)

List assets

List assets with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listAssetsV2AssetsGet(opts, (error, data, response) => {
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


## listAssetsV2AssetsGet_0

> ApiListResponse listAssetsV2AssetsGet_0(opts)

List assets

List assets with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listAssetsV2AssetsGet_0(opts, (error, data, response) => {
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


## searchAssetsV2AssetsSearchPost

> ApiSearchResponse searchAssetsV2AssetsSearchPost(searchContacts, opts)

Search assets

Search assets with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchAssetsV2AssetsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchAssetsV2AssetsSearchPost_0

> ApiSearchResponse searchAssetsV2AssetsSearchPost_0(searchContacts, opts)

Search assets

Search assets with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchAssetsV2AssetsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateAssetV2AssetsAssetIdPut

> Asset updateAssetV2AssetsAssetIdPut(assetId, contact1, opts)

Update asset

Update an asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let contact1 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact1 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateAssetV2AssetsAssetIdPut(assetId, contact1, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **contact1** | [**Contact1**](Contact1.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAssetV2AssetsAssetIdPut_0

> Asset updateAssetV2AssetsAssetIdPut_0(assetId, contact1, opts)

Update asset

Update an asset

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.AssetsApi();
let assetId = con_12121231231231321; // String | Unique identifier of the contact
let contact1 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact1 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateAssetV2AssetsAssetIdPut_0(assetId, contact1, opts, (error, data, response) => {
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
 **assetId** | **String**| Unique identifier of the contact | 
 **contact1** | [**Contact1**](Contact1.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Asset**](Asset.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

