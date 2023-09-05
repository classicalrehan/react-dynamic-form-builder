import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
const SwitchContent = props => {
  const {
    field,
    formData,
    setFormData
  } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const handleChange = e => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: e.target.checked
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement("div", {
    key: field.id,
    className: field.misc.className
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), tooltip, /*#__PURE__*/React.createElement(Form.Check, {
    type: "switch",
    id: "flexSwitchCheckDefault",
    onChange: e => props.handleChange ? props.handleChange(e, field) : handleChange(e),
    checked: formData[field.dataSourceKey] || false,
    value: formData[field.dataSourceKey] || field.misc.defaultValue
  }));
};
export default SwitchContent;