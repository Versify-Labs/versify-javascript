# VersifylabsVersifyClient.Claim

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the claim | [optional] 
**account** | **String** | The account the claim belongs to | 
**asset** | **String** | The asset being claimed | 
**code** | **String** | The code used to submit the claim. | 
**created** | **Number** | The timestamp when the event was created | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**object** | **String** | The object type. Always \&quot;claim\&quot; | [optional] [default to &#39;claim&#39;]
**quantity** | **Number** | The number of assets being claimed | [optional] [default to 1]
**status** | [**ClaimStatus**](ClaimStatus.md) | The status of the claim | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


