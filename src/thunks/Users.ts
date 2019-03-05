import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../services/index'

// Creando acciones
const LOGIN = '[LOGIN] Login'
const LOGIN_SUCCESS = '[LOGIN] Login Success'
const LOGIN_FAIL = '[LOGIN] Login Fail'

// Interface de Login
export interface ILogin {
 data?: {},
 email: string,
 password: string,
}

// Funciones de las acciones
const fetchLogin = () => ({
 type: LOGIN,
})

const fetchLoginSuccess = (payload: any) => ({
 payload,
 type: LOGIN_SUCCESS,
})

const fetchLoginError = (error: Error) => ({
 error,
 type: LOGIN_FAIL,
})

// Estado inicial
const initialState = {
 data: {},
 email: undefined,
 password: undefined,
}

export default function reducer(state = initialState, action: AnyAction) {
 switch (action.type) {
  case LOGIN:
   return {
    ...state,
   }

  case LOGIN_SUCCESS:
   return {
    ...state,
    data: action.payload
   }

  case LOGIN_FAIL:
   return {
    ...state,
    data: action.payload
   }

  default:
  return state
 }
}

export const login = ({ email, password }: ILogin) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  dispatch(fetchLogin())
  const a = await auth.signInWithEmailAndPassword(email, password)
  try {
     // tslint:disable-next-line:no-console
     console.log(a, ' esto es lo qe responde')
   dispatch(fetchLoginSuccess(a))
  } catch (error) {
     // tslint:disable-next-line:no-console
   console.log(error, ' este es el error')
   dispatch(fetchLoginError(error))
  }
 }

export const register = ({ email, password }: ILogin) =>
 async (dispatch: Dispatch, getState: () => any, { auth, db }: IServices) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password)
  // tslint:disable-next-line:no-console
  const { user } = userCredential
  const id = user ? user.uid : undefined
  const doc = db.collection('users').doc(id)
  await doc.set({ role: 'user' })
  // tslint:disable-next-line:no-console
 }
