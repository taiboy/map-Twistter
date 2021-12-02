// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD2Az5SMMlD3m0-AfjM_gbda7gsEJZ1_Ow',
  authDomain: 'saigai-webapp-96548.firebaseapp.com',
  databaseURL: 'https://saigai-webapp-96548-default-rtdb.firebaseio.com',
  projectId: 'saigai-webapp-96548',
  storageBucket: 'saigai-webapp-96548.appspot.com',
  messagingSenderId: '312886205222',
  appId: '1:312886205222:web:f6608724f33c2cc9397fe7',
  measurementId: 'G-G3ZFNQ8HV8'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
