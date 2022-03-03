import React, {useState,useEffect} from "react";
import axios from "axios";

export const useApplicationData = ()=> {

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

  }, [state.appointments.length]);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

      return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then((response) => {
        setState({
          ...state, appointments
        });
        return response;
      })
      .catch((error) => {
       console.log(error.message)
       throw error;
      });
    } 


    function deleteInterview(id) {
      return axios.delete(`http://localhost:8001/api/appointments/${id}`)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
          throw error
        });
    }


  return {state,setDay,bookInterview,deleteInterview}

}
