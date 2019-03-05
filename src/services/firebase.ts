import * as firebase from 'firebase'

const config = {
 apiKey: "AIzaSyDWjJjGLCY89qyY267esoKdmP7l-Xoz96Y",
 authDomain: "liftit-test-9a9bc.firebaseapp.com",
 databaseURL: "https://liftit-test-9a9bc.firebaseio.com",
 messagingSenderId: "711684630109",
 projectId: "liftit-test-9a9bc",
 storageBucket: "liftit-test-9a9bc.appspot.com",
};

firebase.initializeApp(config);

// Exportando servicios
export const auth = firebase.auth()
export const db = firebase.firestore()
