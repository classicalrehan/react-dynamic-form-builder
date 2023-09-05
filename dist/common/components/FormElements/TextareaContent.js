import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
import { INVALID_FORM_FIELD_CLASS } from "../../util/constants";
const TextareaContent = props => {
  const {
    field,
    formData,
    setFormData,
    isInvalid
  } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const handleChange = (event, field) => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: event.target.value
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement("div", {
    key: field.id,
    className: "col-sm-4 form-group"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), tooltip, /*#__PURE__*/React.createElement(Form.Control, {
    as: "textarea",
    placeholder: field.placeholder,
    onChange: e => props.handleChange ? props.handleChange(e, field) : handleChange(e, field),
    onBlur: e => props.handleChange ? props.handleChange(e, field) : handleChange(e, field),
    value: formData[field.dataSourceKey] || field.misc.defaultValue,
    className: isInvalid ? INVALID_FORM_FIELD_CLASS : "",
    required: field.misc.required ? true : false,
    rows: field.misc.row ? field.misc.row : 3
  }));
};
export default TextareaContent;