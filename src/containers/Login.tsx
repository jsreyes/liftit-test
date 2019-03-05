import * as React from 'react'

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import LoginForm from '../components/forms/LoginForm'
import Title from '../components/Title'


interface ILoginProps {
 login: any
}

export default class Login extends React.Component<ILoginProps> {
 public render() {
  const { login } = this.props
  return (
   <Container center={true}>
    <Card>
     <Title>Iniciar Sesión</Title>
      <LoginForm onSubmit={login}/>
    </Card>
   </Container>
  )
 }
}