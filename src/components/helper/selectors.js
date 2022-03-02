// //Returns an array of appointments for the given day.

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers : [1,2]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers : [1,3,4]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 2,
      name: "Lori Holmes",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "4": {
      id: 2,
      name: "Cari Malvin",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }

};



export function getAppointmentsForDay(state, day) {

  let result = [];

  //gets the number of keys in the object as a proxy for "empty"
  const isEmpty = Object.values(state).length <= 1;

  if (isEmpty) {return result;}

  const foundName = state.days.find(({ name }) => name === day);

  if (!foundName) {return result;}

  // return Object.keys(state.appointments)
  // .reduce((acc, next) => foundName.appointments.includes(parseInt(next)) ? acc.concat(state.appointments[next]) : acc, []);
  const newData = Object.keys(state.appointments).filter(item => foundName.appointments.includes(parseInt(item)));

  for (let i = 0; i < newData.length; i++) {
    result.push(state.appointments[newData[i]]);
  }
  return result;
}

export const getInterview = function (state, interview) {

  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
};

export function getInterviewersForDay(state, day) {

  let result = [];

  //gets the number of keys in the object as a proxy for "empty"
  const isEmpty = Object.values(state).length <= 1;

  if (isEmpty) {return result;}

  const foundName = state.days.find(({ name }) => name === day);

  if (!foundName) {return result;}

  // return Object.keys(state.appointments)
  // .reduce((acc, next) => foundName.appointments.includes(parseInt(next)) ? acc.concat(state.appointments[next]) : acc, []);
  const newData = Object.keys(state.interviewers).filter(item => foundName.interviewers.includes(parseInt(item)));

  for (let i = 0; i < newData.length; i++) {
    result.push(state.interviewers[newData[i]]);
  }
  return result;
}


