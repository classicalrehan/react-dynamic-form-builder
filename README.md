# ConfigBasedFormBuilderInReact

## React Dynamic Form Builder

### React JSON Form Builder Component

A simple React component capable of building HTML forms out of a JSON schema and using Bootstrap semantics by default. A Form Builder (also known as Form Creator, Form generator) allows the developers to dynamically generate form controls (text fields, select boxes, radio buttons, checkboxes) from structured data model defined using JSON Schema.

## Set up your React project:

Ensure you have Node.js and npm (or yarn) installed. Create a new React project if you don't have one already using create-react-app or any other method of your choice.

## Create a FormBuilder component:

Create a new component, let's call it DynamicFormBuilder, where users can interactively build the form structure.

## Define the JSON schema:

Decide on a JSON schema or structure that represents the form fields. For example:

```
 [

    {
        dataSourceKey: "fullname",
        label: "Full Name",
        id: 1,
        type: "text",
        placeholder: "Full Name",
        misc: {
            defaultValue: "",
            required: true,
            className: "col-sm-12 form-group"
        }
    },


    {
        dataSourceKey: "emailId",
        label: "Email ID",
        id: 2,
        type: "email",
        placeholder: "Email ID",
        misc: {
            defaultValue: "",
            required: true,
            className: "col-sm-12 form-group"
        }
    },


    {
        dataSourceKey: "password",
        label: "Password",
        id: 3,
        type: "password",
        placeholder: "Password",
        misc: {
            defaultValue: {},
            required: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "mobileNumber",
        label: "Mobile Number",
        id: 4,
        type: "number",
        placeholder: "Mobile Number",
        misc: {
            defaultValue: {},
            required: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "dob",
        label: "DOB",
        id: 5,
        type: "date",
        placeholder: "DOB",
        misc: {
            defaultValue: {},
            required: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "workStatus",
        label: "Work status",
        id: 6,
        type: "radio",
        placeholder: "Work status",
        options: [
            {
                id: 1,
                key: 'experienced',
                name: "1'm experienced"
            }
            , {
                id: 2,
                key: 'fresher',
                name: "1'm fresher"
            }
        ],
        misc: {
            defaultValue: "",
            required: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "currentCity",
        label: "Current City",
        id: 7,
        type: "dropdown",
        placeholder: "Current CIty",
        options: [
            {
                id: 1,
                key: 'hyderabad',
                label: "Hyderabad"
            },
            {
                id: 2,
                key: 'gujarat',
                label: "Gujarat"
            },
            {
                id: 3,
                key: 'siliguri',
                label: "Siliguri"
            },
            {
                id: 4,
                key: 'ahmedabad',
                label: "Ahmedabad"
            }
        ],
        misc: {
            defaultValue: "",
            required: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "skills",
        label: "Skills",
        id: 8,
        type: "tagsInput",
        placeholder: "Skills",
        options: [
            {
                id: 1,
                value: 'php',
                label: "Php"
            },
            {
                id: 2,
                value: 'java',
                label: "Java"
            },
            {
                id: 3,
                value: 'html',
                label: "HTML"
            },
            {
                id: 4,
                value: 'react',
                label: "React"
            }
        ],
        misc: {
            defaultValue: "",
            required: true,
            multi: true,
            className: "col-sm-12 form-group"
        }
    },
    {
        dataSourceKey: "acknowledge",
        label: "Acknowledge",
        id: 9,
        type: "checkbox",
        placeholder: "Send me important updates on WhatsApp",
        options: [
            {
                id: 1,
                key: 'acknowledge',
                name: "Send me important updates on WhatsApp"
            }
        ],
        misc: {
            defaultValue: "",
            required: true
        }
    },

]
```

## Build the interactive form builder UI:

Inside the FormBuilder component, create an interactive interface where users can add form fields, set their properties, and preview the form in real-time. You can use React state to manage the form structure.

## Convert the form structure to JSON:

Create a function in your FormBuilder component that takes the user-defined form structure and converts it to a JSON representation.

```
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TextboxContent from "react-dynamic-form-creation/dist/common/components/FormElements/TextboxContent";
import DropdownContent from "react-dynamic-form-creation/dist/common/components/FormElements/DropdownContent";
import { Card, Form } from "react-bootstrap";
import SwitchContent from "react-dynamic-form-creation/dist/common/components/FormElements/SwitchContent ";
import DatetimeContent from "react-dynamic-form-creation/dist/common/components/FormElements/DatetimeContent";
import CheckboxContent from "react-dynamic-form-creation/dist/common/components/FormElements/CheckboxContent";
import RadioContent from "react-dynamic-form-creation/dist/common/components/FormElements/RadioContent";
import TagsInputContent from "react-dynamic-form-creation/dist/common/components/FormElements/TagsInputContent";
import formConfig from "react-dynamic-form-creation/dist/config/formConfig";

const FormTesting = (props) => {
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

export default FormTesting;


```

## Render the final form:

Render the final form based on the JSON structure generated by the user. You can use a library like react-jsonschema-form or manually render the form elements using React components.

## Handle form submissions:

Implement the logic to handle form submissions, including validation and data processing.

```

 const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formData", formData);

    }

```

```
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
```

## Styling and customization:

Add CSS or use a UI library like Bootstrap or Material-UI to style your form builder and the rendered forms.
# react-dynamic-form-builder
