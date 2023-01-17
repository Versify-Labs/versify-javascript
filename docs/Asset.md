# VersifylabsVersifyClient.Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | The account the asset belongs to | 
**active** | **Boolean** | Whether the asset is currently available or not. | [optional] [default to true]
**blockchain** | [**BlockchainType**](BlockchainType.md) | The blockchain the asset is on | [optional] 
**collection** | **String** | The ID of the collection that the asset belongs to | 
**contractAddress** | **String** | The contract address of the asset | 
**created** | **Number** | The timestamp when the event was created | [optional] 
**_default** | **Boolean** | Whether this is the default asset for the account | [optional] [default to false]
**description** | **String** | The description of the asset | 
**id** | **String** | The ID of the asset | [optional] 
**image** | **String** | The image of the asset | 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the asset. Displayed on third party apps. | 
**object** | **String** | The object type | [optional] [default to &#39;asset&#39;]
**properties** | **[Object]** | The properties of the asset. Displayed on third party apps. | [optional] 
**status** | [**AssetStatus**](AssetStatus.md) | The status of the asset | [optional] 
**tokenId** | **String** | The token ID of the asset | 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


