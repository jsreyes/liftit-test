import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../services/index'

// Creando acciones
const FIND_ROUTE = '[SERVICE] Find Route'
const FIND_ROUTE_SUCCESS = '[SERVICE] Find Route Success'
const FIND_ROUTE_FAIL = '[SERVICE] Find Route Fail'

// Interface de Login
export interface IRequestService {
 description: string,
 destinationAddress: string,
 distance: string
 estimatedTime: string,
 originAddress: string,
}

// Funciones de las acciones
const fetchFindRoute = (description: string, destinationAddress: string, originAddress: string) => ({
 type: FIND_ROUTE,
})

const fetchFindRouteSuccess = (data: IRequestService) => ({
 data,
 type: FIND_ROUTE_SUCCESS,
})

const fetchFindRouteError = (error: Error) => ({
 error,
 type: FIND_ROUTE_FAIL,
})

// Estado inicial
const initialState = {
 description: undefined,
 destinationAddress: undefined,
 distance: undefined,
 estimatedTime: undefined,
 originAddress: undefined,
}

export default function reducer(state = initialState, action: AnyAction) {
 switch (action.type) {
  case FIND_ROUTE:
   return {
    ...state,
   }

  case FIND_ROUTE_SUCCESS:
   return {
    ...state,
    data: action.payload
   }

  case FIND_ROUTE_FAIL:
   return {
    ...state,
    error: action.error
   }

  default:
   return state
 }
}

export const requestService = (payload: IRequestService) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  // tslint:disable-next-line:no-console
  console.log(payload.originAddress, ' este es el payload')
  // tslint:disable-next-line:no-console
  console.log(payload.originAddress, ' esta es la direccion de orgen')
  dispatch(fetchFindRoute(payload.description, payload.destinationAddress, payload.originAddress))
  const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + payload.destinationAddress +'&destination=' + payload.originAddress + '&key=AIzaSyD_7DT7arDmbXGcwIdZ68-HwGH5nwenAEE'
  try {
   // tslint:disable-next-line:no-console
   console.log(payload.originAddress, ' esta es la direccion de orign')

   const result = await fetch(url)
   // tslint:disable-next-line:no-console
   console.log(result, ' este es el resultado de la respuesta del servicio')
   const data = {
    description: 'Este fue',
    destinationAddress: 'Bogota',
    distance: '12km',
    estimatedTime: '30min',
    originAddress: 'Medellin',
   }
   dispatch(fetchFindRouteSuccess(data))

  } catch (error) {
   // tslint:disable-next-line:no-console
   console.log(payload.destinationAddress, ' esta es la direccion de destino')
   dispatch(fetchFindRouteError(error))

  }

  //  dispatch(fetchLogin())
  //  const a = await auth.signInWithEmailAndPassword(email, password)
  //  try {
  //     // tslint:disable-next-line:no-console
  //     console.log(a, ' esto es lo qe responde')
  //   dispatch(fetchLoginSuccess(a))
  //  } catch (error) {
  //     // tslint:disable-next-line:no-console
  //   console.log(error, ' este es el error')
  //   dispatch(fetchLoginError(error))
 }



