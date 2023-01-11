# VersifyClient.CollectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollectionV2CollectionsPost**](CollectionsApi.md#createCollectionV2CollectionsPost) | **POST** /v2/collections | Create collection
[**createCollectionV2CollectionsPost_0**](CollectionsApi.md#createCollectionV2CollectionsPost_0) | **POST** /v2/collections | Create collection
[**deleteCollectionV2CollectionsCollectionIdDelete**](CollectionsApi.md#deleteCollectionV2CollectionsCollectionIdDelete) | **DELETE** /v2/collections/{collection_id} | Delete collection
[**deleteCollectionV2CollectionsCollectionIdDelete_0**](CollectionsApi.md#deleteCollectionV2CollectionsCollectionIdDelete_0) | **DELETE** /v2/collections/{collection_id} | Delete collection
[**getCollectionV2CollectionsCollectionIdGet**](CollectionsApi.md#getCollectionV2CollectionsCollectionIdGet) | **GET** /v2/collections/{collection_id} | Get collection
[**getCollectionV2CollectionsCollectionIdGet_0**](CollectionsApi.md#getCollectionV2CollectionsCollectionIdGet_0) | **GET** /v2/collections/{collection_id} | Get collection
[**listCollectionsV2CollectionsGet**](CollectionsApi.md#listCollectionsV2CollectionsGet) | **GET** /v2/collections | List collections
[**listCollectionsV2CollectionsGet_0**](CollectionsApi.md#listCollectionsV2CollectionsGet_0) | **GET** /v2/collections | List collections
[**searchCollectionsV2CollectionsSearchPost**](CollectionsApi.md#searchCollectionsV2CollectionsSearchPost) | **POST** /v2/collections/search | Search collections
[**searchCollectionsV2CollectionsSearchPost_0**](CollectionsApi.md#searchCollectionsV2CollectionsSearchPost_0) | **POST** /v2/collections/search | Search collections
[**updateCollectionV2CollectionsCollectionIdPut**](CollectionsApi.md#updateCollectionV2CollectionsCollectionIdPut) | **PUT** /v2/collections/{collection_id} | Update collection
[**updateCollectionV2CollectionsCollectionIdPut_0**](CollectionsApi.md#updateCollectionV2CollectionsCollectionIdPut_0) | **PUT** /v2/collections/{collection_id} | Update collection



## createCollectionV2CollectionsPost

> Collection createCollectionV2CollectionsPost(asset3, opts)

Create collection

Create a collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let asset3 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset3 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createCollectionV2CollectionsPost(asset3, opts, (error, data, response) => {
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
 **asset3** | [**Asset3**](Asset3.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCollectionV2CollectionsPost_0

> Collection createCollectionV2CollectionsPost_0(asset3, opts)

Create collection

Create a collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let asset3 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset3 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createCollectionV2CollectionsPost_0(asset3, opts, (error, data, response) => {
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
 **asset3** | [**Asset3**](Asset3.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollectionV2CollectionsCollectionIdDelete

> ApiDeleteResponse deleteCollectionV2CollectionsCollectionIdDelete(collectionId, opts)

Delete collection

Delete an collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteCollectionV2CollectionsCollectionIdDelete(collectionId, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCollectionV2CollectionsCollectionIdDelete_0

> ApiDeleteResponse deleteCollectionV2CollectionsCollectionIdDelete_0(collectionId, opts)

Delete collection

Delete an collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteCollectionV2CollectionsCollectionIdDelete_0(collectionId, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionV2CollectionsCollectionIdGet

> Collection getCollectionV2CollectionsCollectionIdGet(collectionId, opts)

Get collection

Get a collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getCollectionV2CollectionsCollectionIdGet(collectionId, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionV2CollectionsCollectionIdGet_0

> Collection getCollectionV2CollectionsCollectionIdGet_0(collectionId, opts)

Get collection

Get a collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getCollectionV2CollectionsCollectionIdGet_0(collectionId, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCollectionsV2CollectionsGet

> ApiListResponse listCollectionsV2CollectionsGet(opts)

List collections

List collections with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listCollectionsV2CollectionsGet(opts, (error, data, response) => {
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


## listCollectionsV2CollectionsGet_0

> ApiListResponse listCollectionsV2CollectionsGet_0(opts)

List collections

List collections with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listCollectionsV2CollectionsGet_0(opts, (error, data, response) => {
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


## searchCollectionsV2CollectionsSearchPost

> ApiSearchResponse searchCollectionsV2CollectionsSearchPost(searchContacts, opts)

Search collections

Search collections with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchCollectionsV2CollectionsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchCollectionsV2CollectionsSearchPost_0

> ApiSearchResponse searchCollectionsV2CollectionsSearchPost_0(searchContacts, opts)

Search collections

Search collections with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchCollectionsV2CollectionsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateCollectionV2CollectionsCollectionIdPut

> Collection updateCollectionV2CollectionsCollectionIdPut(collectionId, contact3, opts)

Update collection

Update an collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let contact3 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact3 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateCollectionV2CollectionsCollectionIdPut(collectionId, contact3, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **contact3** | [**Contact3**](Contact3.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCollectionV2CollectionsCollectionIdPut_0

> Collection updateCollectionV2CollectionsCollectionIdPut_0(collectionId, contact3, opts)

Update collection

Update an collection

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.CollectionsApi();
let collectionId = con_12121231231231321; // String | Unique identifier of the contact
let contact3 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact3 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateCollectionV2CollectionsCollectionIdPut_0(collectionId, contact3, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique identifier of the contact | 
 **contact3** | [**Contact3**](Contact3.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Collection**](Collection.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

