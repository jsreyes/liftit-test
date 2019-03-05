import * as React from 'react';
import './App.css';

import Card from './components/Card';
import Container from './components/Container';
import Login from './containers/Login';
import Title from './components/Title';

class App extends React.Component {
 public render() {
  return (
   <Container center={true}>
    <Card>
     <Title>Login</Title>
     <Login />
    </Card>
   </Container>
  );
 }
}

export default App;
