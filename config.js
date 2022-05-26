import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCOLFIHKHrp8kM5EXNXnLoZBbdox0KWS6k",
  authDomain: "complaint-forum-35a9c.firebaseapp.com",
  projectId: "complaint-forum-35a9c",
  storageBucket: "complaint-forum-35a9c.appspot.com",
  messagingSenderId: "975211373929",
  appId: "1:975211373929:web:bd8f6a70999b18e1b849f8"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

