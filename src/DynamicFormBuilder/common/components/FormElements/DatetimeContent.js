import React from "react";
import Form from "react-bootstrap/Form";
import { getToolTip } from "../../util";

/**
 * 
 * @param {*} props 
 * @returns 
 */
const DatetimeContent = (props) => {
  const { field, formData, setFormData } = props;
  const tooltip = getToolTip(field.misc.info);
  /**
   * 
   * @param {*} event 
   * @param {*} field 
   * You can always override handle change function via props  
   */
  const handleChange = (event, field) => {
    event.preventDefault();
    let newData = {
      ...formData,
      [field.dataSourceKey]: event.target.value,
    };
    setFormData(newData);
  };

  return (
    <React.Fragment>
      <div key={field.dataSourceKey} className="modal-layout">
        <Form.Label className="form-label">{field.label}</Form.Label>
        {tooltip}
        <Form.Control
          type={field.type}
          id={field.dataSourceKey}
          value={formData[field.dataSourceKey] || field.misc.defaultValue}
          onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)}
        >
        </Form.Control>
      </div>
    </React.Fragment>
  );
};
export default DatetimeContent;
