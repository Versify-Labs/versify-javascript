# VersifyApi.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the webhook | [optional] 
**account** | **String** | The account the webhook belongs to | 
**active** | **Boolean** | Whether the webhook is active | [optional] [default to true]
**created** | **Number** | The timestamp when the event was created | [optional] 
**description** | **String** | A description of the webhook | [optional] 
**enabledEvents** | **[Object]** | The events that will trigger the webhook | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**object** | **String** | The object type | [optional] [default to &#39;webhook&#39;]
**updated** | **Number** | The timestamp when the event was last updated | [optional] 
**url** | **String** | The URL that will receive the webhook | 


