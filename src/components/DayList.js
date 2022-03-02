import React, { Fragment } from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days;
  const selected = props.value;

  const allDays = days.map((day) => {
      
      return <DayListItem 
      key = {day.id} 
      name = {day.name} 
      spots = {day.spots} 
      selected = {day.name === selected }
      setDay = {props.onChange}  
      />
  });

  return (
    <ul>
      {allDays}
    </ul>
  );
}