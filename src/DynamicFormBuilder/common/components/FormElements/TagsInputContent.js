import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
import Select from 'react-select';


const TagsInputContent = (props) => {
  const { field, formData, setFormData } = props;
  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  /**
   * 
   * @param {*} value 
   */
  const handleChange = (value) => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: value
    };
    setFormData(newData);
  };
  return (
    <>
      <div key={"field-" + field.dataSourceKey} className={field.misc.className}>
        <Form.Label className={styleClass}>{field.label}</Form.Label>
        {tooltip}
        <Select
          id={field.dataSourceKey}
          isMulti={field.misc.multi ? true : false}
          value={formData[field.dataSourceKey] || field.misc.defaultValue}
          onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)} w
          options={field.options}
          placeholder={field.placeholder}
          isSearchable={true}
        />
      </div>
    </>
  )
}
export default TagsInputContent;