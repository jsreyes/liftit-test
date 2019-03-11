import * as React from 'react';

// import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

// Se importa el archivo con las validaciones
import validate from '../../helpers/validators/validate'

// Importando componentes
import Button from '../Button'
import Center from '../Center'
import Input from '../Input'

class RequestServiceForm extends React.Component<InjectedFormProps> {
 public render() {
  const { handleSubmit } = this.props
  return (
   <form onSubmit={handleSubmit}>
    <Field label="Descripción" placeholder="Agregue la descripción del servicio" name="description" type="text" component={Input} />
    <Field label="Dirección Origen" placeholder="Dirección de Origen" name="originAddress" type="text" component={Input} />
    <Field label="Dirección Destino" placeholder="Dirección de Destino" name="destinationAddress" type="text" component={Input} />
    <Button block={'valid'}>Enviar</Button>
    <Center />
   </form>
  )
 }
}

export default reduxForm({
 form: 'request-service',
 validate
})(RequestServiceForm)