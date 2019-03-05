import * as React from 'react';

// definiendo estilos para Card
const style = {
 textAlign: 'center',
 width: '100%'
} as React.CSSProperties

export default class Center extends React.Component {
 public render() {
  return (
   <div {...this.props} style={style}/>
  )
 }
}