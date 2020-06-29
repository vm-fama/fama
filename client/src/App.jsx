import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

import SignInOrUp from './pages/sign-up-in/sign-in-up-page';

const App = () => (
  <div>
    <h1>Hello World</h1>
    <SignInOrUp />
  </div>
);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(App);
