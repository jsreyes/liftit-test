// Se define constante para validar campos
const validate = (values) => {
 // tslint:disable-next-line:no-console
 const errors = {
  description: '',
  destinationAddress: '',
  email: '',
  originAddress: '',
  password: '',
 }
 // Cuando los campos estan vacios
 if (!values.email) { errors.email = 'Campo Obligatorio' }
 if (!values.password) { errors.password = 'Campo Obligatorio' }
 if (!values.description) { errors.description = 'Campo Obligatorio' }
 if (!values.destinationAddress) { errors.destinationAddress = 'Campo Obligatorio' }
 if (!values.originAddress) { errors.originAddress = 'Campo Obligatorio' }

 // El password debe tener una longitud minima de 6 caracteres
 if (values.password && values.password.length < 6) { errors.password = 'Contraseña debe tener minimo 6 caracteres' }

 // Validación correo
 if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = 'Correo Invalido' }

 return errors
}

export default validate