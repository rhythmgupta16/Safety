import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBeHlOLJWSwWPkjvsID56M2ShJKf1NCLgY",
  authDomain: "disaster-management-5fdfa.firebaseapp.com",
  databaseURL: "https://disaster-management-5fdfa.firebaseio.com",
  projectId: "disaster-management-5fdfa",
  storageBucket: "disaster-management-5fdfa.appspot.com",
  messagingSenderId: "1033564149061",
  appId: "1:1033564149061:web:83f01b0da85b5c061b5a2c",
  measurementId: "G-GR02TTXJ68"
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)


export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
    timestampsInSnapshots: true
})
export default Firebase

