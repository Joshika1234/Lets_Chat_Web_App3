// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA9zoNg7nB0KWyDcDkWtb7oGSN37pNqRzs",
    authDomain: "kwitter-33c28.firebaseapp.com",
    databaseURL: "https://kwitter-33c28-default-rtdb.firebaseio.com",
    projectId: "kwitter-33c28",
    storageBucket: "kwitter-33c28.appspot.com",
    messagingSenderId: "40799626310",
    appId: "1:40799626310:web:75901a3365244f8b151647"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



