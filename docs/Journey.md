# VersifyApi.Journey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the journey | [optional] 
**account** | **String** | The account the journey belongs to | 
**active** | **Boolean** | Whether the journey is active | [optional] [default to true]
**created** | **Number** | The timestamp when the event was created | [optional] 
**description** | **String** | A description of the journey | [optional] [default to &#39;&#39;]
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**name** | **String** | The name of the journey. Internal facing. | 
**object** | **String** | The object type. Always \&quot;journey\&quot; | [optional] [default to &#39;journey&#39;]
**start** | **String** | The starting state of the journey | [optional] [default to &#39;start&#39;]
**states** | [**{String: Action}**](Action.md) | The states of the journey | [optional] 
**trigger** | [**Trigger1**](Trigger1.md) |  | 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


