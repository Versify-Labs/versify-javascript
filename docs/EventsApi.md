# VersifyClient.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventV2EventsPost**](EventsApi.md#createEventV2EventsPost) | **POST** /v2/events | Create event
[**createEventV2EventsPost_0**](EventsApi.md#createEventV2EventsPost_0) | **POST** /v2/events | Create event
[**deleteEventV2EventsEventIdDelete**](EventsApi.md#deleteEventV2EventsEventIdDelete) | **DELETE** /v2/events/{event_id} | Delete event
[**deleteEventV2EventsEventIdDelete_0**](EventsApi.md#deleteEventV2EventsEventIdDelete_0) | **DELETE** /v2/events/{event_id} | Delete event
[**getEventV2EventsEventIdGet**](EventsApi.md#getEventV2EventsEventIdGet) | **GET** /v2/events/{event_id} | Get event
[**getEventV2EventsEventIdGet_0**](EventsApi.md#getEventV2EventsEventIdGet_0) | **GET** /v2/events/{event_id} | Get event
[**listEventsV2EventsGet**](EventsApi.md#listEventsV2EventsGet) | **GET** /v2/events | List events
[**listEventsV2EventsGet_0**](EventsApi.md#listEventsV2EventsGet_0) | **GET** /v2/events | List events
[**searchEventsV2EventsSearchPost**](EventsApi.md#searchEventsV2EventsSearchPost) | **POST** /v2/events/search | Search events
[**searchEventsV2EventsSearchPost_0**](EventsApi.md#searchEventsV2EventsSearchPost_0) | **POST** /v2/events/search | Search events
[**updateEventV2EventsEventIdPut**](EventsApi.md#updateEventV2EventsEventIdPut) | **PUT** /v2/events/{event_id} | Update event
[**updateEventV2EventsEventIdPut_0**](EventsApi.md#updateEventV2EventsEventIdPut_0) | **PUT** /v2/events/{event_id} | Update event



## createEventV2EventsPost

> Event createEventV2EventsPost(asset5, opts)

Create event

Create a event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let asset5 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset5 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createEventV2EventsPost(asset5, opts, (error, data, response) => {
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
 **asset5** | [**Asset5**](Asset5.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEventV2EventsPost_0

> Event createEventV2EventsPost_0(asset5, opts)

Create event

Create a event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let asset5 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset5 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createEventV2EventsPost_0(asset5, opts, (error, data, response) => {
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
 **asset5** | [**Asset5**](Asset5.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventV2EventsEventIdDelete

> ApiDeleteResponse deleteEventV2EventsEventIdDelete(eventId, opts)

Delete event

Delete an event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteEventV2EventsEventIdDelete(eventId, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEventV2EventsEventIdDelete_0

> ApiDeleteResponse deleteEventV2EventsEventIdDelete_0(eventId, opts)

Delete event

Delete an event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteEventV2EventsEventIdDelete_0(eventId, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventV2EventsEventIdGet

> Event getEventV2EventsEventIdGet(eventId, opts)

Get event

Get a event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getEventV2EventsEventIdGet(eventId, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventV2EventsEventIdGet_0

> Event getEventV2EventsEventIdGet_0(eventId, opts)

Get event

Get a event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getEventV2EventsEventIdGet_0(eventId, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEventsV2EventsGet

> ApiListResponse listEventsV2EventsGet(opts)

List events

List events with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'event': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listEventsV2EventsGet(opts, (error, data, response) => {
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
 **event** | **String**| Collection ID | [optional] 
 **status** | **String**| Collection status | [optional] 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiListResponse**](ApiListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEventsV2EventsGet_0

> ApiListResponse listEventsV2EventsGet_0(opts)

List events

List events with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'event': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listEventsV2EventsGet_0(opts, (error, data, response) => {
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
 **event** | **String**| Collection ID | [optional] 
 **status** | **String**| Collection status | [optional] 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiListResponse**](ApiListResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchEventsV2EventsSearchPost

> ApiSearchResponse searchEventsV2EventsSearchPost(searchContacts, opts)

Search events

Search events with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchEventsV2EventsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchEventsV2EventsSearchPost_0

> ApiSearchResponse searchEventsV2EventsSearchPost_0(searchContacts, opts)

Search events

Search events with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchEventsV2EventsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateEventV2EventsEventIdPut

> Event updateEventV2EventsEventIdPut(eventId, contact5, opts)

Update event

Update an event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let contact5 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact5 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateEventV2EventsEventIdPut(eventId, contact5, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **contact5** | [**Contact5**](Contact5.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEventV2EventsEventIdPut_0

> Event updateEventV2EventsEventIdPut_0(eventId, contact5, opts)

Update event

Update an event

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.EventsApi();
let eventId = con_12121231231231321; // String | Unique identifier of the contact
let contact5 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact5 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateEventV2EventsEventIdPut_0(eventId, contact5, opts, (error, data, response) => {
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
 **eventId** | **String**| Unique identifier of the contact | 
 **contact5** | [**Contact5**](Contact5.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

