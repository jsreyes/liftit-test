import * as React from 'react';
import { Link } from 'react-router-dom'

import { faMapMarkedAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// definiendo estilos para Button
const style = {
 link: {
  color: '#555',
  textDecoration: 'none'
 },
 navbar: {
  borderBottom: 'solid 1px #aaa',
  padding: '10px 15px',
 },
}

export default class NavBar extends React.Component {
 public render() {
  return (
   <div style={style.navbar}>
    <Link style={style.link} to='/app/newsfeed'><FontAwesomeIcon icon={faMapMarkedAlt} /> Liftit Test</Link>
    <div style={{ float: 'right' }}>
     <Link style={style.link} to='/app/profile'><FontAwesomeIcon icon={faSignOutAlt} /> Salir</Link>
    </div>
   </div>
  )
 }
}