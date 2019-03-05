import './App.css';

import { History } from 'history'
import * as React from 'react';
import { Route } from 'react-router'

// Contenedores
import Login from './containers/Login'
import Register from './containers/Register'

// Importando servicios
import services from './services'

// Creando interface para APP
interface IAppProps {
 history: History
}

class App extends React.Component<IAppProps> {

 public state = {
  loading: true,
 }

 public componentDidMount() {
  const { auth } = services
  auth.onAuthStateChanged(user => {
   if (user) {
    if (['/', '/register'].indexOf(location.pathname) > -1) {
     const { history } = this.props
     history.push('/app/service')
    }
   } else {
    if (/\app\/./.test(location.pathname)) {
     const { history } = this.props
     history.push('/')
    }
   }
   // tslint:disable-next-line:no-console
   this.setState({
    loading: false
   })
  })
 }

 public render() {
  const { loading } = this.state
  return (
   loading ? 'Loading' : <div>
    <Route exact={true} path='/' component={Login} />
    <Route exact={true} path='/register' component={Register} />
   </div>
  );
 }
}

export default App;
