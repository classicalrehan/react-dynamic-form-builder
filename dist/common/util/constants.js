export const INTERNAL_CLIENT_ID = 9999;
export const INTENAL_CLIENT_TYPE = 'Internal';
export const OTHER_CLIENT_TYPE = 'Other';
export const OTHER_CLIENT_ID = 2;
export const CAMPAIGN_TYPE_ID = 5;
export const CAMPAIGN_GROUP_ID = 2;
/**
* Start
* Constant for label, messages and other purpose
*/
export const SUCCESS_ADD_CAMPAIGN_MESSAGE = "Campaign added sucessfully.";
export const SUCCESS_UPDATE_CAMPAIGN_MESSAGE = "Campaign update sucessfully.";
export const ERROR_ADD_CAMPAIGN_MESSAGE = "Error in adding Campaign.";
export const SUCCESS_DELETED_CAMPAIGN_MESSAGE = "Campaign deleted sucessfully.";
export const ERROR_CAMPAIGN_MESSAGE = "Something went wrong, please try again later.";
export const CONFIRM_TO_DELETE_TITLE = "Confirm to delete";
export const CONFIRM_TO_DELETE_MESSAGE = "Are you sure to do this?";
export const CREATE_JOURNEY_BUTTON_LABEL = "Create New Journey";
export const CREATE_JOURNEY_MODAL_TITLE = "Enter Campaign Details";
/**
 * End 
*/
export const conditionalCampaignField = ["newClientName", "businessUnitId", "units", "pricePerUnit", "soNumber"];
export const conditionalClientName = ["Internal"];
export const campaignDataConstants = {
  campaignName: "campaignName",
  clientId: "clientId",
  newClientName: "newClientName",
  businessUnitId: "businessUnitId",
  units: "units",
  pricePerUnit: "pricePerUnit",
  soNumber: "soNumber"
};
export const CREATE_CAMPAIGN_PATH = "/spa/campaign/create";
export const EDIT_CAMPAIGN_PATH = "/spa/campaign/update";
export const ALL_CAMPAIGN_STATE = "/spa/campaign";
export const CREATE_JOURNEY_PATH = "/spa/journey/create";
export const UPDATE_JOURNEY_PATH = "/spa/journey/update";
export const LIST_JOURNEY_PATH = "/spa/journey";
export const CREATE_SEGMENT_PATH = "/spa/segment/create";
export const UPDATE_SEGEMENT_PATH = "/spa/segment/update";
export const LIST_SEGEMENT_PATH = "/spa/segment";
export const PHONE_REGEX = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
export const EMAIL_REGEX = new RegExp(/^[A-Z0-9._++-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
export const INVALID_FORM_FIELD_CLASS = "is-invalid";
export const HTTP_RESPONSE_CODE = {
  'OK': 200
};