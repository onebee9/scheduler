import React, { useState, useEffect, Fragment } from 'react';
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment/Index";
import axios from 'axios';
import { getAppointmentsForDay, getInterview } from 'components/helper/selectors';

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer: {
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];

export default function Application(props) {

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

  }, []);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const allAppointments = dailyAppointments.map((apt) => {

    return <Appointment key={apt.id} {...apt} />

  });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // You dont get a response with put-requests
    //return axios.put(`http://localhost:8001/api/appointments/${id}`, interview)
    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview})
      .then((response) => {
        setState({
          ...state, appointments
        });
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteInterview(id) {
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={state.interviewers}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
      />
    );
  });



  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
