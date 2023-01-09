# VersifyApi.Mint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the mint | [optional] 
**account** | **String** | The account the mint belongs to | 
**asset** | **String** | The asset the mint is for | 
**contact** | **String** | The contact the mint is for | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**email** | **String** | The email address of the contact the mint is for. | [optional] 
**journey** | **String** | The ID of the journey the mint is for. | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**object** | **String** | The object type. Always \&quot;mint\&quot; | [optional] [default to &#39;mint&#39;]
**quantity** | **Number** | The quantity of the asset being minted | [optional] [default to 1]
**run** | **String** | The journey run the mint is for | [optional] 
**signature** | **String** | The signature for the mint | [optional] 
**status** | [**MintStatus**](MintStatus.md) | The status of the mint | [optional] 
**transaction** | **String** | The transaction the mint is for | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 
**walletAddress** | **String** | The wallet address the mint is for | [optional] 


