import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAZeHJgieIdEGCbAM0lXpaWu-sjAm6-nQg", // Add API Key
  databaseURL:"https://project2-697da-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

let userNamePrompt = prompt("Enter you User Name:")
while(userNamePrompt == null){
  userNamePrompt = prompt("Enter you User Name:")
}

export const userName = userNamePrompt;
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
