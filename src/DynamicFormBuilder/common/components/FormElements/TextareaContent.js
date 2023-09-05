import React from "react"
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../util";
import { INVALID_FORM_FIELD_CLASS } from "../../util/constants";
const TextareaContent = (props) => {
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
      [field.dataSourceKey]: event.target.value
    };
    setFormData(newData);
  };
  return (
    <div key={field.id} className="col-sm-4 form-group">
      <Form.Label className={styleClass}>{field.label}</Form.Label>
      {tooltip}
      <Form.Control
        as={field.type || "textarea"}
        placeholder={field.placeholder}
        onChange={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)}
        onBlur={(e) => props.handleChange ? props.handleChange(e, field) : handleChange(e, field)}
        value={formData[field.dataSourceKey] || field.misc.defaultValue}
        className={(isInvalid ? INVALID_FORM_FIELD_CLASS : "")}
        required={field.misc.required ? true : false}
        rows={field.misc.row ? field.misc.row : 3}
      />
    </div>

  )
}


export default TextareaContent