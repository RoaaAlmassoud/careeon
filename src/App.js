import React, { Component } from "react"
import MainLayout from './components/main-layout/main-layout'
import RegistrationTabs from "./components/authentication-components/src/registration-tabs"
import AdviserLogin from "./components/authentication-components/src/adviser-form/adviser-login";
import StudentLogin from "./components/authentication-components/src/student-form/student-login";
import StudentForgotPassword from "./components/authentication-components/src/student-form/student-forgot-password";
import AdviserForgotPassword from "./components/authentication-components/src/adviser-form/adviser-forgot-password";
import ForgotPassword from "./components/authentication-components/src/forgot-password";
import PageLayout from "./components/my-page/page-layout";
import UpdateAccount from "./components/my-page/adviser-page/update-account";
import LessonStartModal from "./components/modals/lesson-start";
import LessonEndModal from "./components/modals/lesson-end";
//import Logout from './components/logout/logout'
import { useParams, Routes, Route, useNavigate } from 'react-router-dom';
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
  let params = useParams();
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

          <Route exact path="/adviser-forgot-password"
            element={<AdviserForgotPassword notify={notify} navigate={navigate} userType='adviser' />} />

          <Route exact path="/student-forgot-password"
            element={<StudentForgotPassword notify={notify} navigate={navigate} userType='adviser' />} />

          <Route exact path="/forgot-password"
            element={<ForgotPassword notify={notify} navigate={navigate} />} />

          <Route exact path="/adviser-page"
            element={<PageLayout notify={notify} navigate={navigate} userType='adviser' activeSection='lessons' />} />

          <Route exact path="/lessons"
            element={<PageLayout notify={notify} navigate={navigate} activeSection='lessons' />} />

          <Route exact path="/lessons/:id"
            element={<PageLayout notify={notify} navigate={navigate} userType='adviser' activeSection='details' />} />

          <Route exact path="/my-page"
            element={<PageLayout notify={notify} navigate={navigate} activeSection='my-page' />} />

          <Route exact path="/update-account"
            element={<UpdateAccount notify={notify} navigate={navigate} />} />

          <Route exact path="/student-page"
            element={<PageLayout notify={notify} navigate={navigate} userType='student' activeSection='home' />} />

          <Route exact path="/home"
            element={<PageLayout notify={notify} navigate={navigate} userType='student' activeSection='home' />} />

          <Route exact path="/advisers/:id"
            element={<PageLayout notify={notify} navigate={navigate} userType='student' activeSection='adviser-details' />} />

          <Route exact path="/lesson-start"
            element={<LessonStartModal notify={notify} navigate={navigate} />} />

          <Route exact path="/lesson-end"
            element={<LessonEndModal notify={notify} navigate={navigate} />} />

        </Routes>

        <ToastContainer autoClose={5000} />
      </MainLayout>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
