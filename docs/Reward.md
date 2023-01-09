# VersifyApi.Reward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the reward | [optional] 
**account** | **String** | The account the reward belongs to | 
**active** | **Boolean** | Whether the reward is active | [optional] [default to true]
**created** | **Number** | The timestamp when the event was created | [optional] 
**description** | **String** | The description of the reward | [optional] [default to &#39;&#39;]
**image** | **String** | The image of the reward | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the reward | [optional] [default to &#39;&#39;]
**object** | **String** | The object type. Always \&quot;reward\&quot; | [optional] [default to &#39;reward&#39;]
**rewardType** | [**RewardType**](RewardType.md) | The type of the reward | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


