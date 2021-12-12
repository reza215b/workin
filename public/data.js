const firebaseConfig = {
  apiKey: "AIzaSyAyrUptJBfRavZ9Fv5ghdp7ADpvuzDWJTw",
  authDomain: "workin-df7eb.firebaseapp.com",
  projectId: "workin-df7eb",
  storageBucket: "workin-df7eb.appspot.com",
  messagingSenderId: "480731653879",
  appId: "1:480731653879:web:9ed025dfed2968923cd5f2",
  measurementId: "G-T7FHBQJET7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();

var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        fullname: getId('fname'),
        username: getId('fusername'),
        email : getId('eemail'),
        phonenumber: getId('lphone'),
        password : getId('lpassword'),
        confirmpassword : getId('lconfirm')
    });

    alert("Successfully Signed Up");
    
    function validate(){
      var password = document.getElementById("lpassword").value;
      var confirmPassword = document.getElementById("lconfirm").value;
      if (password != confirmPassword) {
          alert("Passwords do not match.");
          return false;
      }
      alert("Successfully Signed Up");
    }
    
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}