var firebaseConfig = {
    apiKey: "AIzaSyBMwdeOMPScS7powASzamxPcZY1QKD1UR8",
    authDomain: "remember-list-ba4ca.firebaseapp.com",
    databaseURL: "https://remember-list-ba4ca-default-rtdb.firebaseio.com",
    projectId: "remember-list-ba4ca",
    storageBucket: "remember-list-ba4ca.appspot.com",
    messagingSenderId: "87797918726",
    appId: "1:87797918726:web:865d05e976dc28832f2787"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  var roomname = localStorage.getItem("room_name");  
  var username = localStorage.getItem("username")
 
  function show_name()
  {
    document.getElementById("welcome_head").innerHTML = "Welcome to " + roomname + " List"
    document.title = roomname + " List"
  }

  function getData() { firebase.database().ref(username).child(roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    item_data = childData;
//Start code
console.log(firebase_message_id);
console.log(item_data);

item_name = item_data['item'];
item_done = item_data['done'];
added_value = "item_display_"+firebase_message_id;

label = "<div class='room_name' style='text-align: center;' title="+item_name+" id="+added_value+">"+item_name;
if (item_done == 'yes') {
  buttontag = " ✔</div><hr>";
}
else {
buttontag = "&nbsp;&nbsp;<button class='btn btn-warning' style='font-size: 17px; padding: 7px; padding-top: 2px; padding-bottom: 2px;' onclick='tick(this.id)' id="+firebase_message_id+">✔</button></div><hr>";
}
row = label + buttontag; 
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function addItem()
{
    item = document.getElementById("item_inp").value;
      firebase.database().ref(username).child(roomname).push({
            item: item,
            done: "no"
      });

      document.getElementById("item_inp").value = " ";
}

function logout()
{
    window.location = "index.html";
}

function back()
{
    window.location = "list.html";
}

function tick(message_id)
{
  cur_value = "item_display_"+message_id;
  single_item = document.getElementById(cur_value).title;
  console.log("message item is- "+ single_item);
  console.log("message id is- "+ message_id);
  button_id = message_id;
  updatedvalue = "yes";
  console.log(updatedvalue);
  
  firebase.database().ref(username).child(roomname).child(button_id).update({
      done: updatedvalue
  });
  
  document.getElementById(button_id).style.display = "none"
  document.getElementById(cur_value).innerHTML = single_item + " ✔";
  
}