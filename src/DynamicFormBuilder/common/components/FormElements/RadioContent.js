import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
/**
 * 
 * @param {*} props 
 * @returns 
 */
const RadioContent = (props) => {
  const { field, formData, data, setFormData } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  const options = [];
  for (const option in data) {
    options.push(
      <React.Fragment key={`option-${field.dataSourceKey}${data[option].id}`}>
        <input
          type="radio"
          key={`${field.dataSourceKey}${data[option].id}`}
          value={data[option].id}
          name={field.dataSourceKey}
          onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e)}
          checked={formData[field.dataSourceKey] === parseInt(data[option].id)}
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
      [field.dataSourceKey]: parseInt(e.target.value)
    };
    setFormData(newData);
  }

  return (
    <div key={field.id} className={field.misc.className}>
      <Form.Label className={styleClass}>{field.label}</Form.Label> {tooltip}<br />
      {options}
    </div>
  );
};
export default RadioContent;
