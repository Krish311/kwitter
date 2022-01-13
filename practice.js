 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6j5dwYcykT9arzXGm1fUZI2J4c379Bh4",
  authDomain: "kwitter-a19a3.firebaseapp.com",
  databaseURL: "https://kwitter-a19a3-default-rtdb.firebaseio.com",
  projectId: "kwitter-a19a3",
  storageBucket: "kwitter-a19a3.appspot.com",
  messagingSenderId: "608421120795",
  appId: "1:608421120795:web:78e1a85628cab38a27a1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
