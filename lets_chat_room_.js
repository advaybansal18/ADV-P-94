var firebaseConfig = {
      apiKey: "AIzaSyClPqZkTjATUJPygnLG0MniSWrTyU-jQmg",
      authDomain: "let-s-chat-web-app-p-93-p-97.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-p-93-p-97-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-p-93-p-97",
      storageBucket: "let-s-chat-web-app-p-93-p-97.appspot.com",
      messagingSenderId: "135371528756",
      appId: "1:135371528756:web:8678720a5a2abebc428861",
      measurementId: "G-WGGV76M5NZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
