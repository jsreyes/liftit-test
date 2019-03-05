import * as React from 'react'
import { connect } from 'react-redux';

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import RegisterForm from '../components/forms/RegisterForm'
import Title from '../components/Title'

import { ILogin, register as registerThunk } from '../thunks/Users'

interface ILoginProps {
 login: (a: ILogin) => void
}

class Register extends React.Component<ILoginProps> {
 public render() {
  const { login } = this.props
  return (
   <Container center={true}>
    <Card>
     <Title>Registro</Title>
      <RegisterForm onSubmit={login}/>
    </Card>
   </Container>
  )
 }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => ({
 login: (payload: any) => dispatch(registerThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
