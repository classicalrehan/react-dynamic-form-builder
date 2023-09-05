import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
/**
 * 
 * @param {*} props 
 * @returns 
 */
const CheckboxContent = (props) => {
  const { field, formData, data, setFormData } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const options = [];
  for (const option in data) {
    options.push(
      <React.Fragment key={`option-${field.dataSourceKey}${data[option].id}`}>
        <input
          type="checkbox"
          key={`${field.dataSourceKey}${data[option].id}`}
          value={data[option].id}
          name={field.dataSourceKey}
          onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e)}
          checked={formData[field.dataSourceKey] || false}
        />
        <Form.Label key={`label-${data[option].id}`} className={styleClass}>{data[option].name}{" "}</Form.Label>
      </React.Fragment>
    );
  }

  /**
   * 
   * @param {*} e 
   */
  const handleChange = (e) => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: e.target.checked
    };
    console.log(newData);
    setFormData(newData);
  }

  return (
    <div key={`field-${field.dataSourceKey}${field.id}`} className={field.misc.className}>
      <Form.Label key={`label-${field.dataSourceKey}${field.id}`} className={styleClass}>{field.label}</Form.Label>{tooltip}<br />
      {options}
    </div>
  );
};

export default CheckboxContent;
