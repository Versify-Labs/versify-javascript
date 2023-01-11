# VersifylabsVersifyClient.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentUserV2UsersMeGet**](UsersApi.md#getCurrentUserV2UsersMeGet) | **GET** /v2/users/me | Get current user
[**updateCurrentUserV2UsersMePut**](UsersApi.md#updateCurrentUserV2UsersMePut) | **PUT** /v2/users/me | Update current user



## getCurrentUserV2UsersMeGet

> User getCurrentUserV2UsersMeGet()

Get current user

Get current user

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.UsersApi();
apiInstance.getCurrentUserV2UsersMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCurrentUserV2UsersMePut

> User updateCurrentUserV2UsersMePut(user1)

Update current user

Update current user

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.UsersApi();
let user1 = {"avatar":"https://example.com/avatar.png","name":{"first_name":"Jane","last_name":"Doe"}}; // User1 | 
apiInstance.updateCurrentUserV2UsersMePut(user1, (error, data, response) => {
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
 **user1** | [**User1**](User1.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

