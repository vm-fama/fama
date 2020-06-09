import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

const App = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(App);
