import firebase from 'firebase/app'
import "firebase/storage"
import 'firebase/firestore'
import 'firebase/auth'
import "firebase/database"

const config = {
  apiKey: "AIzaSyARDcPl4fWccJhAT2kipwjFxvEUvamXVTw",
  authDomain: "mangaweb-7c813.firebaseapp.com",
  databaseURL: "https://mangaweb-7c813.firebaseio.com",
  projectId: "mangaweb-7c813",
  storageBucket: "mangaweb-7c813.appspot.com",
  messagingSenderId: "836814747332",
  appId: "1:836814747332:web:e88c9c1c68fd0249897b91",
  measurementId: "G-0YLB7TM33M"
}

firebase.initializeApp(config)
firebase.firestore()

export default firebase