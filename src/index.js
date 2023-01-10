/**
 * Versify API
 * Versify API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Account from './model/Account';
import Account1 from './model/Account1';
import Account2 from './model/Account2';
import AccountCreate from './model/AccountCreate';
import AccountFeatures from './model/AccountFeatures';
import AccountMetrics from './model/AccountMetrics';
import AccountStatus from './model/AccountStatus';
import AccountUpdate from './model/AccountUpdate';
import Action from './model/Action';
import ActionConfig from './model/ActionConfig';
import ActionConfiguration from './model/ActionConfiguration';
import ActionType from './model/ActionType';
import ApiDeleteResponse from './model/ApiDeleteResponse';
import ApiListResponse from './model/ApiListResponse';
import ApiSearchResponse from './model/ApiSearchResponse';
import App from './model/App';
import Asset from './model/Asset';
import Asset1 from './model/Asset1';
import Asset10 from './model/Asset10';
import Asset11 from './model/Asset11';
import Asset12 from './model/Asset12';
import Asset13 from './model/Asset13';
import Asset2 from './model/Asset2';
import Asset3 from './model/Asset3';
import Asset4 from './model/Asset4';
import Asset5 from './model/Asset5';
import Asset6 from './model/Asset6';
import Asset7 from './model/Asset7';
import Asset8 from './model/Asset8';
import Asset9 from './model/Asset9';
import AssetCreate from './model/AssetCreate';
import AssetStatus from './model/AssetStatus';
import AssetUpdate from './model/AssetUpdate';
import Billing from './model/Billing';
import BillingSettings from './model/BillingSettings';
import BlockchainType from './model/BlockchainType';
import Brand from './model/Brand';
import BrandSettings from './model/BrandSettings';
import BrandingSettings from './model/BrandingSettings';
import Claim from './model/Claim';
import ClaimCreate from './model/ClaimCreate';
import ClaimUpdate from './model/ClaimUpdate';
import Collection from './model/Collection';
import CollectionCreate from './model/CollectionCreate';
import CollectionUpdate from './model/CollectionUpdate';
import Contact from './model/Contact';
import Contact1 from './model/Contact1';
import Contact10 from './model/Contact10';
import Contact11 from './model/Contact11';
import Contact12 from './model/Contact12';
import Contact13 from './model/Contact13';
import Contact2 from './model/Contact2';
import Contact3 from './model/Contact3';
import Contact4 from './model/Contact4';
import Contact5 from './model/Contact5';
import Contact6 from './model/Contact6';
import Contact7 from './model/Contact7';
import Contact8 from './model/Contact8';
import Contact9 from './model/Contact9';
import ContactCreate from './model/ContactCreate';
import ContactStatus from './model/ContactStatus';
import ContactUpdate from './model/ContactUpdate';
import Event from './model/Event';
import EventCreate from './model/EventCreate';
import EventUpdate from './model/EventUpdate';
import HTTPValidationError from './model/HTTPValidationError';
import IdentityProvider from './model/IdentityProvider';
import Journey from './model/Journey';
import JourneyCreate from './model/JourneyCreate';
import JourneyUpdate from './model/JourneyUpdate';
import Location from './model/Location';
import Location1 from './model/Location1';
import Location2Inner from './model/Location2Inner';
import Message from './model/Message';
import MessageCreate from './model/MessageCreate';
import MessageType from './model/MessageType';
import MessageUpdate from './model/MessageUpdate';
import Mint from './model/Mint';
import MintCreate from './model/MintCreate';
import MintStatus from './model/MintStatus';
import MintUpdate from './model/MintUpdate';
import Name from './model/Name';
import Name1 from './model/Name1';
import Name2 from './model/Name2';
import Name3 from './model/Name3';
import Name4 from './model/Name4';
import Note from './model/Note';
import NoteCreate from './model/NoteCreate';
import NoteUpdate from './model/NoteUpdate';
import Operator from './model/Operator';
import PersonName from './model/PersonName';
import Query from './model/Query';
import Query1 from './model/Query1';
import QueryValue from './model/QueryValue';
import Redemption from './model/Redemption';
import RedemptionCreate from './model/RedemptionCreate';
import RedemptionUpdate from './model/RedemptionUpdate';
import Reward from './model/Reward';
import RewardCreate from './model/RewardCreate';
import RewardType from './model/RewardType';
import RewardUpdate from './model/RewardUpdate';
import SearchContacts from './model/SearchContacts';
import SearchQuery from './model/SearchQuery';
import SocialProfile from './model/SocialProfile';
import SubscriptionPlan from './model/SubscriptionPlan';
import SubscriptionStatus from './model/SubscriptionStatus';
import Tag from './model/Tag';
import TagCreate from './model/TagCreate';
import TagUpdate from './model/TagUpdate';
import TeamMember from './model/TeamMember';
import TeamMemberRole from './model/TeamMemberRole';
import Trigger from './model/Trigger';
import Trigger1 from './model/Trigger1';
import TriggerConfig from './model/TriggerConfig';
import TriggerConfiguration from './model/TriggerConfiguration';
import TriggerScheduleConfig from './model/TriggerScheduleConfig';
import TriggerScheduleConfiguration from './model/TriggerScheduleConfiguration';
import TriggerType from './model/TriggerType';
import User from './model/User';
import User1 from './model/User1';
import UserUpdate from './model/UserUpdate';
import ValidationError from './model/ValidationError';
import WalletPosition from './model/WalletPosition';
import Webhook from './model/Webhook';
import WebhookCreate from './model/WebhookCreate';
import WebhookUpdate from './model/WebhookUpdate';
import AccountsApi from './api/AccountsApi';
import AssetsApi from './api/AssetsApi';
import ClaimsApi from './api/ClaimsApi';
import CollectionsApi from './api/CollectionsApi';
import ContactsApi from './api/ContactsApi';
import EventsApi from './api/EventsApi';
import JourneysApi from './api/JourneysApi';
import MessagesApi from './api/MessagesApi';
import MintsApi from './api/MintsApi';
import NotesApi from './api/NotesApi';
import RedemptionsApi from './api/RedemptionsApi';
import RewardsApi from './api/RewardsApi';
import TagsApi from './api/TagsApi';
import UsersApi from './api/UsersApi';
import WebhooksApi from './api/WebhooksApi';


/**
* Versify API documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VersifyClient = require('index'); // See note below*.
* var xxxSvc = new VersifyClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VersifyClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new VersifyClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VersifyClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The Account1 model constructor.
     * @property {module:model/Account1}
     */
    Account1,

    /**
     * The Account2 model constructor.
     * @property {module:model/Account2}
     */
    Account2,

    /**
     * The AccountCreate model constructor.
     * @property {module:model/AccountCreate}
     */
    AccountCreate,

    /**
     * The AccountFeatures model constructor.
     * @property {module:model/AccountFeatures}
     */
    AccountFeatures,

    /**
     * The AccountMetrics model constructor.
     * @property {module:model/AccountMetrics}
     */
    AccountMetrics,

    /**
     * The AccountStatus model constructor.
     * @property {module:model/AccountStatus}
     */
    AccountStatus,

    /**
     * The AccountUpdate model constructor.
     * @property {module:model/AccountUpdate}
     */
    AccountUpdate,

    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action,

    /**
     * The ActionConfig model constructor.
     * @property {module:model/ActionConfig}
     */
    ActionConfig,

    /**
     * The ActionConfiguration model constructor.
     * @property {module:model/ActionConfiguration}
     */
    ActionConfiguration,

    /**
     * The ActionType model constructor.
     * @property {module:model/ActionType}
     */
    ActionType,

    /**
     * The ApiDeleteResponse model constructor.
     * @property {module:model/ApiDeleteResponse}
     */
    ApiDeleteResponse,

    /**
     * The ApiListResponse model constructor.
     * @property {module:model/ApiListResponse}
     */
    ApiListResponse,

    /**
     * The ApiSearchResponse model constructor.
     * @property {module:model/ApiSearchResponse}
     */
    ApiSearchResponse,

    /**
     * The App model constructor.
     * @property {module:model/App}
     */
    App,

    /**
     * The Asset model constructor.
     * @property {module:model/Asset}
     */
    Asset,

    /**
     * The Asset1 model constructor.
     * @property {module:model/Asset1}
     */
    Asset1,

    /**
     * The Asset10 model constructor.
     * @property {module:model/Asset10}
     */
    Asset10,

    /**
     * The Asset11 model constructor.
     * @property {module:model/Asset11}
     */
    Asset11,

    /**
     * The Asset12 model constructor.
     * @property {module:model/Asset12}
     */
    Asset12,

    /**
     * The Asset13 model constructor.
     * @property {module:model/Asset13}
     */
    Asset13,

    /**
     * The Asset2 model constructor.
     * @property {module:model/Asset2}
     */
    Asset2,

    /**
     * The Asset3 model constructor.
     * @property {module:model/Asset3}
     */
    Asset3,

    /**
     * The Asset4 model constructor.
     * @property {module:model/Asset4}
     */
    Asset4,

    /**
     * The Asset5 model constructor.
     * @property {module:model/Asset5}
     */
    Asset5,

    /**
     * The Asset6 model constructor.
     * @property {module:model/Asset6}
     */
    Asset6,

    /**
     * The Asset7 model constructor.
     * @property {module:model/Asset7}
     */
    Asset7,

    /**
     * The Asset8 model constructor.
     * @property {module:model/Asset8}
     */
    Asset8,

    /**
     * The Asset9 model constructor.
     * @property {module:model/Asset9}
     */
    Asset9,

    /**
     * The AssetCreate model constructor.
     * @property {module:model/AssetCreate}
     */
    AssetCreate,

    /**
     * The AssetStatus model constructor.
     * @property {module:model/AssetStatus}
     */
    AssetStatus,

    /**
     * The AssetUpdate model constructor.
     * @property {module:model/AssetUpdate}
     */
    AssetUpdate,

    /**
     * The Billing model constructor.
     * @property {module:model/Billing}
     */
    Billing,

    /**
     * The BillingSettings model constructor.
     * @property {module:model/BillingSettings}
     */
    BillingSettings,

    /**
     * The BlockchainType model constructor.
     * @property {module:model/BlockchainType}
     */
    BlockchainType,

    /**
     * The Brand model constructor.
     * @property {module:model/Brand}
     */
    Brand,

    /**
     * The BrandSettings model constructor.
     * @property {module:model/BrandSettings}
     */
    BrandSettings,

    /**
     * The BrandingSettings model constructor.
     * @property {module:model/BrandingSettings}
     */
    BrandingSettings,

    /**
     * The Claim model constructor.
     * @property {module:model/Claim}
     */
    Claim,

    /**
     * The ClaimCreate model constructor.
     * @property {module:model/ClaimCreate}
     */
    ClaimCreate,

    /**
     * The ClaimUpdate model constructor.
     * @property {module:model/ClaimUpdate}
     */
    ClaimUpdate,

    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection,

    /**
     * The CollectionCreate model constructor.
     * @property {module:model/CollectionCreate}
     */
    CollectionCreate,

    /**
     * The CollectionUpdate model constructor.
     * @property {module:model/CollectionUpdate}
     */
    CollectionUpdate,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Contact1 model constructor.
     * @property {module:model/Contact1}
     */
    Contact1,

    /**
     * The Contact10 model constructor.
     * @property {module:model/Contact10}
     */
    Contact10,

    /**
     * The Contact11 model constructor.
     * @property {module:model/Contact11}
     */
    Contact11,

    /**
     * The Contact12 model constructor.
     * @property {module:model/Contact12}
     */
    Contact12,

    /**
     * The Contact13 model constructor.
     * @property {module:model/Contact13}
     */
    Contact13,

    /**
     * The Contact2 model constructor.
     * @property {module:model/Contact2}
     */
    Contact2,

    /**
     * The Contact3 model constructor.
     * @property {module:model/Contact3}
     */
    Contact3,

    /**
     * The Contact4 model constructor.
     * @property {module:model/Contact4}
     */
    Contact4,

    /**
     * The Contact5 model constructor.
     * @property {module:model/Contact5}
     */
    Contact5,

    /**
     * The Contact6 model constructor.
     * @property {module:model/Contact6}
     */
    Contact6,

    /**
     * The Contact7 model constructor.
     * @property {module:model/Contact7}
     */
    Contact7,

    /**
     * The Contact8 model constructor.
     * @property {module:model/Contact8}
     */
    Contact8,

    /**
     * The Contact9 model constructor.
     * @property {module:model/Contact9}
     */
    Contact9,

    /**
     * The ContactCreate model constructor.
     * @property {module:model/ContactCreate}
     */
    ContactCreate,

    /**
     * The ContactStatus model constructor.
     * @property {module:model/ContactStatus}
     */
    ContactStatus,

    /**
     * The ContactUpdate model constructor.
     * @property {module:model/ContactUpdate}
     */
    ContactUpdate,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventCreate model constructor.
     * @property {module:model/EventCreate}
     */
    EventCreate,

    /**
     * The EventUpdate model constructor.
     * @property {module:model/EventUpdate}
     */
    EventUpdate,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The IdentityProvider model constructor.
     * @property {module:model/IdentityProvider}
     */
    IdentityProvider,

    /**
     * The Journey model constructor.
     * @property {module:model/Journey}
     */
    Journey,

    /**
     * The JourneyCreate model constructor.
     * @property {module:model/JourneyCreate}
     */
    JourneyCreate,

    /**
     * The JourneyUpdate model constructor.
     * @property {module:model/JourneyUpdate}
     */
    JourneyUpdate,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The Location1 model constructor.
     * @property {module:model/Location1}
     */
    Location1,

    /**
     * The Location2Inner model constructor.
     * @property {module:model/Location2Inner}
     */
    Location2Inner,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The MessageCreate model constructor.
     * @property {module:model/MessageCreate}
     */
    MessageCreate,

    /**
     * The MessageType model constructor.
     * @property {module:model/MessageType}
     */
    MessageType,

    /**
     * The MessageUpdate model constructor.
     * @property {module:model/MessageUpdate}
     */
    MessageUpdate,

    /**
     * The Mint model constructor.
     * @property {module:model/Mint}
     */
    Mint,

    /**
     * The MintCreate model constructor.
     * @property {module:model/MintCreate}
     */
    MintCreate,

    /**
     * The MintStatus model constructor.
     * @property {module:model/MintStatus}
     */
    MintStatus,

    /**
     * The MintUpdate model constructor.
     * @property {module:model/MintUpdate}
     */
    MintUpdate,

    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name,

    /**
     * The Name1 model constructor.
     * @property {module:model/Name1}
     */
    Name1,

    /**
     * The Name2 model constructor.
     * @property {module:model/Name2}
     */
    Name2,

    /**
     * The Name3 model constructor.
     * @property {module:model/Name3}
     */
    Name3,

    /**
     * The Name4 model constructor.
     * @property {module:model/Name4}
     */
    Name4,

    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note,

    /**
     * The NoteCreate model constructor.
     * @property {module:model/NoteCreate}
     */
    NoteCreate,

    /**
     * The NoteUpdate model constructor.
     * @property {module:model/NoteUpdate}
     */
    NoteUpdate,

    /**
     * The Operator model constructor.
     * @property {module:model/Operator}
     */
    Operator,

    /**
     * The PersonName model constructor.
     * @property {module:model/PersonName}
     */
    PersonName,

    /**
     * The Query model constructor.
     * @property {module:model/Query}
     */
    Query,

    /**
     * The Query1 model constructor.
     * @property {module:model/Query1}
     */
    Query1,

    /**
     * The QueryValue model constructor.
     * @property {module:model/QueryValue}
     */
    QueryValue,

    /**
     * The Redemption model constructor.
     * @property {module:model/Redemption}
     */
    Redemption,

    /**
     * The RedemptionCreate model constructor.
     * @property {module:model/RedemptionCreate}
     */
    RedemptionCreate,

    /**
     * The RedemptionUpdate model constructor.
     * @property {module:model/RedemptionUpdate}
     */
    RedemptionUpdate,

    /**
     * The Reward model constructor.
     * @property {module:model/Reward}
     */
    Reward,

    /**
     * The RewardCreate model constructor.
     * @property {module:model/RewardCreate}
     */
    RewardCreate,

    /**
     * The RewardType model constructor.
     * @property {module:model/RewardType}
     */
    RewardType,

    /**
     * The RewardUpdate model constructor.
     * @property {module:model/RewardUpdate}
     */
    RewardUpdate,

    /**
     * The SearchContacts model constructor.
     * @property {module:model/SearchContacts}
     */
    SearchContacts,

    /**
     * The SearchQuery model constructor.
     * @property {module:model/SearchQuery}
     */
    SearchQuery,

    /**
     * The SocialProfile model constructor.
     * @property {module:model/SocialProfile}
     */
    SocialProfile,

    /**
     * The SubscriptionPlan model constructor.
     * @property {module:model/SubscriptionPlan}
     */
    SubscriptionPlan,

    /**
     * The SubscriptionStatus model constructor.
     * @property {module:model/SubscriptionStatus}
     */
    SubscriptionStatus,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The TagCreate model constructor.
     * @property {module:model/TagCreate}
     */
    TagCreate,

    /**
     * The TagUpdate model constructor.
     * @property {module:model/TagUpdate}
     */
    TagUpdate,

    /**
     * The TeamMember model constructor.
     * @property {module:model/TeamMember}
     */
    TeamMember,

    /**
     * The TeamMemberRole model constructor.
     * @property {module:model/TeamMemberRole}
     */
    TeamMemberRole,

    /**
     * The Trigger model constructor.
     * @property {module:model/Trigger}
     */
    Trigger,

    /**
     * The Trigger1 model constructor.
     * @property {module:model/Trigger1}
     */
    Trigger1,

    /**
     * The TriggerConfig model constructor.
     * @property {module:model/TriggerConfig}
     */
    TriggerConfig,

    /**
     * The TriggerConfiguration model constructor.
     * @property {module:model/TriggerConfiguration}
     */
    TriggerConfiguration,

    /**
     * The TriggerScheduleConfig model constructor.
     * @property {module:model/TriggerScheduleConfig}
     */
    TriggerScheduleConfig,

    /**
     * The TriggerScheduleConfiguration model constructor.
     * @property {module:model/TriggerScheduleConfiguration}
     */
    TriggerScheduleConfiguration,

    /**
     * The TriggerType model constructor.
     * @property {module:model/TriggerType}
     */
    TriggerType,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The User1 model constructor.
     * @property {module:model/User1}
     */
    User1,

    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The WalletPosition model constructor.
     * @property {module:model/WalletPosition}
     */
    WalletPosition,

    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook,

    /**
     * The WebhookCreate model constructor.
     * @property {module:model/WebhookCreate}
     */
    WebhookCreate,

    /**
     * The WebhookUpdate model constructor.
     * @property {module:model/WebhookUpdate}
     */
    WebhookUpdate,

    /**
    * The AccountsApi service constructor.
    * @property {module:api/AccountsApi}
    */
    AccountsApi,

    /**
    * The AssetsApi service constructor.
    * @property {module:api/AssetsApi}
    */
    AssetsApi,

    /**
    * The ClaimsApi service constructor.
    * @property {module:api/ClaimsApi}
    */
    ClaimsApi,

    /**
    * The CollectionsApi service constructor.
    * @property {module:api/CollectionsApi}
    */
    CollectionsApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:api/ContactsApi}
    */
    ContactsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The JourneysApi service constructor.
    * @property {module:api/JourneysApi}
    */
    JourneysApi,

    /**
    * The MessagesApi service constructor.
    * @property {module:api/MessagesApi}
    */
    MessagesApi,

    /**
    * The MintsApi service constructor.
    * @property {module:api/MintsApi}
    */
    MintsApi,

    /**
    * The NotesApi service constructor.
    * @property {module:api/NotesApi}
    */
    NotesApi,

    /**
    * The RedemptionsApi service constructor.
    * @property {module:api/RedemptionsApi}
    */
    RedemptionsApi,

    /**
    * The RewardsApi service constructor.
    * @property {module:api/RewardsApi}
    */
    RewardsApi,

    /**
    * The TagsApi service constructor.
    * @property {module:api/TagsApi}
    */
    TagsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi
};
