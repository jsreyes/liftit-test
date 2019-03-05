import * as React from 'react'
import { connect } from 'react-redux';

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import LoginForm from '../components/forms/LoginForm'
import Title from '../components/Title'

import { ILogin, login as loginThunk } from '../thunks/Users'

interface ILoginProps {
 login: (a: ILogin) => void
}

class Login extends React.Component<ILoginProps> {
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

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => ({
 login: (payload: any) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
