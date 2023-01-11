# VersifylabsVersifyClient.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessTokenV2OauthAccessTokenPost**](AuthApi.md#accessTokenV2OauthAccessTokenPost) | **POST** /v2/oauth/access_token | Access Token
[**accessTokenV2OauthAccessTokenPost_0**](AuthApi.md#accessTokenV2OauthAccessTokenPost_0) | **POST** /v2/oauth/access_token | Access Token
[**authorizeV2OauthAuthorizeGet**](AuthApi.md#authorizeV2OauthAuthorizeGet) | **GET** /v2/oauth/authorize | Authorize
[**authorizeV2OauthAuthorizeGet_0**](AuthApi.md#authorizeV2OauthAuthorizeGet_0) | **GET** /v2/oauth/authorize | Authorize



## accessTokenV2OauthAccessTokenPost

> Object accessTokenV2OauthAccessTokenPost(bodyAccessTokenV2OauthAccessTokenPost)

Access Token

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let bodyAccessTokenV2OauthAccessTokenPost = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost(); // BodyAccessTokenV2OauthAccessTokenPost | 
apiInstance.accessTokenV2OauthAccessTokenPost(bodyAccessTokenV2OauthAccessTokenPost, (error, data, response) => {
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
 **bodyAccessTokenV2OauthAccessTokenPost** | [**BodyAccessTokenV2OauthAccessTokenPost**](BodyAccessTokenV2OauthAccessTokenPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## accessTokenV2OauthAccessTokenPost_0

> Object accessTokenV2OauthAccessTokenPost_0(bodyAccessTokenV2OauthAccessTokenPost)

Access Token

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let bodyAccessTokenV2OauthAccessTokenPost = new VersifylabsVersifyClient.BodyAccessTokenV2OauthAccessTokenPost(); // BodyAccessTokenV2OauthAccessTokenPost | 
apiInstance.accessTokenV2OauthAccessTokenPost_0(bodyAccessTokenV2OauthAccessTokenPost, (error, data, response) => {
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
 **bodyAccessTokenV2OauthAccessTokenPost** | [**BodyAccessTokenV2OauthAccessTokenPost**](BodyAccessTokenV2OauthAccessTokenPost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authorizeV2OauthAuthorizeGet

> Object authorizeV2OauthAuthorizeGet(responseType, clientId, redirectUri)

Authorize

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let responseType = code; // String | The type of response to return.
let clientId = ; // String | The client ID to use for authentication.
let redirectUri = https://oauth.pstmn.io/v1/browser-callback; // String | The redirect URI to use for authentication.
apiInstance.authorizeV2OauthAuthorizeGet(responseType, clientId, redirectUri, (error, data, response) => {
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
 **responseType** | **String**| The type of response to return. | 
 **clientId** | **String**| The client ID to use for authentication. | 
 **redirectUri** | **String**| The redirect URI to use for authentication. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authorizeV2OauthAuthorizeGet_0

> Object authorizeV2OauthAuthorizeGet_0(responseType, clientId, redirectUri)

Authorize

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let responseType = code; // String | The type of response to return.
let clientId = ; // String | The client ID to use for authentication.
let redirectUri = https://oauth.pstmn.io/v1/browser-callback; // String | The redirect URI to use for authentication.
apiInstance.authorizeV2OauthAuthorizeGet_0(responseType, clientId, redirectUri, (error, data, response) => {
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
 **responseType** | **String**| The type of response to return. | 
 **clientId** | **String**| The client ID to use for authentication. | 
 **redirectUri** | **String**| The redirect URI to use for authentication. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

