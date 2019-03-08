import * as React from 'react';

// import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

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
    <Button block={true}>Enviar</Button>
    <Center>
     Aqui va el componente del mapa
    </Center>
   </form>
  )
 }
}

export default reduxForm({
 form: 'request-service'
})(RequestServiceForm)