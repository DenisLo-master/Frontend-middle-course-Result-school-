import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYpdWNEi2OABB_BBw1rZTx8FOfHaFPK5w",
  authDomain: "rick-morty-2d877.firebaseapp.com",
  projectId: "rick-morty-2d877",
  storageBucket: "rick-morty-2d877.appspot.com",
  messagingSenderId: "470342969519",
  appId: "1:470342969519:web:e2150d15dc38b9cb75cc5a"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebaseApp.auth()

export const dataBase = getDatabase(firebaseApp)
