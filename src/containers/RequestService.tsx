import * as React from 'react'
import { connect } from 'react-redux'

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import RequestServiceForm from '../components/forms/RequestServiceForm'
import Title from '../components/Title'


import { IRequestService, requestService as requestThunk } from '../thunks/RequestService'


interface IRequestServiceProps {
 requestService: (a: IRequestService) => void,
 distance?: any,
 estimatedTime?: any,
}

class RequestService extends React.Component<IRequestServiceProps> {

 constructor(props: IRequestServiceProps){
  super(props)
 }
 public render() {
  // tslint:disable-next-line:no-console
  console.log(this.props, ' estas son las propiedades del request service')
  const { requestService, distance, estimatedTime } = this.props
  return (
   <Container center={true} viewLogin={true}>
    <Card>
     <Title>Solicitar Servicio</Title>
     <RequestServiceForm onSubmit={requestService}/>
     {distance ? <div>{distance}</div> : ''}
     {estimatedTime ? <div>{estimatedTime}</div> : ''}
    </Card>
   </Container>
  )
 }
}

const mapStateToProps = (state: any) => {
 const { RequestService: {distance, estimatedTime} } = state
 return {
  distance,
  estimatedTime 
 }
}

const mapDispatchToProps = (dispatch: any) => ({
 requestService: (payload: IRequestService) => dispatch(requestThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestService)
