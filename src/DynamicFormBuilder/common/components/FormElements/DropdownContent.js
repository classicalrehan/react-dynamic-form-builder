import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";

/**
 * 
 * @param {*} props 
 * @returns 
 */
const DropdownContent = (props) => {
  const { field, formData, data, setFormData } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const options = [];
  for (const option in data) {
    options.push(
      <option value={data[option].key} key={option} name={data[option].label}>
        {" "}
        {data[option].label}{" "}
      </option>
    );
  }
  /**
   * 
   * @param {*} e 
   */
  const handleChange = (e) => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: e.target.value
    };
    setFormData(newData);
  }
  return (
    <div key={field.id} className={field.misc.className}>
      <Form.Label className={styleClass}>{field.label}</Form.Label>
      {tooltip}
      <Form.Control
        as="select"
        id={field.name}
        name={field.dataSourceKey}
        style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
        value={formData[field.dataSourceKey] ? formData[field.dataSourceKey] : ""}
        onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e)}
        required={field.misc.required ? true : false}
        disabled={props.isEdit && field.misc.readonly ? true : false}
        className="form-select"
      >
        {(field.showDefaultOption) ? (
          <option value="">
            Select your option
          </option>
        ) : (
          <option value="" hidden>
            Select your option
          </option>
        )}
        {options}
      </Form.Control>
    </div>
  );
};

export default DropdownContent;
