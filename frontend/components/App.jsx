import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import SignupModalContainer from './modals/SignupModalContainer';
import LoginModalContainer from './modals/LoginModalContainer';
import Main from './Main';
import Header from './Header';

import { logout } from '../util/SessionApiUtil';

const App = () => {
  return (
    <div id='app'>
      <Route path='/' component={SignupModalContainer} />
      <Route path='/' component={LoginModalContainer} />
      <Route path='/' component={ Header } />
      <Route path='/' component={ Main } />
      <Redirect to='/homes' />
    </div>
  );
};

export default App;
