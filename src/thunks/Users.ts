import { Dispatch } from 'redux';
import { IServices } from '../services/index'

export interface ILogin {
 email: string,
 password: string
}

export default function reducer(state = {}) {
 return state
}

export const login = ({ email, password }: ILogin) =>
 async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
  await auth.signInWithEmailAndPassword(email, password)
  // tslint:disable-next-line:no-console
 }
