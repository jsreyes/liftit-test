import * as React from 'react';
import './App.css';

import Card from './components/Card';
import Container from './components/Container';
import Title from './components/Title';

class App extends React.Component {
 public render() {
  return (
   <Container center={true}>
    <Card>
     <Title>Login</Title>
    </Card>
   </Container>
  );
 }
}

export default App;
