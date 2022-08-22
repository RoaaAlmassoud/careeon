import React, { Component } from "react"
import MainLayout from './components/main-layout/main-layout'
import RegistrationTabs from "./components/authentication-components/src/registration-tabs"
import AdviserLogin from "./components/authentication-components/src/adviser-login";
import StudentLogin from "./components/authentication-components/src/student-login";
//import Logout from './components/logout/logout'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import AppContext from './context/app-context';
// import Helper from '../src/utils/helper'
import { css } from 'glamor';
import { toast, ToastContainer } from 'react-toastify';
import { Icon, Label } from 'semantic-ui-react'


function notify(error, message, duration = 5000) {
  // (message) ?
  //  toast(
  //   error ?
  //     <div><Icon size="large" name='warning' /> {message}</div>
  //     : <div><Icon link name='check' /> {message}</div>,
  //   {
  //     autoClose: duration,
  //     className: css({
  //       padding: '10px',
  //       color: error ? '#912d2b !important' : 'teal !important',
  //     }),
  //     progressClassName: css({
  //       background: error ? '#912d2b !important' : 'teal !important',
  //     }),
  //     // This position to determine where should the toast appear . (default top right)
  //     position: toast.POSITION.TOP_RIGHT,
  //   }) : null;
}

function errorFor(state, field, component, direction) {
  let { isMobile, screenSize } = this.state;
  if (component === 'login' || component === 'register') {
    isMobile = screenSize <= 990;
  }

  let hide = state.validationErrors[field] ? state.validationErrors[field].includes('required') : false;
  if (state.validationErrors[field] && state.showErrors) {
    return <div className={`error-section ${state.serverError && !hide ? '' : 'invisible'}`}>
      <Label
        basic color='red' pointing={direction || isMobile ? `above` : 'right'}>
        {state.validationErrors[field]}
      </Label>
    </div>
  }
  return null
}


function App() {
  let navigate = useNavigate()
  return (
    <>
      {/* <AppContext.Provider value={this.state}> */}
      <MainLayout notify={notify} >

        <Routes>
          <Route exact path="/student-registration"
            element={<RegistrationTabs notify={notify} navigate={navigate} userType='student' />} />

          <Route exact path="/adviser-registration"
            element={<RegistrationTabs notify={notify} navigate={navigate} userType='adviser' />} />

          <Route exact path="/student-login"
            element={<StudentLogin notify={notify} navigate={navigate} userType='student' />} />

          <Route exact path="/adviser-login"
            element={<AdviserLogin notify={notify} navigate={navigate} userType='adviser' />} />

        </Routes>

        <ToastContainer autoClose={5000} />
      </MainLayout>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
