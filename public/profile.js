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

var database = firebase.database()
let inputnama = document.getElementById("inputName");
let inputemail = document.getElementById("inputEmail")
let inputphone = document.getElementById("inputPhone")
let inputdesc = document.getElementById("inputDesc")
let inputalamat = document.getElementById("inputAlamat")
let inputskills = document.getElementById("inputSkills")
let inputporto = document.getElementById("inputPorto")
let inputexp = document.getElementById("inputExp")

var updBtn = document.getElementById("updBtn");

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  var user = firebase.auth().currentUser;
  const uid = user.uid;
  
  if(user != null){

    //var email_id = user.uid;
    // document.getElementById("userName").innerHTML = "Hi " + email_id;
    var user_ref = database.ref('users/' + uid + '/full_name')
    var email_ref = database.ref('users/' + uid + '/email')
    var phone_ref = database.ref('users/' + uid + '/phone')
    var desc_ref = database.ref('users/' + uid + '/desc')
    var alamat_ref = database.ref('users/' + uid + '/address')
    var porto_ref = database.ref('users/' + uid + '/portofolio')
    var exp_ref = database.ref('users/' + uid + '/experience')
    var skills_ref = database.ref('users/' + uid + '/skills')
    var web_ref = database.ref('users/' + uid + '/web')
    var github_ref = database.ref('users/' + uid + '/github')
    var twitter_ref = database.ref('users/' + uid + '/twitter')
    var instagram_ref = database.ref('users/' + uid + '/instagram')
    var facebook_ref = database.ref('users/' + uid + '/facebook')
    user_ref.on('value', function(snapshot){
        var data = snapshot.val()

        inputnama.value = snapshot.val();
        document.getElementById("namalengkap").innerHTML = data;
      })
    email_ref.on('value', function(snapshot){
        var data = snapshot.val()

        inputemail.value = snapshot.val();
      })
    phone_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputphone.value = snapshot.val();
        })
    desc_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputdesc.value = snapshot.val();
          document.getElementById("aboutme").innerHTML = data;
        })
    alamat_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputalamat.value = snapshot.val();
          document.getElementById("alamat").innerHTML = data;
        })
    skills_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputskills.value = snapshot.val();
        })
    porto_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputporto.value = snapshot.val();
        })
    exp_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputexp.value = snapshot.val();
        })
    web_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputweb.value = snapshot.val();
          document.getElementById("inputWeb").innerHTML = data;
        })
    github_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputgit.value = snapshot.val();
          document.getElementById("inputGit").innerHTML = data;
        })
    twitter_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputtwt.value = snapshot.val();
          document.getElementById("inputTwt").innerHTML = data;
        })
    instagram_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputig.value = snapshot.val();
          document.getElementById("inputIg").innerHTML = data;
        })
    facebook_ref.on('value', function(snapshot){
          var data = snapshot.val()

          inputfb.value = snapshot.val();
          document.getElementById("inputFb").innerHTML = data;
        })

    // const uid = user.uid;
    // const name = user.full_name;
    // document.getElementById("userName").innerHTML= name;
    // console.log(uid)
    // console.log(user.uid)
  }
 } else{
  // No user is signed in.
  }
      }
  )
// let file = {};

// function chooseFile(e){
//     file = e.target.files[0];
// }


function UpdateData(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    
    if(user != null){
      let updetbuton = document.getElementById('updBtn');
//        database.ref('users/' + uid + '/avatar').put(file).then(function(){
//            console.log("berhasil")
//        }).catch(error => {
//           console.log(error.message);
 //     })

      var user_data = {
          full_name : inputnama.value,
          email : inputemail.value,
          phone : inputphone.value,
          desc : inputdesc.value,
          address: inputalamat.value,
          portofolio: inputporto.value,
          skills: inputskills.value,
          experience: inputexp.value
      }
      alert('Success!')
      database.ref('users/' + uid).update(user_data);
    }
  } else {
    // No user is signed in.
  }
});
}

let inputweb = document.getElementById("inputWebs")
let inputgit = document.getElementById("inputGits")
let inputtwt = document.getElementById("inputTwts")
let inputig = document.getElementById("inputIgs")
let inputfb = document.getElementById("inputFbs")

function sosmed(){
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var user = firebase.auth().currentUser;
        const uid = user.uid;
        
        if(user != null){
          var user_data = {
              web  : inputweb.value,
              github : inputgit.value,
              twitter: inputtwt.value,
              instagram: inputig.value,
              facebook: inputfb.value
          }
          alert('Success!')
          database.ref('users/' + uid).update(user_data);
        }
      } else {
        // No user is signed in.
      }
    });
  }