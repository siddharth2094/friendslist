import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDg45c0KNWvov5HrfLfHyhBRFgfBowKn48",
  authDomain: "motokaart-firebase.firebaseapp.com",
  projectId: "motokaart-firebase",
  storageBucket: "motokaart-firebase.appspot.com",
  messagingSenderId: "267452287956",
  appId: "1:267452287956:web:4721dc7ee22f978d4de441",
}

firebase.initializeApp(config)

export default firebase;