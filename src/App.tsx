import * as React from 'react';
import './App.css';

import Card from './components/Card';
import Container from './components/Container';
import Title from './components/Title';
// import register from './registerServiceWorker';

class App extends React.Component {
 public render() {
  return (
   <Container center={true}>
    <Card>
     <Title>Registro</Title>
    </Card>
   </Container>
  );
 }
}

export default App;
