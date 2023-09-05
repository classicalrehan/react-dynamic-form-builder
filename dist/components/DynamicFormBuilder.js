import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextboxContent from "../common/components/FormElements/TextboxContent";
import DropdownContent from "../common/components/FormElements/DropdownContent";
import { Card, Form } from "react-bootstrap";
import SwitchContent from "../common/components/FormElements/SwitchContent ";
import DatetimeContent from "../common/components/FormElements/DatetimeContent";
import CheckboxContent from "../common/components/FormElements/CheckboxContent";
import RadioContent from "../common/components/FormElements/RadioContent";
import TagsInputContent from "../common/components/FormElements/TagsInputContent";
import formConfig from "../config/formConfig";
const DynamicFormBuilder = props => {
  const {
    id
  } = useParams();
  const _fields = [];
  const [formData, setFormData] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);

  /**
   *
   * Generating input fields of modal form from JSON
   * @param {JSON} config
   */
  const generateInputFields = config => {
    config.forEach((field, idx) => {
      switch (field.type) {
        case "number":
        case "password":
        case "email":
        case "text":
          return getTextboxContent(field, idx);
        case "dropdown":
          return getDropdownContent(field, idx);
        case "swtich":
          return getSwitchContent(field, idx);
        case "date":
          return getDateContent(field, idx);
        case "checkbox":
          return getCheckboxContent(field, idx);
        case "radio":
          return getRadioContent(field, idx);
        case "tagsInput":
          return getTagsInputContent(field, idx);
        default:
          return null;
      }
    });
    return _fields;
  };
  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getDateContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(DatetimeContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };
  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getTagsInputContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(TagsInputContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };
  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getRadioContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(RadioContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };
  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getCheckboxContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(CheckboxContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };

  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getSwitchContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(SwitchContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };
  /**
   * 
   * @param {*} field 
   * @param {*} idx 
   */
  const getDropdownContent = (field, idx) => {
    let options = field.options;
    _fields.push( /*#__PURE__*/React.createElement(DropdownContent, {
      id: field.id,
      key: field.id,
      field: field,
      isEdit: id,
      formData: formData,
      setFormData: setFormData,
      data: options
    }));
  };
  /**
   *
   * Storing Textbox input field in a form
   * @param {String} field
   * @param {Integer} idx
   */

  const getTextboxContent = (field, idx) => {
    _fields.push( /*#__PURE__*/React.createElement(TextboxContent, {
      isEdit: id,
      id: field.id,
      key: field.id,
      type: field.type,
      field: field,
      formData: formData,
      setFormData: setFormData
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("formData", formData);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container-dashboard CreateFileConfig"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-container"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "campaign-card",
    style: {
      width: '40rem'
    }
  }, /*#__PURE__*/React.createElement(Card.Header, null, "New Registration"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row w-100"
  }, generateInputFields(formConfig)), /*#__PURE__*/React.createElement("div", {
    className: "text-center pt10"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary ",
    disabled: submitDisabled
  }, "Submit")))))));
};
export default DynamicFormBuilder;