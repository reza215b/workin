var firebaseConfig = {
    apiKey: "AIzaSyAyrUptJBfRavZ9Fv5ghdp7ADpvuzDWJTw",
    authDomain: "workin-df7eb.firebaseapp.com",
    databaseURL: "https://workin-df7eb-default-rtdb.firebaseio.com",
    projectId: "workin-df7eb",
    storageBucket: "workin-df7eb.appspot.com",
    messagingSenderId: "480731653879",
    appId: "1:480731653879:web:9ed025dfed2968923cd5f2",
    measurementId: "G-T7FHBQJET7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register(){
Name = document.getElementById('fcompanyname').value
Username = document.getElementById('lusername').value
Email = document.getElementById('eemail').value
Contact = document.getElementById('lcontact').value
Password = document.getElementById('lpassword').value
Password_confirm = document.getElementById('lconfirm').value

if (validate_email(Email) == false){
    alert ('Harap isi email yang benar')
    return
}

auth.createUserWithEmailAndPassword(Email, Password)
.then(function(){
    var user = auth.currentUser
    var database_ref = database.ref()
    
    var user_data = {
        companyName : Name,
        Username : Username,
        Email : Email,
        Contact : Contact,
        password : Password,
        passwordConfirm : Password_confirm,
        companyDescription : ""
    }
    database_ref.child('company/'+ user.uid).set(user_data)
    alert('User Created')     
})
.catch(function(error){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
})
}

function validate_email(Email){
expression = /^[^@]+@\w+(\.\w+)+\w$/
if(expression.test(Email)== true){
    return true
} else{
    return false
}
}