import React from "react";
import classNames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function interviewerlist(props) {

  const interviewers = props.interviewers;
  const value = props.value;
  const onChange = props.onChange;

  const allInterviewers = Object.values(interviewers).map((interviewer) => {

    return (<InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer = {() => onChange(interviewer.id)}
    />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{allInterviewers}</ul>
    </section>
  )
}