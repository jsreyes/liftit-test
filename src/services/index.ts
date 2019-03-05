
import { auth, firestore } from 'firebase';

import * as firebase from './firebase'

const services = {
 ...firebase,
}

// Interface de servicios a utilizar
export interface IServices {
 auth: auth.Auth
 db: firestore.Firestore,
}

export default services