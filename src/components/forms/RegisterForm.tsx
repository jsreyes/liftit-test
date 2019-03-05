import * as React from 'react';
import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

// Importando componentes
import Button from '../Button'
import Center from '../Center'
import Input from '../Input'

class RegisterForm extends React.Component<InjectedFormProps> {
 public render() {
  const { handleSubmit } = this.props
  return (
   <form onSubmit={handleSubmit}>
    <Field label="Correo" placeholder="Correo" name="email" type="email" component={Input} />
    <Field label="Contraseña" placeholder="Password" name="password" type="password" component={Input}/>
    <Button block={true}>Enviar</Button>
    <Center>
     <Link to='/'>Iniciar Sesión</Link>
    </Center>
   </form>
  )
 }
}

export default reduxForm({
 form: 'register'
})(RegisterForm)