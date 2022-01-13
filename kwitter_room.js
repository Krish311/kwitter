
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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
