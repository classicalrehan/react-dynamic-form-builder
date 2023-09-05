import { OTHER_CLIENT_TYPE } from "./constants";
import * as moment from 'moment';
import * as FaIcons from 'react-icons/fa';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
export const handleError = error => {
  return error.statusText;
};

// changing date time format as per mysql db

export const changeDateTimeFormat = datetime => {
  const idx = datetime.indexOf("T");
  const startingString = datetime.substr(0, idx);
  const endingString = datetime.substr(idx + 1);
  return startingString + " " + endingString + ":00";
};

// changing date time format as per date time input field

export const restoreDateTimeFormat = datetime => {
  if (datetime && datetime.length > 3) {
    const idx = datetime.indexOf(" ");
    const startingString = datetime.substr(0, idx);
    const endingString = datetime.substr(idx + 1);
    return startingString + "T" + endingString;
  }
  return datetime;
};

// converting 24hr format time to 12hr format

export function convertTime(time24) {
  let ts = time24;
  let index = ts.indexOf(":");
  let H = ts.substr(0, index);
  let h = H % 12 || 12;
  h = h < 10 ? "0" + h : h;
  let ampm = H < 12 ? " AM" : " PM";
  ts = h + ":" + ts.substr(index + 1) + ampm;
  return ts;
}

// get current date and time
export const getCurrentDateandTime = () => {
  var currentdate = new Date();
  var day = currentdate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  var month = currentdate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var hour = currentdate.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  var min = currentdate.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var time = hour + ":" + min + ":00";
  return currentdate.getFullYear() + "-" + month + "-" + day + " " + time;
};
export function storeAppHeaders(response) {
  console.log(response);
  if (response !== "") {
    let headers = response.headers.split("\r\n").reduce((result, current) => {
      let [name, value] = current.split(": ");
      result[name] = value;
      return result;
    }, {});
    const appId = headers["x-appid"];
    const companyId = headers["x-companyid"];
    const userId = headers["x-userid"];
    const roleName = headers["x-rolename"];
    const sessionHeaders = `x-appId: ${appId};x-companyId: ${companyId};x-userId: ${userId};x-roleName: ${roleName}`;
    window.sessionStorage.setItem("userDetails", sessionHeaders);
    setUserDetailsObjectInSessionStorage(headers);
  }
}
export const setUserDetailsObjectInSessionStorage = headers => {
  const resultantArrayOfHeaders = {
    "x-appid": headers["x-appid"],
    "x-companyid": headers["x-companyid"],
    "x-userid": headers["x-userid"],
    "x-rolename": headers["x-rolename"]
  };
  window.sessionStorage.setItem("userDetailsObject", JSON.stringify(resultantArrayOfHeaders));
};
export function getAppHeadersObject() {
  return JSON.parse(window.sessionStorage.getItem("userDetailsObject"));
}
export function getAppHeaders(response) {
  let sessionHeaders = window.sessionStorage.getItem("userDetails");
  if (sessionHeaders) {
    const resultantArrayOfHeaders = sessionHeaders.split(";");
    return resultantArrayOfHeaders;
  }
  return null;
}
export function getHeadersForBody() {
  let sessionHeaders = window.sessionStorage.getItem("userDetails");
  if (sessionHeaders) {
    const resultantArrayOfHeaders = sessionHeaders.split(";");
    let headersValues = [];
    for (const header in resultantArrayOfHeaders) {
      const value = resultantArrayOfHeaders[header].split(":");
      headersValues.push(value[1].trim());
    }
    const headers = {
      appIdList: JSON.parse(headersValues[0]),
      companyId: headersValues[1],
      createdBy: headersValues[2],
      roleName: headersValues[3]
    };
    return headers;
  }
  return {};
}

/**
 * Per page
 * Mega Object
 * this object contains the list of all per page values mapping
 */
export const displayPerPage = {
  10: 10,
  20: 20,
  50: 50,
  100: 100
};
/**
 * 
 * @param {*} field 
 * @param {*} clientType 
 * @returns 
 */
export const isOtherClient = (field, clientType) => {
  /**
   * Validate is field 
   * Is client type Other
   */
  if (clientType === OTHER_CLIENT_TYPE) {
    return true;
  }
  return false;
};
/**
 * 
 * @param {*} props 
 * @param {*} params 
 * Change URL router without refreshing the page
 */
export const changeRouterState = (props, path, params) => {
  props.history.push(path);
};
export function addRequiredLabel(field) {
  return `form-label ${field.misc.required ? `required` : ``}`;
}
export const getDate = date => {
  if (date) {
    return moment(date).format("DoMMMYY HH:mm a");
  }
  return '';
};
export const getToolTip = value => {
  if (value) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FaIcons.FaInfoCircle, {
      className: "infoIcon",
      "data-tooltip-content": value
    }), /*#__PURE__*/React.createElement(ReactTooltip, {
      anchorSelect: ".infoIcon",
      place: "right"
    }));
  }
};