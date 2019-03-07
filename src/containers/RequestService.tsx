import * as React from 'react'
import { connect } from 'react-redux';

// Importando componentes
import Card from '../components/Card'
import Container from '../components/Container'
import RequestServiceForm from '../components/forms/RequestServiceForm'
import Title from '../components/Title'

import { IRequestService, requestService as requestThunk } from '../thunks/RequestService'

interface IRequestServiceProps {
 requestService: (a: IRequestService) => void
}

class RequestService extends React.Component<IRequestServiceProps> {

 public render() {
  const { requestService } = this.props
  return (
   <Container center={true}>
    <Card>
     <Title>Solicitar Servicio</Title>
      <RequestServiceForm onSubmit={requestService}/>
    </Card>
   </Container>
  )
 }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => ({
 requestService: (payload: IRequestService) => dispatch(requestThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestService)
