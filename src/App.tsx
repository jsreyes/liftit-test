import './App.css';

import * as React from 'react';
import { Route } from 'react-router';

// Contenedores
import Login from './containers/Login'
import Register from './containers/Register'


class App extends React.Component {
 public render() {
  return (
   <div>
    <Route exact={true} path='/' component={Login} />
    <Route exact={true} path='/register' component={Register} />
   </div>
  );
 }
}

export default App;
