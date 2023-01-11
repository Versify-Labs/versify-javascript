# VersifylabsVersifyClient.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the event | [optional] 
**account** | **String** | The account the event belongs to | 
**contact** | **String** | The contact the event is for | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**detail** | **Object** | Arbitrary metadata associated with the event | [optional] 
**detailType** | **String** | The type of event. For example, order.placed. | 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**object** | **String** | The object type. Always \&quot;event\&quot; | [optional] [default to &#39;event&#39;]
**source** | **String** | The source of the event | [optional] [default to &#39;versify&#39;]
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


