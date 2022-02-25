import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import classNames from "classnames";
import "../Appointment/Styles.scss";
import { useState } from 'react'

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent('');
    setInterviewer('');
  };

  const cancel = () => {
   reset();
   props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter student name"
            onChange={(event) => setStudent(event.target.value)}
            value={props.student || student} 
          />
        </form>
        <InterviewerList
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger  onClick = {cancel}>Cancel</Button>
          <Button danger onClick={props.onSave}>Confirm</Button>
        </section>
      </section>
    </main>

  );
}

