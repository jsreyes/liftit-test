import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../services/index'

// Creando acciones
const FIND_ROUTE = '[SERVICE] Find Route'
const FIND_ROUTE_SUCCESS = '[SERVICE] Find Route Success'
const FIND_ROUTE_FAIL = '[SERVICE] Find Route Fail'

// Interface de Login
export interface IRequestService {
 description: string,
 destination_address: string,
 distance: string
 estimated_time: string,
 origin_address: string,
}

// Funciones de las acciones
// const fetchFindRoute = () => ({
//  type: FIND_ROUTE,
// })

// const fetchFindRouteSuccess = (payload: any) => ({
//  payload,
//  type: FIND_ROUTE_SUCCESS,
// })

// const fetchFindRouteError = (error: Error) => ({
//  error,
//  type: FIND_ROUTE_FAIL,
// })

// Estado inicial
const initialState = {
 description: undefined,
 destination_address: undefined,
 distance: undefined,
 estimated_time: undefined,
 origin_address: undefined,
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
    data: action.payload
   }

  default:
  return state
 }
}

export const requestService = ({ origin_address, destination_address }: IRequestService) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
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
 


