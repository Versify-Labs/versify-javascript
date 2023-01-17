# VersifylabsVersifyClient.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessTokenV2OauthAccessTokenPost**](AuthApi.md#accessTokenV2OauthAccessTokenPost) | **POST** /v2/oauth/access_token | Access Token
[**accessTokenV2OauthAccessTokenPost_0**](AuthApi.md#accessTokenV2OauthAccessTokenPost_0) | **POST** /v2/oauth/access_token | Access Token
[**authenticateV2AuthAuthenticatePost**](AuthApi.md#authenticateV2AuthAuthenticatePost) | **POST** /v2/auth/authenticate | Authenticate
[**authenticateV2AuthAuthenticatePost_0**](AuthApi.md#authenticateV2AuthAuthenticatePost_0) | **POST** /v2/auth/authenticate | Authenticate
[**authorizeV2OauthAuthorizeGet**](AuthApi.md#authorizeV2OauthAuthorizeGet) | **GET** /v2/oauth/authorize | Authorize
[**authorizeV2OauthAuthorizeGet_0**](AuthApi.md#authorizeV2OauthAuthorizeGet_0) | **GET** /v2/oauth/authorize | Authorize
[**getCurrentUserV2UsersMeGet**](AuthApi.md#getCurrentUserV2UsersMeGet) | **GET** /v2/users/me | Get current user
[**getUserInfoV2OauthUserInfoGet**](AuthApi.md#getUserInfoV2OauthUserInfoGet) | **GET** /v2/oauth/user_info | Get current user
[**loginV2AuthLoginPost**](AuthApi.md#loginV2AuthLoginPost) | **POST** /v2/auth/login | Login
[**loginV2AuthLoginPost_0**](AuthApi.md#loginV2AuthLoginPost_0) | **POST** /v2/auth/login | Login
[**registerV2AuthRegisterPost**](AuthApi.md#registerV2AuthRegisterPost) | **POST** /v2/auth/register | Register
[**registerV2AuthRegisterPost_0**](AuthApi.md#registerV2AuthRegisterPost_0) | **POST** /v2/auth/register | Register
[**updateCurrentUserV2UsersMePut**](AuthApi.md#updateCurrentUserV2UsersMePut) | **PUT** /v2/users/me | Update current user



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


## authenticateV2AuthAuthenticatePost

> Object authenticateV2AuthAuthenticatePost(bodyAuthenticateV2AuthAuthenticatePost)

Authenticate

Authenticate with a one-time passcode.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let bodyAuthenticateV2AuthAuthenticatePost = new VersifylabsVersifyClient.BodyAuthenticateV2AuthAuthenticatePost(); // BodyAuthenticateV2AuthAuthenticatePost | 
apiInstance.authenticateV2AuthAuthenticatePost(bodyAuthenticateV2AuthAuthenticatePost, (error, data, response) => {
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
 **bodyAuthenticateV2AuthAuthenticatePost** | [**BodyAuthenticateV2AuthAuthenticatePost**](BodyAuthenticateV2AuthAuthenticatePost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authenticateV2AuthAuthenticatePost_0

> Object authenticateV2AuthAuthenticatePost_0(bodyAuthenticateV2AuthAuthenticatePost)

Authenticate

Authenticate with a one-time passcode.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let bodyAuthenticateV2AuthAuthenticatePost = new VersifylabsVersifyClient.BodyAuthenticateV2AuthAuthenticatePost(); // BodyAuthenticateV2AuthAuthenticatePost | 
apiInstance.authenticateV2AuthAuthenticatePost_0(bodyAuthenticateV2AuthAuthenticatePost, (error, data, response) => {
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
 **bodyAuthenticateV2AuthAuthenticatePost** | [**BodyAuthenticateV2AuthAuthenticatePost**](BodyAuthenticateV2AuthAuthenticatePost.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authorizeV2OauthAuthorizeGet

> {String: String} authorizeV2OauthAuthorizeGet(clientId, redirectUri, opts)

Authorize

Authorize an email address to use for authentication.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let clientId = cli_1234567890; // String | The client ID to use for authentication.
let redirectUri = https://oauth.pstmn.io/v1/browser-callback; // String | The redirect URI to use for authentication.
let opts = {
  'responseType': code, // String | The type of response to return.
  'scope': read_write, // String | The scope to use for authentication.
  'state':  // String | The state to use for authentication.
};
apiInstance.authorizeV2OauthAuthorizeGet(clientId, redirectUri, opts, (error, data, response) => {
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
 **clientId** | **String**| The client ID to use for authentication. | 
 **redirectUri** | **String**| The redirect URI to use for authentication. | 
 **responseType** | **String**| The type of response to return. | [optional] [default to &#39;code&#39;]
 **scope** | **String**| The scope to use for authentication. | [optional] [default to &#39;read_write&#39;]
 **state** | **String**| The state to use for authentication. | [optional] [default to &#39;&#39;]

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authorizeV2OauthAuthorizeGet_0

> {String: String} authorizeV2OauthAuthorizeGet_0(clientId, redirectUri, opts)

Authorize

Authorize an email address to use for authentication.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let clientId = cli_1234567890; // String | The client ID to use for authentication.
let redirectUri = https://oauth.pstmn.io/v1/browser-callback; // String | The redirect URI to use for authentication.
let opts = {
  'responseType': code, // String | The type of response to return.
  'scope': read_write, // String | The scope to use for authentication.
  'state':  // String | The state to use for authentication.
};
apiInstance.authorizeV2OauthAuthorizeGet_0(clientId, redirectUri, opts, (error, data, response) => {
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
 **clientId** | **String**| The client ID to use for authentication. | 
 **redirectUri** | **String**| The redirect URI to use for authentication. | 
 **responseType** | **String**| The type of response to return. | [optional] [default to &#39;code&#39;]
 **scope** | **String**| The scope to use for authentication. | [optional] [default to &#39;read_write&#39;]
 **state** | **String**| The state to use for authentication. | [optional] [default to &#39;&#39;]

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

let apiInstance = new VersifylabsVersifyClient.AuthApi();
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


## getUserInfoV2OauthUserInfoGet

> User getUserInfoV2OauthUserInfoGet()

Get current user

Get current user

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';
let defaultClient = VersifylabsVersifyClient.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VersifylabsVersifyClient.AuthApi();
apiInstance.getUserInfoV2OauthUserInfoGet((error, data, response) => {
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


## loginV2AuthLoginPost

> {String: String} loginV2AuthLoginPost(email)

Login

Request a one-time passcode to an email address.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let email = jane@example.com; // String | 
apiInstance.loginV2AuthLoginPost(email, (error, data, response) => {
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
 **email** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginV2AuthLoginPost_0

> {String: String} loginV2AuthLoginPost_0(email)

Login

Request a one-time passcode to an email address.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let email = jane@example.com; // String | 
apiInstance.loginV2AuthLoginPost_0(email, (error, data, response) => {
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
 **email** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerV2AuthRegisterPost

> {String: String} registerV2AuthRegisterPost(body)

Register

Register a new user.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let body = jane@example.com; // String | 
apiInstance.registerV2AuthRegisterPost(body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerV2AuthRegisterPost_0

> {String: String} registerV2AuthRegisterPost_0(body)

Register

Register a new user.

### Example

```javascript
import VersifylabsVersifyClient from '@versifylabs/versify-client';

let apiInstance = new VersifylabsVersifyClient.AuthApi();
let body = jane@example.com; // String | 
apiInstance.registerV2AuthRegisterPost_0(body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

**{String: String}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
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

let apiInstance = new VersifylabsVersifyClient.AuthApi();
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

