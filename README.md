# Interview Scheduler

A simple, a modern client application using the React view library.

### Setup

Install dependencies with `npm install`.

The Interview Scheduler project has been tested with Node v12.22.7 (Vagrant & WSL) and v15.14.0 (M1) and may not work with a newer version. Please ensure that you are using this version of node. You can use Node Version Manager (nvm)to switch to v12.22.7 (Vagrant & WSL) or v15.14.0 (M1) of Node.

## Dependencies

Run NPM install to install all dependencies


- React
- @testing-library/react-hooks
- react-test-renderer
- Webpack dev server, Babel
- Storybook
- Fragment
- Classnames
- Node 5.10.x - Node v12.22.7
- Axios
- Jest

## Testing
The project was tested using Webpack Development Server, Storybook aand Jest.

## Insalling the server
Fork and clone scheduler-api(https://github.com/onebee9/scheduler-api) into a new directory (NOT within your current scheduler directory) on your host machine (not in a virtual machine).

Follow the README.md instructions. This will involve a few steps, including:

installing dependencies
creating the database
creating a .env.development file in the root directory
seeding the database
running the server

If we try to make a request right now, we will trigger CORS. The server is configured to allow requests from any domain.Add "proxy": "http://localhost:8001" to the package.json file in our main scheduler (React App) directory, and restart the webpack-dev-server with npm start.

Confirm the API works by running the server and navigating to http://localhost:8001/api/days. You should get some saple data with the format below, back.

{
  "id":Number,
  "name":String,
  "appointments":Array,
  "interviewers":Array,
  "spots":Number
}


### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots
!["Screenshot of Interview scheduler empty + show states"](https://github.com/onebee9/scheduler/blob/master/docs/AppointmentHover.png)
!["Screenshot of Interview scheduler error state"](https://github.com/onebee9/scheduler/blob/master/docs/ErrorState.png)
!["Screenshot of Interview scheduler edit state"](https://github.com/onebee9/scheduler/blob/master/docs/EditAppointments.png)

