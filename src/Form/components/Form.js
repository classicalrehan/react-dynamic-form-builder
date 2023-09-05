import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextboxContent from "../../DynamicFormBuilder/common/components/FormElements/TextboxContent";
import DropdownContent from "../../DynamicFormBuilder/common/components/FormElements/DropdownContent";
import { Card, Form } from "react-bootstrap";
import SwitchContent from "../../DynamicFormBuilder/common/components/FormElements/SwitchContent ";
import DatetimeContent from "../../DynamicFormBuilder/common/components/FormElements/DatetimeContent";
import CheckboxContent from "../../DynamicFormBuilder/common/components/FormElements/CheckboxContent";
import RadioContent from "../../DynamicFormBuilder/common/components/FormElements/RadioContent";
import TagsInputContent from "../../DynamicFormBuilder/common/components/FormElements/TagsInputContent";
import formConfig from "../config/formConfig";

const MyForm = (props) => {
    const { id } = useParams();
    const _fields = [];
    const [formData, setFormData] = useState({});
    const [submitDisabled, setSubmitDisabled] = useState(false);

    /**
     *
     * Generating input fields of modal form from JSON
     * @param {JSON} config
     */
    const generateInputFields = (config) => {
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
        _fields.push(
            <DatetimeContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };
    /**
     * 
     * @param {*} field 
     * @param {*} idx 
     */
    const getTagsInputContent = (field, idx) => {
        let options = field.options;
        _fields.push(
            <TagsInputContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };
    /**
     * 
     * @param {*} field 
     * @param {*} idx 
     */
    const getRadioContent = (field, idx) => {
        let options = field.options;
        _fields.push(
            <RadioContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };
    /**
     * 
     * @param {*} field 
     * @param {*} idx 
     */
    const getCheckboxContent = (field, idx) => {
        let options = field.options;
        _fields.push(
            <CheckboxContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };

    /**
     * 
     * @param {*} field 
     * @param {*} idx 
     */
    const getSwitchContent = (field, idx) => {
        let options = field.options;
        _fields.push(
            <SwitchContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };
    /**
     * 
     * @param {*} field 
     * @param {*} idx 
     */
    const getDropdownContent = (field, idx) => {
        let options = field.options;
        _fields.push(
            <DropdownContent
                id={field.id}
                key={field.id}
                field={field}
                isEdit={id}
                formData={formData}
                setFormData={setFormData}
                data={options}
            />
        );
    };
    /**
     *
     * Storing Textbox input field in a form
     * @param {String} field
     * @param {Integer} idx
     */

    const getTextboxContent = (field, idx) => {
        _fields.push(
            <TextboxContent
                isEdit={id}
                id={field.id}
                key={field.id}
                type={field.type}
                field={field}
                formData={formData}
                setFormData={setFormData}
            />
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formData", formData);

    }
    return (
        <div className="app-container-dashboard CreateFileConfig">
            <div className="card-container">
                <Card className="campaign-card" style={{ width: '40rem' }}>
                    <Card.Header>
                        New Registration
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <div className="row w-100">
                                {generateInputFields(formConfig)}

                            </div>
                            <div className="text-center pt10">
                                <button type="submit" className="btn btn-primary " disabled={submitDisabled}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </div >

        </div>
    );
};

export default MyForm;
