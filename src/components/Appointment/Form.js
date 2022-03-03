import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import "../Appointment/Styles.scss";
import { useState } from 'react';

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewerId || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent('');
    setInterviewer('');
  };

  const Cancel = () => {
    reset();
    props.onCancel();
  };

  const Save = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            value={student}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
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
          <Button danger onClick={Cancel}>Cancel</Button>
          <Button onClick={Save}>Save</Button>
        </section>
      </section>
    </main>

  );
}

