# VersifyApi.ApiSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of items returned | [optional] [default to 0]
**data** | [**[Account]**](Account.md) | The list of items that match the filters and pagination parameters. | [optional] 
**hasMore** | **Boolean** | Whether there are more items to be returned | [optional] [default to false]
**object** | **String** | The object type | [optional] [default to &#39;search_result&#39;]
**url** | **String** | The URL of the search request | [optional] [default to &#39;/v1/items/search&#39;]


