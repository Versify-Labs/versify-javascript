# VersifylabsVersifyClient.WebhooksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhookV2WebhooksPost**](WebhooksApi.md#createWebhookV2WebhooksPost) | **POST** /v2/webhooks | Create webhook
[**createWebhookV2WebhooksPost_0**](WebhooksApi.md#createWebhookV2WebhooksPost_0) | **POST** /v2/webhooks | Create webhook
[**deleteWebhookV2WebhooksWebhookIdDelete**](WebhooksApi.md#deleteWebhookV2WebhooksWebhookIdDelete) | **DELETE** /v2/webhooks/{webhook_id} | Delete webhook
[**deleteWebhookV2WebhooksWebhookIdDelete_0**](WebhooksApi.md#deleteWebhookV2WebhooksWebhookIdDelete_0) | **DELETE** /v2/webhooks/{webhook_id} | Delete webhook
[**getWebhookV2WebhooksWebhookIdGet**](WebhooksApi.md#getWebhookV2WebhooksWebhookIdGet) | **GET** /v2/webhooks/{webhook_id} | Get webhook
[**getWebhookV2WebhooksWebhookIdGet_0**](WebhooksApi.md#getWebhookV2WebhooksWebhookIdGet_0) | **GET** /v2/webhooks/{webhook_id} | Get webhook
[**listWebhooksV2WebhooksGet**](WebhooksApi.md#listWebhooksV2WebhooksGet) | **GET** /v2/webhooks | List webhooks
[**listWebhooksV2WebhooksGet_0**](WebhooksApi.md#listWebhooksV2WebhooksGet_0) | **GET** /v2/webhooks | List webhooks
[**searchWebhooksV2WebhooksSearchPost**](WebhooksApi.md#searchWebhooksV2WebhooksSearchPost) | **POST** /v2/webhooks/search | Search webhooks
[**searchWebhooksV2WebhooksSearchPost_0**](WebhooksApi.md#searchWebhooksV2WebhooksSearchPost_0) | **POST** /v2/webhooks/search | Search webhooks
[**updateWebhookV2WebhooksWebhookIdPut**](WebhooksApi.md#updateWebhookV2WebhooksWebhookIdPut) | **PUT** /v2/webhooks/{webhook_id} | Update webhook
[**updateWebhookV2WebhooksWebhookIdPut_0**](WebhooksApi.md#updateWebhookV2WebhooksWebhookIdPut_0) | **PUT** /v2/webhooks/{webhook_id} | Update webhook



## createWebhookV2WebhooksPost

> Webhook createWebhookV2WebhooksPost(asset13, opts)

Create webhook

Create a webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let asset13 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset13 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createWebhookV2WebhooksPost(asset13, opts, (error, data, response) => {
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
 **asset13** | [**Asset13**](Asset13.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWebhookV2WebhooksPost_0

> Webhook createWebhookV2WebhooksPost_0(asset13, opts)

Create webhook

Create a webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let asset13 = {"description":"Acme Corp is a fictional company in the Looney Tunes universe.","image":"https://acme.com/logo.png","name":"Acme Corp"}; // Asset13 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.createWebhookV2WebhooksPost_0(asset13, opts, (error, data, response) => {
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
 **asset13** | [**Asset13**](Asset13.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhookV2WebhooksWebhookIdDelete

> ApiDeleteResponse deleteWebhookV2WebhooksWebhookIdDelete(webhookId, opts)

Delete webhook

Delete an webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteWebhookV2WebhooksWebhookIdDelete(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWebhookV2WebhooksWebhookIdDelete_0

> ApiDeleteResponse deleteWebhookV2WebhooksWebhookIdDelete_0(webhookId, opts)

Delete webhook

Delete an webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.deleteWebhookV2WebhooksWebhookIdDelete_0(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**ApiDeleteResponse**](ApiDeleteResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookV2WebhooksWebhookIdGet

> Webhook getWebhookV2WebhooksWebhookIdGet(webhookId, opts)

Get webhook

Get a webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getWebhookV2WebhooksWebhookIdGet(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookV2WebhooksWebhookIdGet_0

> Webhook getWebhookV2WebhooksWebhookIdGet_0(webhookId, opts)

Get webhook

Get a webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.getWebhookV2WebhooksWebhookIdGet_0(webhookId, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWebhooksV2WebhooksGet

> ApiListResponse listWebhooksV2WebhooksGet(opts)

List webhooks

List webhooks with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listWebhooksV2WebhooksGet(opts, (error, data, response) => {
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


## listWebhooksV2WebhooksGet_0

> ApiListResponse listWebhooksV2WebhooksGet_0(opts)

List webhooks

List webhooks with optional filters and pagination parameters

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let opts = {
  'pageNum': 1, // Number | Page number
  'pageSize': 10, // Number | Page size
  'collection': col_12121231231231321, // String | Collection ID
  'status': active, // String | Collection status
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.listWebhooksV2WebhooksGet_0(opts, (error, data, response) => {
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


## searchWebhooksV2WebhooksSearchPost

> ApiSearchResponse searchWebhooksV2WebhooksSearchPost(searchContacts, opts)

Search webhooks

Search webhooks with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchWebhooksV2WebhooksSearchPost(searchContacts, opts, (error, data, response) => {
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


## searchWebhooksV2WebhooksSearchPost_0

> ApiSearchResponse searchWebhooksV2WebhooksSearchPost_0(searchContacts, opts)

Search webhooks

Search webhooks with query string

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let searchContacts = {"query":{"operator":"AND","value":[{"field":"email","operator":"contains","value":"acme.com"},{"field":"name.first_name","operator":"contains","value":"Jane"}]}}; // SearchContacts | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.searchWebhooksV2WebhooksSearchPost_0(searchContacts, opts, (error, data, response) => {
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


## updateWebhookV2WebhooksWebhookIdPut

> Webhook updateWebhookV2WebhooksWebhookIdPut(webhookId, contact13, opts)

Update webhook

Update an webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let contact13 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact13 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateWebhookV2WebhooksWebhookIdPut(webhookId, contact13, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **contact13** | [**Contact13**](Contact13.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhookV2WebhooksWebhookIdPut_0

> Webhook updateWebhookV2WebhooksWebhookIdPut_0(webhookId, contact13, opts)

Update webhook

Update an webhook

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.WebhooksApi();
let webhookId = con_12121231231231321; // String | Unique identifier of the contact
let contact13 = {"name":{"first_name":"Jane","last_name":"Doe"}}; // Contact13 | 
let opts = {
  'versifyAccount': act_123123123131231231 // String | Versify Account ID
};
apiInstance.updateWebhookV2WebhooksWebhookIdPut_0(webhookId, contact13, opts, (error, data, response) => {
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
 **webhookId** | **String**| Unique identifier of the contact | 
 **contact13** | [**Contact13**](Contact13.md)|  | 
 **versifyAccount** | **String**| Versify Account ID | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

