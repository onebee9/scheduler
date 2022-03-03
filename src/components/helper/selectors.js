
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


