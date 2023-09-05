import React from "react";
import Form from "react-bootstrap/Form";
import { restoreDateTimeFormat, changeDateTimeFormat } from "../../util/index";
import { getToolTip } from "../../util";
const DatetimeContent = props => {
  const {
    field,
    formData,
    setFormData
  } = props;
  const tooltip = getToolTip(field.misc.info);
  const handleChange = (event, field) => {
    event.preventDefault();
    let newData = {
      ...formData,
      [field.dataSourceKey]: event.target.value
    };
    setFormData(newData);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    key: field.dataSourceKey,
    className: "modal-layout"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: "form-label"
  }, field.label), tooltip, /*#__PURE__*/React.createElement(Form.Control, {
    type: field.type,
    id: field.dataSourceKey,
    value: formData[field.dataSourceKey],
    onChange: e => handleChange(e, field)
  })));
};
export default DatetimeContent;