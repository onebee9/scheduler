import React, { useState } from "react";
import classNames from "classnames";
import "../Appointment/Styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form"
import Confirm from "./Confirm";


export default function Appointment(props) {

   const EMPTY = "EMPTY";
   const SHOW = "SHOW";
   const CREATE = "CREATE";
   const SAVING = "SAVING";
   const CONFIRM = "CONFIRM";
   const EDIT = "EDIT";
   const DELETING = "DELETING";

   const { mode, transition, back } = useVisualMode(
      props.interview ? SHOW : EMPTY
   );

   //creates a new interview object using user provided form  data 
   //and creates an appointment booking
   const save = async (name, interviewer) => {
      transition(SAVING);
      const interview = {student: name,interviewer};
      await props.bookInterview(props.id, interview);
      transition(SHOW);
   }

   const deleteAppointment = async (id) => {
         transition(DELETING);
         await  props.deleteInterview(props.id)
         transition(EMPTY);
      
    }
  
   return (
      <article className="appointment">
         <Header time={props.time} />
         {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
         {mode === EDIT && <Form onSave={save} interviewers={props.interviewers} student = {props.interview.student} interviewerId = {props.interview.interviewer.id} onCancel={() => back(SHOW)} />}

         {/* {show && <div> ...saving </div>} */}
         {mode === SHOW && (
            <Show
               student={props.interview.student}
               interviewer={props.interview.interviewer}
               onDelete = {() => transition(CONFIRM)}
               onEdit = {()=>transition(EDIT)}
            />
         )}
         {mode === CREATE && <Form onSave={save} interviewers={props.interviewers} onCancel={() => back(EMPTY)} />}
         {mode === SAVING && <Status message = "Saving"/>}
         {mode === DELETING && <Status message = "Deleting"/>}
         {mode === CONFIRM && <Confirm message = "Delete the Appointment?" onCancel={() => back(SHOW)} onConfirm = {deleteAppointment}/>}
      </article>
   );
}
