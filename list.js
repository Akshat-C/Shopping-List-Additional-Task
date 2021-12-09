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

  function taketoRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "items_page.html";
  }
  
  function show_name()
  {
      username = localStorage.getItem("username");
      document.getElementById("welcome_head").innerHTML = "Welcome " + username;
  
      function getData() {firebase.database().ref(username).on('value', function(snapshot) {document.getElementById("all_lists").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
         console.log("RoomNames", Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='taketoRoomName(this.id)'>"+Room_names+"</div><hr>";
         document.getElementById("all_lists").innerHTML+= row;
         //End code
         });});}
      getData();
  }
  
  function logout()
  {
      window.location = "index.html";
  }
  
  function newList()
  {
      rname = document.getElementById("new_room").value;
      localStorage.setItem("room_name", rname);
  
      firebase.database().ref(username).child(rname).update({
          purpose: "adding room name"
      });
  
      window.location = "items_page.html";
  }