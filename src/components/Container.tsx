import * as React from 'react';
import login from '../assets/img/backgroundLogin.jpg'
import user from '../assets/img/backgroundUser.jpg'

// Definiendo estilos para Container
const style = (center: boolean, viewLogin: boolean) => ({
 alignItems: center ? 'center' : undefined,
 backgroundImage: viewLogin? `url(${user})`: `url(${login})`,
 backgroundSize: 'cover',
 display: 'flex',
 flexDirection: 'column',
 height: viewLogin? 'calc(100vh - 60px)': 'calc(100vh - 20px)',
 justifyContent: center ? 'center' : undefined,
 padding: '10px 15px',
}) as React.CSSProperties

interface IContainerProps {
 center?: boolean,
 viewLogin?: boolean 
}

export default class Container extends React.Component<IContainerProps> {
 public render() {
  const { children, center = false, viewLogin = false } = this.props
  return (
   <div style={style(center, viewLogin)}>
    {children}
   </div>
  )
 }
}