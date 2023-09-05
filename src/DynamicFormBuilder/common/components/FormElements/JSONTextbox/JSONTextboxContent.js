import React from "react";
import Form from "react-bootstrap/Form";
import { addRequiredLabel, getToolTip } from "../../../util";
import { INVALID_FORM_FIELD_CLASS } from "../../../util/constants";
import * as FaIcons from 'react-icons/fa';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import './styles.css'
const JSONTextboxContent = (props) => {
  const { field, formData, setFormData, options, isInvalid, defaultValue } = props;
  const styleClass = addRequiredLabel(field);


  const handleChange = (i, e) => {
    let newFormValues = [...formData[field.dataSourceKey]];
    newFormValues[i][e.target.name] = e.target.value;
    const newData = {
      ...formData,
      [field.dataSourceKey]: [...newFormValues]
    };
    setFormData(newData);
  }

  let addFormFields = () => {
    let item = [...formData[field.dataSourceKey], ...defaultValue];
    const newData = {
      ...formData,
      [field.dataSourceKey]: item
    };
    setFormData(newData);
  }

  const removeFormFields = (i) => {
    let newFormValues = [...formData[field.dataSourceKey]];
    newFormValues.splice(i, 1);
    const newData = {
      ...formData,
      [field.dataSourceKey]: newFormValues
    };
    setFormData(newData);
  }
  /**
 *
 * Generating input fields of modal form from JSON
 * @param {JSON} config
 */
  const generateInputFields = (field, rowIndex, idx) => {
    switch (field.type) {
      case "number":
      case "text":
        return getTextboxContent(field, rowIndex, idx);
      case "dropdown":
        return getDropdownContent(field, rowIndex, idx);
      default:
        return null;
    }
  };
  const getODropDownOption = (data) => {
    const options = [];
    for (const option in data) {
      options.push(
        <option value={data[option].id} key={option} name={data[option].name}>
          {" "}
          {data[option].name}{" "}
        </option>
      );
    }
    return options;
  }
  const getDropdownContent = (element, rowIndex, idx) => {
    const options = getODropDownOption(element.options);

    return (
      <Form.Control
        as="select"
        key={`${field.id}${element.id}${field.dataSourceKey}`}
        id={element.name}
        name={element.keyName}
        value={formData[field.dataSourceKey][rowIndex][element.keyName] || ""}
        onChange={e => handleChange(rowIndex, e)}
        className="form-select"
      >
        {(element.showDefaultOption) ? (
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
    );
  }
  const getTextboxContent = (element, rowIndex, idx) => {
    return (
      <Form.Control
        key={`${field.id}${element.id}${field.dataSourceKey}`}
        type={element.type}
        placeholder={element.placeholder}
        onChange={e => handleChange(rowIndex, e)}
        value={formData[field.dataSourceKey][rowIndex][element.keyName] || ""}
        className={(isInvalid ? INVALID_FORM_FIELD_CLASS : "col-sm-6")}
        name={element.keyName}
      />
    )
  };
  const getFieldOptions = (rowIndex) => {
    let list = [];
    let option;
    options.forEach((element, index) => {
      option = generateInputFields(element, rowIndex, index);
      const tooltip = getToolTip(element.misc?.info);
      list.push(
        <div className="col-sm-5" key={`${field.id}${element.id}${index}`}>
          <label>{element.label}</label>{tooltip}
          {option}
        </div>
      )
    });
    return list;
  }
  return (
    <>
      <div key={`field- ${field.dataSourceKey}-${field.id}`} className="col-sm-12 JSONTextboxContent">
        <Form.Label key={`${field.id}${field.dataSourceKey}label`} className={styleClass}>{field.label}</Form.Label>
        {formData[field.dataSourceKey].map((element, index) => (

          <div className="row form-inline" key={`form-${field.id}${field.dataSourceKey}${index}`}>
            {
              getFieldOptions(index)
            }
            < div className="col-sm-2" key={`action${index}${field.dataSourceKey}${field.id}`}>
              {
                index ?
                  <> <FaIcons.FaTimesCircle className="multiInputIcon red" onClick={() => removeFormFields(index)} key={`iconremove-${field.id}${field.dataSourceKey}${index}`} /></>
                  : null
              }
              {
                //last element
                (index + 1 === formData[field.dataSourceKey].length ? <> <FaIcons.FaPlusCircle key={`iconadd-${field.id}${field.dataSourceKey}${index}`} className="multiInputIcon green" onClick={() => addFormFields(index, defaultValue)} /></> : <></>)
              }
            </div>
          </div >

        ))}
      </div >
    </>


  )
}
export default JSONTextboxContent;