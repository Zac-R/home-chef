import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDg76KWbITw3p6XrUhs69VikKeLS7QgFSo",
    authDomain: "home-chef-e23d1.firebaseapp.com",
    projectId: "home-chef-e23d1",
    storageBucket: "home-chef-e23d1.appspot.com",
    messagingSenderId: "916537957860",
    appId: "1:916537957860:web:284fb6674cb4c6d025fbf1"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

//reference timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }