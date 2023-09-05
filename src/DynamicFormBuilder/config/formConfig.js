
const formConfig = [

    {
        dataSourceKey: "fullname",
        label: "Full Name",
        id: 1,
        type: "text",
        placeholder: "Full Name",
        misc: {
            defaultValue: "",
            required: true,
            className: "col-sm-12 form-group",
            info: "Please Enter the fullname"
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
            className: "col-sm-12 form-group",
            info: "Please Enter the valid email"
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
            className: "col-sm-12 form-group",
            info: "Please Enter the password"
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
            className: "col-sm-12 form-group",
            info: "Please Enter vlid mobile number"
        }
    },
    {
        dataSourceKey: "dob",
        label: "DOB",
        id: 5,
        type: "date",
        placeholder: "DOB",
        misc: {
            defaultValue: false,
            required: true,
            className: "col-sm-12 form-group",
            info: "Please Select Date of Birth"
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
            className: "col-sm-12 form-group",
            info: "Please Select Experience Level"
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
            className: "col-sm-12 form-group",
            info: "Please Select City"
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
            className: "col-sm-12 form-group",
            info: "You can select multiple skills from here"
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
            required: true,
            info: "Please check Acknowledgement "
        }
    },

]

export default formConfig;