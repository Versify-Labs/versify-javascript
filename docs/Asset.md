# VersifylabsVersifyClient.Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the asset | [optional] 
**account** | **String** | The account the asset belongs to | 
**chain** | [**BlockchainType**](BlockchainType.md) | The blockchain the asset is on | [optional] 
**collection** | **String** | The ID of the collection that the asset belongs to | 
**contractAddress** | **String** | The contract address of the asset | 
**created** | **Number** | The timestamp when the event was created | [optional] 
**description** | **String** | The description of the asset | 
**image** | **String** | The image of the asset | 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the asset. Displayed on third party apps. | 
**object** | **String** | The object type | [optional] [default to &#39;asset&#39;]
**properties** | **[Object]** | The properties of the asset. Displayed on third party apps. | [optional] 
**status** | [**AssetStatus**](AssetStatus.md) | The status of the asset | [optional] 
**tokenId** | **String** | The token ID of the asset | 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


