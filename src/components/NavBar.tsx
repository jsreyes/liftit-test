import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { faMapMarkedAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { logout as logoutThunk } from '../thunks/Users'

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

interface INavBarProps {
 logout: any
}

class NavBar extends React.Component<INavBarProps> {
 public render() {
  const { logout } = this.props
  // tslint:disable-next-line:no-console
  console.log(this.props, logout,  ' estas son las propiedades del request service')
  return (
   <div style={style.navbar}>
    <Link style={style.link} to='/app/service'><FontAwesomeIcon icon={faMapMarkedAlt} /> Liftit Test</Link>
    <div style={{ float: 'right' }}>
     <Link style={style.link} to='/' onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Salir</Link>
    </div>
   </div>
  )
 }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => ({
 logout: () => dispatch(logoutThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
