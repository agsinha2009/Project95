const firebaseConfig={
      apiKey: "AIzaSyAbAo6z6J5wnd42N9NW41ZbOO_nFmot510",
      authDomain: "project94-3c070.firebaseapp.com",
      databaseURL: "https://project94-3c070-default-rtdb.firebaseio.com",
      projectId: "project94-3c070",
      storageBucket: "project94-3c070.appspot.com",
      messagingSenderId: "184587712369",
      appId: "1:184587712369:web:81ba274b73440a2c5c28d0"
    };
  

    // Initialize Firebase
   firebase=initializeApp(firebaseConfig)
    user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomname"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
     
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(
            function(childSnapshot) {
                  childKey= childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room_name-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}