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
 description,
 destinationAddress,
 originAddress,
 type: FIND_ROUTE,
})

const fetchFindRouteSuccess = (data: any) => ({
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
    description: action.description,
    destinationAddress: action.destinationAddress,
    originAddress: action.originAddress
   }

  case FIND_ROUTE_SUCCESS:
   return {
    ...state,
    distance: action.data.distance,
    estimatedTime: action.data.estimatedTime
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

export const requestService = ({ description, destinationAddress, originAddress }: IRequestService) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  dispatch(fetchFindRoute(description, destinationAddress, originAddress))
  const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + originAddress + '&destination=' + destinationAddress + '&key=AIzaSyD_7DT7arDmbXGcwIdZ68-HwGH5nwenAEE'
  try {

   const result = await fetch(url)
    .then((response) => {
     return response.json();
    })
    .then((data) => {
     return data;
    });

   const dataResponse = {
    description,
    destinationAddress,
    distance: result.routes[0].legs[0].distance.text,
    estimatedTime: result.routes[0].legs[0].duration.text,
    originAddress
   }

   dispatch(fetchFindRouteSuccess(dataResponse))

  } catch (error) {
   // tslint:disable-next-line:no-console
   console.log(error, ' este es el error')
   dispatch(fetchFindRouteError(error))
  }
 }



