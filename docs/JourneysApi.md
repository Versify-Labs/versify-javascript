# VersifyApi.JourneysApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJourneyV2JourneysPost**](JourneysApi.md#createJourneyV2JourneysPost) | **POST** /v2/journeys | Create journey
[**createJourneyV2JourneysPost_0**](JourneysApi.md#createJourneyV2JourneysPost_0) | **POST** /v2/journeys | Create journey
[**deleteJourneyV2JourneysJourneyIdDelete**](JourneysApi.md#deleteJourneyV2JourneysJourneyIdDelete) | **DELETE** /v2/journeys/{journey_id} | Delete journey
[**deleteJourneyV2JourneysJourneyIdDelete_0**](JourneysApi.md#deleteJourneyV2JourneysJourneyIdDelete_0) | **DELETE** /v2/journeys/{journey_id} | Delete journey
[**getJourneyV2JourneysJourneyIdGet**](JourneysApi.md#getJourneyV2JourneysJourneyIdGet) | **GET** /v2/journeys/{journey_id} | Get journey
[**getJourneyV2JourneysJourneyIdGet_0**](JourneysApi.md#getJourneyV2JourneysJourneyIdGet_0) | **GET** /v2/journeys/{journey_id} | Get journey
[**listJourneysV2JourneysGet**](JourneysApi.md#listJourneysV2JourneysGet) | **GET** /v2/journeys | List journeys
[**listJourneysV2JourneysGet_0**](JourneysApi.md#listJourneysV2JourneysGet_0) | **GET** /v2/journeys | List journeys
[**searchJourneysV2JourneysSearchPost**](JourneysApi.md#searchJourneysV2JourneysSearchPost) | **POST** /v2/journeys/search | Search journeys
[**searchJourneysV2JourneysSearchPost_0**](JourneysApi.md#searchJourneysV2JourneysSearchPost_0) | **POST** /v2/journeys/search | Search journeys
[**updateJourneyV2JourneysJourneyIdPut**](JourneysApi.md#updateJourneyV2JourneysJourneyIdPut) | **PUT** /v2/journeys/{journey_id} | Update journey
[**updateJourneyV2JourneysJourneyIdPut_0**](JourneysApi.md#updateJourneyV2JourneysJourneyIdPut_0) | **PUT** /v2/journeys/{journey_id} | Update journey



## createJourneyV2JourneysPost

> Journey createJourneyV2JourneysPost(asset6, opts)

Create journey

Create a journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let asset6 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createJourneyV2JourneysPost(asset6, opts, (error, data, response) => {
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

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createJourneyV2JourneysPost_0

> Journey createJourneyV2JourneysPost_0(asset6, opts)

Create journey

Create a journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let asset6 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createJourneyV2JourneysPost_0(asset6, opts, (error, data, response) => {
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

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteJourneyV2JourneysJourneyIdDelete

> ApiDeleteResponse deleteJourneyV2JourneysJourneyIdDelete(journeyId, opts)

Delete journey

Delete an journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteJourneyV2JourneysJourneyIdDelete(journeyId, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteJourneyV2JourneysJourneyIdDelete_0

> ApiDeleteResponse deleteJourneyV2JourneysJourneyIdDelete_0(journeyId, opts)

Delete journey

Delete an journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteJourneyV2JourneysJourneyIdDelete_0(journeyId, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJourneyV2JourneysJourneyIdGet

> Journey getJourneyV2JourneysJourneyIdGet(journeyId, opts)

Get journey

Get a journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getJourneyV2JourneysJourneyIdGet(journeyId, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJourneyV2JourneysJourneyIdGet_0

> Journey getJourneyV2JourneysJourneyIdGet_0(journeyId, opts)

Get journey

Get a journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getJourneyV2JourneysJourneyIdGet_0(journeyId, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listJourneysV2JourneysGet

> ApiListResponse listJourneysV2JourneysGet(opts)

List journeys

List journeys with optional filters and pagination parameters

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listJourneysV2JourneysGet(opts, (error, data, response) => {
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


## listJourneysV2JourneysGet_0

> ApiListResponse listJourneysV2JourneysGet_0(opts)

List journeys

List journeys with optional filters and pagination parameters

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listJourneysV2JourneysGet_0(opts, (error, data, response) => {
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


## searchJourneysV2JourneysSearchPost

> ApiSearchResponse searchJourneysV2JourneysSearchPost(searchContacts, opts)

Search journeys

Search journeys with query string

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchJourneysV2JourneysSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchJourneysV2JourneysSearchPost_0

> ApiSearchResponse searchJourneysV2JourneysSearchPost_0(searchContacts, opts)

Search journeys

Search journeys with query string

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchJourneysV2JourneysSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateJourneyV2JourneysJourneyIdPut

> Journey updateJourneyV2JourneysJourneyIdPut(journeyId, contact6, opts)

Update journey

Update an journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let contact6 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateJourneyV2JourneysJourneyIdPut(journeyId, contact6, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **contact6** | [**Contact6**](Contact6.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateJourneyV2JourneysJourneyIdPut_0

> Journey updateJourneyV2JourneysJourneyIdPut_0(journeyId, contact6, opts)

Update journey

Update an journey

### Example

```javascript
import VersifyApi from 'Versify API';
let defaultClient = VersifyApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyApi.JourneysApi();
let journeyId = con_12121231231231321; // String | Unique identifier of the contact
let contact6 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact6 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateJourneyV2JourneysJourneyIdPut_0(journeyId, contact6, opts, (error, data, response) => {
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
 **journeyId** | **String**| Unique identifier of the contact | 
 **contact6** | [**Contact6**](Contact6.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Journey**](Journey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

