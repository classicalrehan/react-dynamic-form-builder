import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
const RadioContent = props => {
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
    options.push( /*#__PURE__*/React.createElement(React.Fragment, {
      key: `option-${field.dataSourceKey}${data[option].id}`
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      key: `${field.dataSourceKey}${data[option].id}`,
      value: data[option].id,
      name: field.dataSourceKey,
      onChange: e => props.handleChange ? props.handleChange(e, field) : handleChange(e),
      checked: formData[field.dataSourceKey] === parseInt(data[option].id)
    }), /*#__PURE__*/React.createElement(Form.Label, {
      key: `label-${data[option].id}`,
      className: styleClass
    }, data[option].name, " ")));
  }
  const handleChange = e => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: parseInt(e.target.value)
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement("div", {
    key: field.id,
    className: field.misc.className
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), /*#__PURE__*/React.createElement("br", null), tooltip, options);
};
export default RadioContent;