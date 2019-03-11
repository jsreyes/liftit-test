import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

// Definiendo estilos para Input
const style = {
 backgroundColor: '#fff',
 border: '1px solid #eee',
 borderRadius: '4px',
 marginBottom: '10px',
 padding: '10px 15px',
 width: 'calc(100% - 30px)',
}

// Definiendo estilos para el span
const spanStyle = {
 color: '#777',
 fontSize: '10px',
 fontWeight: 900,
 textTransform: 'uppercase'
} as React.CSSProperties // Se indica a react que lo tome como propiedades Css, no como un objeto

// Definiendo estilos para el span
const spanErrorsStyle = {
 color: 'red',
 display: 'flex',
 fontSize: '9px',
 justifyContent: 'center',
 paddingBottom: '10px'
} as React.CSSProperties // Se indica a react que lo tome como propiedades Css, no como un objeto

interface IInputProps {
 placeholder?: string,
 label: string
}

const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props => {
 const { input, label, meta } = props
 return (
  <div>
   <span style={spanStyle}>{label}</span>
   <input {...input} {...props} style={style} />
   {meta.touched && meta.error ? <span style={spanErrorsStyle}>{meta.error}</span>: ''}
  </div>
 )
}

export default Input


