import * as React from 'react'
import spinner from '../assets/loading.gif'

// Definiendo stilos para el spinner
const style = {
 container: {
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
 }
}

export default class Spinner extends React.Component {
 public render() {
  return (
   <div style={style.container}>
    <img src={spinner} alt="spinner" />
   </div>
  )
 }
}