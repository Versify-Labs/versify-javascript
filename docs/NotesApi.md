# VersifylabsVersifyClient.NotesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNoteV2NotesPost**](NotesApi.md#createNoteV2NotesPost) | **POST** /v2/notes | Create note
[**createNoteV2NotesPost_0**](NotesApi.md#createNoteV2NotesPost_0) | **POST** /v2/notes | Create note
[**deleteNoteV2NotesNoteIdDelete**](NotesApi.md#deleteNoteV2NotesNoteIdDelete) | **DELETE** /v2/notes/{note_id} | Delete note
[**deleteNoteV2NotesNoteIdDelete_0**](NotesApi.md#deleteNoteV2NotesNoteIdDelete_0) | **DELETE** /v2/notes/{note_id} | Delete note
[**getNoteV2NotesNoteIdGet**](NotesApi.md#getNoteV2NotesNoteIdGet) | **GET** /v2/notes/{note_id} | Get note
[**getNoteV2NotesNoteIdGet_0**](NotesApi.md#getNoteV2NotesNoteIdGet_0) | **GET** /v2/notes/{note_id} | Get note
[**listNotesV2NotesGet**](NotesApi.md#listNotesV2NotesGet) | **GET** /v2/notes | List notes
[**listNotesV2NotesGet_0**](NotesApi.md#listNotesV2NotesGet_0) | **GET** /v2/notes | List notes
[**searchNotesV2NotesSearchPost**](NotesApi.md#searchNotesV2NotesSearchPost) | **POST** /v2/notes/search | Search notes
[**searchNotesV2NotesSearchPost_0**](NotesApi.md#searchNotesV2NotesSearchPost_0) | **POST** /v2/notes/search | Search notes
[**updateNoteV2NotesNoteIdPut**](NotesApi.md#updateNoteV2NotesNoteIdPut) | **PUT** /v2/notes/{note_id} | Update note
[**updateNoteV2NotesNoteIdPut_0**](NotesApi.md#updateNoteV2NotesNoteIdPut_0) | **PUT** /v2/notes/{note_id} | Update note



## createNoteV2NotesPost

> Note createNoteV2NotesPost(asset7, opts)

Create note

Create a note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let asset7 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createNoteV2NotesPost(asset7, opts, (error, data, response) => {
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

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNoteV2NotesPost_0

> Note createNoteV2NotesPost_0(asset7, opts)

Create note

Create a note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let asset7 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset7 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createNoteV2NotesPost_0(asset7, opts, (error, data, response) => {
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

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNoteV2NotesNoteIdDelete

> ApiDeleteResponse deleteNoteV2NotesNoteIdDelete(noteId, opts)

Delete note

Delete an note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteNoteV2NotesNoteIdDelete(noteId, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteNoteV2NotesNoteIdDelete_0

> ApiDeleteResponse deleteNoteV2NotesNoteIdDelete_0(noteId, opts)

Delete note

Delete an note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteNoteV2NotesNoteIdDelete_0(noteId, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteV2NotesNoteIdGet

> Note getNoteV2NotesNoteIdGet(noteId, opts)

Get note

Get a note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getNoteV2NotesNoteIdGet(noteId, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNoteV2NotesNoteIdGet_0

> Note getNoteV2NotesNoteIdGet_0(noteId, opts)

Get note

Get a note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getNoteV2NotesNoteIdGet_0(noteId, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listNotesV2NotesGet

> ApiListResponse listNotesV2NotesGet(opts)

List notes

List notes with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listNotesV2NotesGet(opts, (error, data, response) => {
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


## listNotesV2NotesGet_0

> ApiListResponse listNotesV2NotesGet_0(opts)

List notes

List notes with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listNotesV2NotesGet_0(opts, (error, data, response) => {
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


## searchNotesV2NotesSearchPost

> ApiSearchResponse searchNotesV2NotesSearchPost(searchContacts, opts)

Search notes

Search notes with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchNotesV2NotesSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchNotesV2NotesSearchPost_0

> ApiSearchResponse searchNotesV2NotesSearchPost_0(searchContacts, opts)

Search notes

Search notes with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchNotesV2NotesSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateNoteV2NotesNoteIdPut

> Note updateNoteV2NotesNoteIdPut(noteId, contact8, opts)

Update note

Update an note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let contact8 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact8 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateNoteV2NotesNoteIdPut(noteId, contact8, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **contact8** | [**Contact8**](Contact8.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNoteV2NotesNoteIdPut_0

> Note updateNoteV2NotesNoteIdPut_0(noteId, contact8, opts)

Update note

Update an note

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.NotesApi();
let noteId = con_12121231231231321; // String | Unique identifier of the contact
let contact8 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact8 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateNoteV2NotesNoteIdPut_0(noteId, contact8, opts, (error, data, response) => {
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
 **noteId** | **String**| Unique identifier of the contact | 
 **contact8** | [**Contact8**](Contact8.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

