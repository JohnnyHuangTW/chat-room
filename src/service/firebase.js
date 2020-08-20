import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDm2Zwa3qvi5XIwXscstDU92xe1leBdr-8',
  authDomain: 'chat-room-b869c.firebaseapp.com',
  databaseURL: 'https://chat-room-b869c.firebaseio.com',
  projectId: 'chat-room-b869c',
  storageBucket: 'chat-room-b869c.appspot.com',
  messagingSenderId: '92959956473',
  appId: '1:92959956473:web:5c084a6af960723bbeb128',
  measurementId: 'G-TYVF9PSF7H'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
