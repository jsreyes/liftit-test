import { AnyAction, Dispatch } from 'redux';
import { IServices } from '../services/index'

// Creando acciones
const LOGIN = '[LOGIN] Login'
const LOGIN_SUCCESS = '[LOGIN] Login Success'
const LOGIN_FAIL = '[LOGIN] Login Fail'

const LOGOUT = '[LOGOUT] Logout'
const LOGOUT_SUCCESS = '[LOGOUT] Logout Success'
const LOGOUT_FAIL = '[LOGOUT] Logout Fail'

// Interface de Login
export interface ILogin {
 data?: {},
 email: string,
 insideApp: boolean,
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

const fetchLogout = () => ({
 type: LOGOUT,
})

const fetchLogoutSuccess = (payload: any) => ({
 payload,
 type: LOGOUT_SUCCESS,
})

const fetchLogoutError = (error: Error) => ({
 error,
 type: LOGOUT_FAIL,
})

// Estado inicial
const initialState = {
 data: {},
 email: undefined,
 insideApp: false,
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
    data: action.payload,
    insideApp: true
   }

  case LOGIN_FAIL:
   return {
    ...state,
    data: action.payload
   }

  case LOGOUT:
   return {
    ...state,
   }

  case LOGOUT_SUCCESS:
   return {
    ...state,
    data: {},
    insideApp: false
   }

  case LOGOUT_FAIL:
   return {
    ...state,
    data: action.payload
   }

  default:
   return state
 }
}

// Thunk para loguear
export const login = ({ email, password }: ILogin) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  dispatch(fetchLogin())
  const a = await auth.signInWithEmailAndPassword(email, password)
  try {
   dispatch(fetchLoginSuccess(a))
  } catch (error) {
   dispatch(fetchLoginError(error))
  }
 }

// Thunk para desloguearse
export const logout = () =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  dispatch(fetchLogout())
  const a = await auth.signOut()
  try {
   dispatch(fetchLogoutSuccess(a))
  } catch (error) {
   dispatch(fetchLogoutError(error))
  }
 }


// Thunk para registrarse
export const register = ({ email, password }: ILogin) =>
 async (dispatch: Dispatch, getState: () => any, { auth, db }: IServices) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password)
  const { user } = userCredential
  const id = user ? user.uid : undefined
  const doc = db.collection('users').doc(id)
  await doc.set({ role: 'user' })
 }
