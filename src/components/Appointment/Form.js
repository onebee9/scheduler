import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import classNames from "classnames";
import "../Appointment/Styles.scss";
import { useState } from 'react'

export default function Form(props) {
  console.log('form',props);

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewerId || null);

  const reset = () => {
    setStudent('');
    setInterviewer('');
  };

  const cancel = () => {
   reset();
   props.onCancel();
  };

  const callSave = () => {
    props.onSave(student,interviewer);
  }

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
            value={student}
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
          <Button onClick={callSave}>Save</Button>
        </section>
      </section>
    </main>

  );
}

