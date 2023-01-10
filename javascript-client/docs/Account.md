# VersifyClient.Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the account | [optional] 
**apps** | [**[App]**](App.md) | The apps associated with the account | [optional] 
**billing** | [**BillingSettings**](BillingSettings.md) |  | [optional] 
**brand** | [**BrandingSettings**](BrandingSettings.md) |  | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**domain** | **String** | The domain of the account | 
**features** | [**AccountFeatures**](AccountFeatures.md) |  | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the account | 
**object** | **String** | The object type | [optional] [default to &#39;account&#39;]
**status** | [**AccountStatus**](AccountStatus.md) | The status of the account | [optional] 
**team** | [**[TeamMember]**](TeamMember.md) | The team members and associated roles of the account | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


