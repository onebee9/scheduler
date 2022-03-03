
export function getAppointmentsForDay(state, day) {

  let result = [];
  const isEmpty = Object.values(state).length <= 1;

  if (isEmpty) { return result; }

  const foundName = state.days.find(({ name }) => name === day);

  if (!foundName) { return result; }

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
  const isEmpty = Object.values(state).length <= 1;

  if (isEmpty) { return result; }

  const foundName = state.days.find(({ name }) => name === day);

  if (!foundName) { return result; }

  const newData = Object.keys(state.interviewers).filter(item => foundName.interviewers.includes(parseInt(item)));

  for (let i = 0; i < newData.length; i++) {
    result.push(state.interviewers[newData[i]]);
  }
  return result;
}


