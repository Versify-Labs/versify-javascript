# VersifylabsVersifyClient.Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the message | [optional] 
**account** | **String** | The account the message belongs to | 
**bccList** | **[String]** | The bcc list of the message | [optional] 
**ccList** | **[String]** | The cc list of the message | [optional] 
**contentBody** | **String** | The body of the message | [optional] [default to &#39;&#39;]
**contentPreheader** | **String** | The preheader of the message | [optional] 
**contentSubject** | **String** | The subject of the message | [optional] 
**created** | **Number** | The timestamp when the event was created | [optional] 
**fromEmail** | **String** | The from email of the message | [optional] 
**fromName** | **String** | The from name of the message | [optional] 
**messageType** | [**MessageType**](MessageType.md) | The type of the message | [optional] 
**metadata** | **Object** | Arbitrary metadata associated with the object | [optional] 
**object** | **String** | The object type. Always \&quot;message\&quot; | [optional] [default to &#39;message&#39;]
**replyToEmail** | **String** | The reply to email of the message | [optional] 
**status** | **String** | The status of the message | [optional] [default to &#39;draft&#39;]
**toContact** | **String** | The to contact of the message | [optional] 
**toEmail** | **String** | The to email of the message | [optional] 
**toName** | **String** | The to name of the message | [optional] 
**updated** | **Number** | The timestamp when the event was last updated | [optional] 


