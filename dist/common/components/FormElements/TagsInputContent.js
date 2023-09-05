import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel } from "../../util";
import Select from 'react-select';
const TagsInputContent = props => {
  const {
    field,
    formData,
    setFormData
  } = props;
  const styleClass = addRequiredLabel(field);
  /**
   * 
   * @param {*} value 
   */
  const handleChange = value => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: value
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: "field-" + field.dataSourceKey,
    className: field.misc.className
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), /*#__PURE__*/React.createElement(Select, {
    id: field.dataSourceKey,
    isMulti: field.misc.multi ? true : false,
    value: formData[field.dataSourceKey] || field.misc.defaultValue,
    onChange: e => props.handleChange ? props.handleChange(e, field) : handleChange(e, field),
    w: true,
    options: field.options,
    placeholder: field.placeholder,
    isSearchable: true
  })));
};
export default TagsInputContent;