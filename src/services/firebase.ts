import * as firebase from 'firebase'
import { environment } from '../environment/environment'

const config = {
 apiKey: environment.FIREBASE.API_KEY_FIREBASE,
 authDomain: environment.FIREBASE.AUTH_DOMAIN,
 databaseURL: environment.FIREBASE.DATABASE_URL,
 messagingSenderId: environment.FIREBASE.MESSAGING_SENDER_ID,
 projectId: environment.FIREBASE.PROJECT_ID,
 storageBucket: environment.FIREBASE.STORAGE_BUCKET,
};

firebase.initializeApp(config);

// Exportando servicios
export const auth = firebase.auth()
export const db = firebase.firestore()
