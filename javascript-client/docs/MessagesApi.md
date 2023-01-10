# VersifyClient.MessagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessageV2MessagesPost**](MessagesApi.md#createMessageV2MessagesPost) | **POST** /v2/messages | Create message
[**createMessageV2MessagesPost_0**](MessagesApi.md#createMessageV2MessagesPost_0) | **POST** /v2/messages | Create message
[**deleteMessageV2MessagesMessageIdDelete**](MessagesApi.md#deleteMessageV2MessagesMessageIdDelete) | **DELETE** /v2/messages/{message_id} | Delete message
[**deleteMessageV2MessagesMessageIdDelete_0**](MessagesApi.md#deleteMessageV2MessagesMessageIdDelete_0) | **DELETE** /v2/messages/{message_id} | Delete message
[**getMessageV2MessagesMessageIdGet**](MessagesApi.md#getMessageV2MessagesMessageIdGet) | **GET** /v2/messages/{message_id} | Get message
[**getMessageV2MessagesMessageIdGet_0**](MessagesApi.md#getMessageV2MessagesMessageIdGet_0) | **GET** /v2/messages/{message_id} | Get message
[**listMessagesV2MessagesGet**](MessagesApi.md#listMessagesV2MessagesGet) | **GET** /v2/messages | List messages
[**listMessagesV2MessagesGet_0**](MessagesApi.md#listMessagesV2MessagesGet_0) | **GET** /v2/messages | List messages
[**searchMessagesV2MessagesSearchPost**](MessagesApi.md#searchMessagesV2MessagesSearchPost) | **POST** /v2/messages/search | Search messages
[**searchMessagesV2MessagesSearchPost_0**](MessagesApi.md#searchMessagesV2MessagesSearchPost_0) | **POST** /v2/messages/search | Search messages
[**updateMessageV2MessagesMessageIdPut**](MessagesApi.md#updateMessageV2MessagesMessageIdPut) | **PUT** /v2/messages/{message_id} | Update message
[**updateMessageV2MessagesMessageIdPut_0**](MessagesApi.md#updateMessageV2MessagesMessageIdPut_0) | **PUT** /v2/messages/{message_id} | Update message



## createMessageV2MessagesPost

> Message createMessageV2MessagesPost(asset7, opts)

Create message

Create a message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let asset7 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createMessageV2MessagesPost(asset7, opts, (error, data, response) => {
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
 **asset7** | [**Asset7**](Asset7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMessageV2MessagesPost_0

> Message createMessageV2MessagesPost_0(asset7, opts)

Create message

Create a message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let asset7 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createMessageV2MessagesPost_0(asset7, opts, (error, data, response) => {
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
 **asset7** | [**Asset7**](Asset7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMessageV2MessagesMessageIdDelete

> ApiDeleteResponse deleteMessageV2MessagesMessageIdDelete(messageId, opts)

Delete message

Delete an message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteMessageV2MessagesMessageIdDelete(messageId, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMessageV2MessagesMessageIdDelete_0

> ApiDeleteResponse deleteMessageV2MessagesMessageIdDelete_0(messageId, opts)

Delete message

Delete an message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteMessageV2MessagesMessageIdDelete_0(messageId, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessageV2MessagesMessageIdGet

> Message getMessageV2MessagesMessageIdGet(messageId, opts)

Get message

Get a message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getMessageV2MessagesMessageIdGet(messageId, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessageV2MessagesMessageIdGet_0

> Message getMessageV2MessagesMessageIdGet_0(messageId, opts)

Get message

Get a message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getMessageV2MessagesMessageIdGet_0(messageId, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMessagesV2MessagesGet

> ApiListResponse listMessagesV2MessagesGet(opts)

List messages

List messages with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listMessagesV2MessagesGet(opts, (error, data, response) => {
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


## listMessagesV2MessagesGet_0

> ApiListResponse listMessagesV2MessagesGet_0(opts)

List messages

List messages with optional filters and pagination parameters

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listMessagesV2MessagesGet_0(opts, (error, data, response) => {
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


## searchMessagesV2MessagesSearchPost

> ApiSearchResponse searchMessagesV2MessagesSearchPost(searchContacts, opts)

Search messages

Search messages with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchMessagesV2MessagesSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchMessagesV2MessagesSearchPost_0

> ApiSearchResponse searchMessagesV2MessagesSearchPost_0(searchContacts, opts)

Search messages

Search messages with query string

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchMessagesV2MessagesSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateMessageV2MessagesMessageIdPut

> Message updateMessageV2MessagesMessageIdPut(messageId, contact7, opts)

Update message

Update an message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let contact7 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateMessageV2MessagesMessageIdPut(messageId, contact7, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **contact7** | [**Contact7**](Contact7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMessageV2MessagesMessageIdPut_0

> Message updateMessageV2MessagesMessageIdPut_0(messageId, contact7, opts)

Update message

Update an message

### Example

```javascript
import VersifyClient from 'versify-client';
let defaultClient = VersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifyClient.MessagesApi();
let messageId = con_12121231231231321; // String | Unique identifier of the contact
let contact7 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateMessageV2MessagesMessageIdPut_0(messageId, contact7, opts, (error, data, response) => {
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
 **messageId** | **String**| Unique identifier of the contact | 
 **contact7** | [**Contact7**](Contact7.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Message**](Message.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

