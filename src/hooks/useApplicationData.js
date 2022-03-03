import React, { useState, useEffect } from "react";
import axios from "axios";

export const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  function setDay(day) {

    // Deconstructs state object and Any keys declared after will overwrite existing keys.
    setState({ ...state, day });

  }

  const spotUpdate = (weekday, day, variable) => {
    let spot = day.spots;
    if (weekday === day.name && variable === "REMOVE_SPOT") {
      return spot - 1;
    } else if (weekday === day.name && variable === "ADD_SPOT") {
      return spot + 1;
    } else {
      return spot;
    }
  };

  const updateSpots = (weekday, days, variable) => {
    if (variable === "REMOVE_SPOT") {
      const updatedStateDayArray = days.map(day => {
        return {
          ...day,
          spots: spotUpdate(weekday, day, variable)
        };
      });
      return updatedStateDayArray;
    }
    if (variable === "ADD_SPOT") {
      const updatedStateDayArray = days.map(day => {
        return {
          ...day,
          spots: spotUpdate(weekday, day, variable)
        };
      });
      return updatedStateDayArray;
    }
  };

  // retrieve data and update the state
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ])
      .then((response) => {
        //returns 3 datasates in an array
        setState(prev => ({ ...prev, days: response[0].data, appointments: response[1].data, interviewers: response[2].data }));
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        const spotUpdate = updateSpots(state.day, state.days, "REMOVE_SPOT");
        setState({
          ...state,
          days: spotUpdate,
          appointments
        });
      });
  };


  const deleteInterview = id => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        const spotUpdate = updateSpots(state.day, state.days, "ADD_SPOT");
        setState({
          ...state,
          days: spotUpdate,
          appointments
        });
      });
  };


  return { state, setDay, bookInterview, deleteInterview }

}


