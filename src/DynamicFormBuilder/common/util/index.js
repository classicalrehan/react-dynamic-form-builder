
import * as moment from 'moment';
import * as FaIcons from 'react-icons/fa';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
export const handleError = (error) => {
  return error.statusText;
};




export function addRequiredLabel(field) {
  return `form-label ${field.misc.required ? `required` : ``}`;
}
export const getDate = (date) => {
  if (date) {
    return moment(date).format("DoMMMYY HH:mm a")
  }
  return '';
}
export const getToolTip = (value) => {
  if (value) {
    return (
      <>
        <FaIcons.FaQuestionCircle className="infoIcon" data-tooltip-content={value} />
        <ReactTooltip
          anchorSelect=".infoIcon"
          place="right"
        />
      </>
    )
  }

}