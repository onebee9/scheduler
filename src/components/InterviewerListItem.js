import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"


export default function dayListItem(props) {

  const {name, avatar} = props;

  const InterviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className = {InterviewersClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt  = {name && props.selected ? name : ""}
      />
       {name && props.selected ? name : ""}
    </li>
  )
}
