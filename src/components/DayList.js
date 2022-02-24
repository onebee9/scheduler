import React, { Fragment } from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
console.log(props);
  const days = props.days;
  const selected = props.day;

  const allDays = days.map((day) => {
      
      return <DayListItem 
      key = {day.id} 
      name = {day.name} 
      spots = {day.spots} 
      selected = {day.name === selected }
      setDay = {props.setDay}  
      />
  });

  return (
    <ul>
      {allDays}
    </ul>
  );
}