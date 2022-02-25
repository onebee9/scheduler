import React from "react";
import classNames from "classnames";
import "../Appointment/Styles.scss";

export default function Appointment(props) {

   return (
<article className="appointment">
   {props.time ? props.time : "No appointments"}
</article>
   ); 
 }
