import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../../util";
import { INVALID_FORM_FIELD_CLASS } from "../../../util/constants";
import * as FaIcons from 'react-icons/fa';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import './styles.css';
const JSONTextboxContent = props => {
  const {
    field,
    formData,
    setFormData,
    options,
    isInvalid,
    defaultValue
  } = props;
  const styleClass = addRequiredLabel(field);
  const handleChange = (i, e) => {
    let newFormValues = [...formData[field.dataSourceKey]];
    newFormValues[i][e.target.name] = e.target.value;
    const newData = {
      ...formData,
      [field.dataSourceKey]: [...newFormValues]
    };
    setFormData(newData);
  };
  let addFormFields = () => {
    let item = [...formData[field.dataSourceKey], ...defaultValue];
    const newData = {
      ...formData,
      [field.dataSourceKey]: item
    };
    setFormData(newData);
  };
  const removeFormFields = i => {
    let newFormValues = [...formData[field.dataSourceKey]];
    newFormValues.splice(i, 1);
    const newData = {
      ...formData,
      [field.dataSourceKey]: newFormValues
    };
    setFormData(newData);
  };
  /**
  *
  * Generating input fields of modal form from JSON
  * @param {JSON} config
  */
  const generateInputFields = (field, rowIndex, idx) => {
    switch (field.type) {
      case "number":
      case "text":
        return getTextboxContent(field, rowIndex, idx);
      case "dropdown":
        return getDropdownContent(field, rowIndex, idx);
      default:
        return null;
    }
  };
  const getODropDownOption = data => {
    const options = [];
    for (const option in data) {
      options.push( /*#__PURE__*/React.createElement("option", {
        value: data[option].id,
        key: option,
        name: data[option].name
      }, " ", data[option].name, " "));
    }
    return options;
  };
  const getDropdownContent = (element, rowIndex, idx) => {
    const options = getODropDownOption(element.options);
    return /*#__PURE__*/React.createElement(Form.Control, {
      as: "select",
      key: `${field.id}${element.id}${field.dataSourceKey}`,
      id: element.name,
      name: element.keyName,
      value: formData[field.dataSourceKey][rowIndex][element.keyName] || "",
      onChange: e => handleChange(rowIndex, e),
      className: "form-select"
    }, element.showDefaultOption ? /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select your option") : /*#__PURE__*/React.createElement("option", {
      value: "",
      hidden: true
    }, "Select your option"), options);
  };
  const getTextboxContent = (element, rowIndex, idx) => {
    return /*#__PURE__*/React.createElement(Form.Control, {
      key: `${field.id}${element.id}${field.dataSourceKey}`,
      type: element.type,
      placeholder: element.placeholder,
      onChange: e => handleChange(rowIndex, e),
      value: formData[field.dataSourceKey][rowIndex][element.keyName] || "",
      className: isInvalid ? INVALID_FORM_FIELD_CLASS : "col-sm-6",
      name: element.keyName
    });
  };
  const getFieldOptions = rowIndex => {
    let list = [];
    let option;
    options.forEach((element, index) => {
      option = generateInputFields(element, rowIndex, index);
      const tooltip = getToolTip(element.misc?.info);
      list.push( /*#__PURE__*/React.createElement("div", {
        className: "col-sm-5",
        key: `${field.id}${element.id}${index}`
      }, /*#__PURE__*/React.createElement("label", null, element.label), tooltip, option));
    });
    return list;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: `field- ${field.dataSourceKey}-${field.id}`,
    className: "col-sm-12 JSONTextboxContent"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    key: `${field.id}${field.dataSourceKey}label`,
    className: styleClass
  }, field.label), formData[field.dataSourceKey].map((element, index) => /*#__PURE__*/React.createElement("div", {
    className: "row form-inline",
    key: `form-${field.id}${field.dataSourceKey}${index}`
  }, getFieldOptions(index), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-2",
    key: `action${index}${field.dataSourceKey}${field.id}`
  }, index ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(FaIcons.FaTimesCircle, {
    className: "multiInputIcon red",
    onClick: () => removeFormFields(index),
    key: `iconremove-${field.id}${field.dataSourceKey}${index}`
  })) : null,
  //last element
  index + 1 === formData[field.dataSourceKey].length ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(FaIcons.FaPlusCircle, {
    key: `iconadd-${field.id}${field.dataSourceKey}${index}`,
    className: "multiInputIcon green",
    onClick: () => addFormFields(index, defaultValue)
  })) : /*#__PURE__*/React.createElement(React.Fragment, null))))));
};
export default JSONTextboxContent;