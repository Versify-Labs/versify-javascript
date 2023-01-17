# VersifylabsVersifyClient.ContactsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContactV2ContactsPost**](ContactsApi.md#createContactV2ContactsPost) | **POST** /v2/contacts | Create contact
[**createContactV2ContactsPost_0**](ContactsApi.md#createContactV2ContactsPost_0) | **POST** /v2/contacts | Create contact
[**deleteContactV2ContactsContactIdDelete**](ContactsApi.md#deleteContactV2ContactsContactIdDelete) | **DELETE** /v2/contacts/{contact_id} | Delete contact
[**deleteContactV2ContactsContactIdDelete_0**](ContactsApi.md#deleteContactV2ContactsContactIdDelete_0) | **DELETE** /v2/contacts/{contact_id} | Delete contact
[**getContactV2ContactsContactIdGet**](ContactsApi.md#getContactV2ContactsContactIdGet) | **GET** /v2/contacts/{contact_id} | Get contact
[**getContactV2ContactsContactIdGet_0**](ContactsApi.md#getContactV2ContactsContactIdGet_0) | **GET** /v2/contacts/{contact_id} | Get contact
[**listContactsV2ContactsGet**](ContactsApi.md#listContactsV2ContactsGet) | **GET** /v2/contacts | List contacts
[**listContactsV2ContactsGet_0**](ContactsApi.md#listContactsV2ContactsGet_0) | **GET** /v2/contacts | List contacts
[**searchContactsV2ContactsSearchPost**](ContactsApi.md#searchContactsV2ContactsSearchPost) | **POST** /v2/contacts/search | Search contacts
[**searchContactsV2ContactsSearchPost_0**](ContactsApi.md#searchContactsV2ContactsSearchPost_0) | **POST** /v2/contacts/search | Search contacts
[**updateContactV2ContactsContactIdPut**](ContactsApi.md#updateContactV2ContactsContactIdPut) | **PUT** /v2/contacts/{contact_id} | Update contact
[**updateContactV2ContactsContactIdPut_0**](ContactsApi.md#updateContactV2ContactsContactIdPut_0) | **PUT** /v2/contacts/{contact_id} | Update contact



## createContactV2ContactsPost

> Contact createContactV2ContactsPost(contactCreate, opts)

Create contact

Create a contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactCreate = new VersifylabsVersifyClient.ContactCreate(); // ContactCreate | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createContactV2ContactsPost(contactCreate, opts, (error, data, response) => {
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
 **contactCreate** | [**ContactCreate**](ContactCreate.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContactV2ContactsPost_0

> Contact createContactV2ContactsPost_0(contactCreate, opts)

Create contact

Create a contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactCreate = new VersifylabsVersifyClient.ContactCreate(); // ContactCreate | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createContactV2ContactsPost_0(contactCreate, opts, (error, data, response) => {
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
 **contactCreate** | [**ContactCreate**](ContactCreate.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContactV2ContactsContactIdDelete

> ApiDeleteResponse deleteContactV2ContactsContactIdDelete(contactId, opts)

Delete contact

Delete an contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteContactV2ContactsContactIdDelete(contactId, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteContactV2ContactsContactIdDelete_0

> ApiDeleteResponse deleteContactV2ContactsContactIdDelete_0(contactId, opts)

Delete contact

Delete an contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteContactV2ContactsContactIdDelete_0(contactId, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactV2ContactsContactIdGet

> Contact getContactV2ContactsContactIdGet(contactId, opts)

Get contact

Get a contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getContactV2ContactsContactIdGet(contactId, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContactV2ContactsContactIdGet_0

> Contact getContactV2ContactsContactIdGet_0(contactId, opts)

Get contact

Get a contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getContactV2ContactsContactIdGet_0(contactId, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContactsV2ContactsGet

> ApiListResponse listContactsV2ContactsGet(opts)

List contacts

List contacts with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listContactsV2ContactsGet(opts, (error, data, response) => {
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


## listContactsV2ContactsGet_0

> ApiListResponse listContactsV2ContactsGet_0(opts)

List contacts

List contacts with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listContactsV2ContactsGet_0(opts, (error, data, response) => {
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


## searchContactsV2ContactsSearchPost

> ApiSearchResponse searchContactsV2ContactsSearchPost(searchContacts, opts)

Search contacts

Search contacts with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchContactsV2ContactsSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchContactsV2ContactsSearchPost_0

> ApiSearchResponse searchContactsV2ContactsSearchPost_0(searchContacts, opts)

Search contacts

Search contacts with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchContactsV2ContactsSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateContactV2ContactsContactIdPut

> Contact updateContactV2ContactsContactIdPut(contactId, contactUpdate, opts)

Update contact

Update an contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let contactUpdate = new VersifylabsVersifyClient.ContactUpdate(); // ContactUpdate | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateContactV2ContactsContactIdPut(contactId, contactUpdate, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **contactUpdate** | [**ContactUpdate**](ContactUpdate.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContactV2ContactsContactIdPut_0

> Contact updateContactV2ContactsContactIdPut_0(contactId, contactUpdate, opts)

Update contact

Update an contact

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.ContactsApi();
let contactId = con_12121231231231321; // String | Unique identifier of the contact
let contactUpdate = new VersifylabsVersifyClient.ContactUpdate(); // ContactUpdate | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateContactV2ContactsContactIdPut_0(contactId, contactUpdate, opts, (error, data, response) => {
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
 **contactId** | **String**| Unique identifier of the contact | 
 **contactUpdate** | [**ContactUpdate**](ContactUpdate.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

