import './App.css';

import * as React from 'react';
import { Route } from 'react-router';

// Contenedores
import Login from './containers/Login'

class App extends React.Component {
 public render() {
  return (
   <Route exact={true} path='/' component={Login}/>
  );
 }
}

export default App;
