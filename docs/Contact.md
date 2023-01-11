# VersifylabsVersifyClient.Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the contact | [optional] 
**account** | **String** | The account the contact belongs to | 
**address** | [**Address1**](Address1.md) |  | [optional] 
**avatar** | **String** | The URL of the contact&#39;s avatar | [optional] 
**browser** | **String** | The browser used by the contact | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**email** | **String** | The email address of the contact | 
**lastSeen** | **Number** | The timestamp when the contact was last seen | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | [**Name**](Name.md) |  | [optional] 
**object** | **String** | The object type. Always &#39;contact&#39; | [optional] [default to &#39;contact&#39;]
**owner** | **String** | The ID of the user who owns the contact | [optional] 
**phoneNumber** | **String** | The phone number of the contact | [optional] 
**socialProfiles** | [**[SocialProfile]**](SocialProfile.md) | The social profiles associated with the contact | [optional] 
**status** | [**ContactStatus**](ContactStatus.md) | The status of the contact | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


