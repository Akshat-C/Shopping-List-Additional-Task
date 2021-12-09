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

function back()
{
    window.location = "index.html";
}

function signup()
{
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value ;
    plen = password.length;

    has_lowcase = password.match(/[a-z]/g);
    has_upcase = password.match(/[A-Z]/g);
    has_num = password.match(/[0-9]/g);
    has_symb = password.match(/[!@#$%^&*]/g);

    if (plen < 8 )
    {
        document.getElementById("required").innerHTML = "*Password Must be at Least 8 Characters";
    } else if (has_lowcase == null || has_upcase == null || has_num == null || has_symb == null)
    {
        document.getElementById("required").innerHTML = "*Password Should Have Lowercase and Uppercase Characters, Numbers and Symbols";
    } else 
    {
        localStorage.setItem( username, password);
        localStorage.setItem("username", username);
        window.location = "list.html";
    }
    
}