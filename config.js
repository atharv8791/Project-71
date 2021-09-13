import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCWI7Od0o9gB78suOuqqgiyyfVWg30VNMQ",
  authDomain: "complaint-forum-79a21.firebaseapp.com",
  projectId: "complaint-forum-79a21",
  storageBucket: "complaint-forum-79a21.appspot.com",
  messagingSenderId: "424754265694",
  appId: "1:424754265694:web:721fd00675ceee466fbecf"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

