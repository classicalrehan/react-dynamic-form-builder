import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
const DropdownContent = props => {
  const {
    field,
    formData,
    data,
    setFormData
  } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const options = [];
  for (const option in data) {
    options.push( /*#__PURE__*/React.createElement("option", {
      value: data[option].key,
      key: option,
      name: data[option].label
    }, " ", data[option].label, " "));
  }
  const handleDropdownChange = e => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: e.target.value
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement("div", {
    key: field.id,
    className: field.misc.className
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), tooltip, /*#__PURE__*/React.createElement(Form.Control, {
    as: "select",
    id: field.name,
    name: field.dataSourceKey,
    style: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none"
    },
    value: formData[field.dataSourceKey] ? formData[field.dataSourceKey] : "",
    onChange: e => props.handleChange ? props.handleChange(e, field) : handleDropdownChange(e),
    required: field.misc.required ? true : false,
    disabled: props.isEdit && field.misc.readonly ? true : false,
    className: "form-select"
  }, field.showDefaultOption ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select your option") : /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }, "Select your option"), options));
};
export default DropdownContent;