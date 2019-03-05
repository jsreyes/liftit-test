import * as React from 'react';

// Definiendo estilos para Title Component
const style = {
 color: "#555"
}

export default class Title extends React.Component {
 public render() {
  return (
   <h2 {...this.props} style={style}/>
  )
 }
}