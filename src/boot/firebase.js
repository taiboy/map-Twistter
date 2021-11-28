// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCdWlnfl5ayBsAs7aTCpilYyYjCNphGJVE',
  authDomain: 'tgi-saigai-webapp.firebaseapp.com',
  projectId: 'tgi-saigai-webapp',
  storageBucket: 'tgi-saigai-webapp.appspot.com',
  messagingSenderId: '51123335219',
  appId: '1:51123335219:web:c252b8589318d2f37db346'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
