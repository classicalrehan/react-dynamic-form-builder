import React, { useCallback, useEffect, useState } from "react";
import Autosuggest from 'react-autosuggest';
import Form from "react-bootstrap/Form";
import './style.scss';
import { addRequiredLabel } from "../../../util";
import { getAllComponentConfigListService } from "../../../../ComponentConfig/service/ComponentConfigService";
import { getAllApiConfigListService } from "../../../../ApiConfig/service/ApiConfigService";
const AutoSearchContent = props => {
  const {
    field,
    formData,
    setFormData,
    data
  } = props;
  const styleClass = addRequiredLabel(field);
  const [value, SetValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestorData, setSuggestorData] = React.useState(data);
  const onChange = (event, {
    newValue,
    method
  }) => {
    const escapedValue = escapeRegexCharacters(newValue.trim());
    if (escapedValue === '') {
      return [];
    }
    // console.log(newValue);
    // const regex = new RegExp('^' + escapedValue, 'i');
    // console.log(suggestorData.filter(data => regex.test(data.name)));

    SetValue(newValue);
    const newData = {
      ...formData,
      [field.dataSourceKey]: filterSelectedValueFromObj(newValue)
    };
    setFormData(newData);
  };
  const onSuggestionsFetchRequested = ({
    value
  }) => {
    setSuggestions(getSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    console.log(suggestorData);
    return suggestorData.filter(data => regex.test(data.name));
  };
  const getSuggestionValue = suggestion => {
    return suggestion.name;
  };
  const renderSuggestion = suggestion => {
    return /*#__PURE__*/React.createElement("span", null, suggestion.name);
  };
  const getComponentConfigData = () => {
    getAllComponentConfigListService().then(response => {
      setSuggestorData(response.data);
    }).catch(e => {
      console.log(e);
    });
  };
  const getApiConfigData = () => {
    getAllApiConfigListService().then(response => {
      setSuggestorData(response.data);
    }).catch(e => {
      console.log(e);
    });
  };
  const filterSelectedValueFromObj = useCallback(value => {
    const selectedObj = getSuggestions(value);
    let selectedValue = "";
    switch (field.dataSourceKey) {
      case "componentId":
        selectedValue = selectedObj[0].componentId;
        break;
      case "pseApiId":
      case "apiId":
        selectedValue = selectedObj[0].apiId;
        break;
      default:
        break;
    }
    return selectedValue;
  });
  const suggestorFetchData = useCallback(async () => {
    switch (field.dataSourceKey) {
      case "componentId":
        getComponentConfigData();
        break;
      case "pseApiId":
      case "apiId":
        getApiConfigData();
        break;
      default:
        break;
    }
  });
  useEffect(() => {
    if (!loading) {
      suggestorFetchData();
      setLoading(true);
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    key: field.id,
    className: "col-sm-4 form-group"
  }, /*#__PURE__*/React.createElement(Form.Label, {
    className: styleClass
  }, field.label), /*#__PURE__*/React.createElement(Autosuggest, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion,
    inputProps: {
      placeholder: field.placeholder,
      value,
      onChange: onChange
    }
  }));
};
export default AutoSearchContent;