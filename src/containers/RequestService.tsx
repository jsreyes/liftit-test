import * as React from 'react'
import { connect } from 'react-redux'

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import RequestServiceForm from '../components/forms/RequestServiceForm'
import Map from '../components/MapContainer'
import Title from '../components/Title'


import { IRequestService, requestService as requestThunk } from '../thunks/RequestService'

const styleDivsShowData = {
 display: 'flex',
 justifyContent: 'center',
 padding: '10px'
}

const styleMap = {
 height: '400px',
 padding: '15px',
 width: '700px',
}


interface IRequestServiceProps {
 requestService: (a: IRequestService) => void,
 coordenates?: any,
 distance?: any,
 estimatedTime?: any,
}

class RequestService extends React.Component<IRequestServiceProps> {

 constructor(props: IRequestServiceProps) {
  super(props)
 }
 public render() {
  const { requestService, distance, estimatedTime, coordenates } = this.props 
  return (
   <Container center={true} viewLogin={true}>
    <Card>
     <Title>Solicitar Servicio</Title>
     <RequestServiceForm onSubmit={requestService} />
     {distance ? <div style={styleDivsShowData}>Distancia: {distance}</div> : ''}
     {estimatedTime ? <div style={styleDivsShowData}>Tiempo Estimado: {estimatedTime}</div> : ''}
    </Card>
    {coordenates ? <aside style={styleMap}><Map center={{ lat: 2.8894434, lng: -73.783892 }} style={styleMap} zoom={4} data={coordenates} /></aside> : ''}
   </Container>
  )
 }
}

const mapStateToProps = (state: any) => {
 const { RequestService: { distance, estimatedTime, coordenates } } = state
 return {
  coordenates,
  distance,
  estimatedTime
 }
}

const mapDispatchToProps = (dispatch: any) => ({
 requestService: (payload: IRequestService) => dispatch(requestThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestService)
