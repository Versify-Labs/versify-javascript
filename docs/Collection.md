# VersifylabsVersifyClient.Collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the collection | [optional] 
**account** | **String** | The account the collection belongs to | 
**active** | **Boolean** | Whether the asset is currently available or not. | [optional] [default to true]
**blockchain** | [**BlockchainType**](BlockchainType.md) | The blockchain the collection is on | [optional] 
**contractAddress** | **String** | The address of the contract | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**_default** | **Boolean** | Whether this is the default collection for the account | [optional] [default to false]
**description** | **String** | The description of the collection | [optional] 
**image** | **String** | The image of the collection | [optional] [default to &#39;https://cdn.versifylabs.com/branding/Logos/verisify-logo-transparent-bg.png&#39;]
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the collection | 
**object** | **String** | The object type. Always \&quot;collection\&quot; | [optional] [default to &#39;collection&#39;]
**signature** | **String** | The signature of the collection | [optional] 
**status** | [**CollectionStatus**](CollectionStatus.md) | The status of the collection | [optional] 
**transaction** | **String** | The transaction of the collection | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 
**uri** | **String** | The uri of the collection | [optional] 


