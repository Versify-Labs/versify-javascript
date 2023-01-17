# VersifylabsVersifyClient.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the user | [optional] 
**active** | **Boolean** | Whether the user is active | [optional] [default to true]
**avatar** | **String** | The URL of the user&#39;s avatar | 
**created** | **Number** | The timestamp when the event was created | [optional] 
**email** | **String** | The email address of the user | 
**emailVerified** | **Boolean** | Whether the user&#39;s email address has been verified | [optional] [default to false]
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | [**Name3**](Name3.md) |  | [optional] 
**object** | **String** | The object type. Always \&quot;user\&quot; | [optional] [default to &#39;user&#39;]
**phoneNumber** | **String** | The phone number of the user | [optional] 
**phoneNumberVerified** | **Boolean** | Whether the user&#39;s phone number has been verified | [optional] [default to false]
**providers** | [**[IdentityProvider]**](IdentityProvider.md) | The identity providers the user belongs to | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


