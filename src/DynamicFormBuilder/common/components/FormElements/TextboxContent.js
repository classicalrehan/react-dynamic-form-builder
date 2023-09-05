import React from "react"
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
import { INVALID_FORM_FIELD_CLASS } from "../../util/constants";

const TextboxContent = (props) => {
  const { field, formData, setFormData, isInvalid } = props;

  const styleClass = addRequiredLabel(field);
  const tooltip = getToolTip(field.misc.info);
  /**
   * 
   * @param {*} event 
   * @param {*} field 
   */
  const handleChange = (event, field) => {
    const newData = {
      ...formData,
      [field.dataSourceKey]: (field.type === "number" ? parseInt(event.target.value) : event.target.value)
    };
    setFormData(newData);
  };
  return (
    <>
      <div key={"field-" + field.id} className={field.misc.className}>
        <Form.Label key={"label-" + field.id} className={styleClass}>{field.label}</Form.Label>
        {tooltip}
        <Form.Control
          key={"element" + field.id}
          type={field.type}
          min={field.type === "number" ? field.misc.min : null}
          max={field.type === "number" ? field.misc.max : null}
          placeholder={field.placeholder}
          onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)}
          onBlur={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)}
          value={formData[field.dataSourceKey] || field.misc.defaultValue}
          className={(isInvalid ? INVALID_FORM_FIELD_CLASS : "")}
          required={field.misc.required ? true : false}
          disabled={props.isEdit && field.misc.readonly ? true : false}
        />
      </div>
    </>


  )
}
export default TextboxContent;