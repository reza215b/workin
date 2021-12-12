var database = firebase.database()
var temp1;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    
    if(user != null){

      var email_id = user.uid;
      var user_ref = database.ref('users/' + uid + '/full_name')
        user_ref.on('value', function(snapshot){
          var data = snapshot.val()
          
          document.getElementById("userName").innerHTML = "Hi " + data;
        })
    }
    displayData();
    displayBookmarks();
    displayTombolCreateProject()
  } else {
    // No user is signed in.
  }
});

function displayTombolCreateProject(){
  firebase.database().ref('company/').once('value').then(function(snapshot){
    var postDiv = document.getElementById('createButton');
    var data = snapshot.val();
    var user = firebase.auth().currentUser;
    const uid = user.uid;

    for(let[key,value] of Object.entries(data)){
      if(key==uid){
        postDiv.innerHTML = 
        "<button  class='btn btn-primary' type='button' style='border-radius: 37; margin-bottom: 20px; font-size: 12px;width: 150px;background: #242e4d;border-width: 0px;'><a href='Post-Project.html'style='text-decoration: none; color: #ffff; ' >Create Project</a></button>"
        +postDiv.innerHTML;
      }

    //menampilkan semua post
      
    }
  })
}


function displayData(){
  firebase.database().ref('projects/').once('value').then(function(snapshot){
    var postDiv = document.getElementById('post');
    var data = snapshot.val();
    // console.log(data);
    post.innerHTML="";
    //menampilkan semua post
    for(let[key,value] of Object.entries(data)){
      var hari = ['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'];
          var bulan = ['January','February','March','April','May','June','July','Augustus','September','October','November','December']
          var date = new Date(value.dateCreated * 1000);
          var hours = date.getHours(); 
          var minute = date.getMinutes();
          var day = hari[date.getDate()+1];
          var days = date.getDate();
          var month = bulan[date.getMonth()+1];
      
      postDiv.innerHTML = 
          "<div class='card-body' style='border-radius: 15px;margin-bottom: 10px;background: #ffffff;'>"
          +"<h4 class='card-title'>"+value.title+"</h4>"
          +"<p class='card-text' style='color: var(--bs-gray-600);font-size: 10px;text-align: left;margin: -10px 0px 0px;'>"+days+" "+month+", "+hours+":"+minute+"</p>"
          +"<p class='card-text' style='font-size: 12px;margin: 13px 0px 20px ;'>"+value.caption+"</p>"
          +"<p class='card-text' style='font-size: 12px;margin: 0px 0px 5px;'>"+value.likeCount+" People liked this</p><button id="+key+" onclick='like(this.id)' class='btn btn-primary' type='button' style='border-radius: 37;font-size: 12px;width: 90px;background: #242e4d;border-width: 0px;'>Like</button><button id="+key+" onclick='displayDetail(this.id)' class='btn btn-primary' type='button' style='border-radius: 37;font-size: 12px;width: 90px;background: #242e4d;border-width: 0px;transform: translate(25px);'>Details</button><button id="+key+" onclick='share(this.id)' class='btn btn-primary float-end' type='button' style='transform: translate(-125px);font-size: 12px;width: 90px;color: rgb(255, 255, 255);background: #242e4d;border-width: 0px;'>Share</button><button id='"+key+"' onclick='bookmark(this.id)' class='btn btn-primary float-end justify-content-xxl-end' type='button' style='transform: translate(75px);font-size: 12px;width: 90px;background: #242e4d;border-width: 0px;'>Bookmarks</button>"
          +"</div>"+postDiv.innerHTML;
    }
  })
}

function displayDetail(key){
  window.location.href= 'Details.html?projectId='+key;
}

function displayBookmarks(){
  firebase.database().ref('bookmarks/').once('value').then(function(snapshot){
    var bookmarksDiv = document.getElementById('bookmarks');
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    var data = snapshot.val();
    bookmarks.innerHTML="";
    // console.log(data);

    //menampilkan semua Bookmarks
    for(let[key,value] of Object.entries(data)){
      
      if(value.userId==uid){
        
        firebase.database().ref('projects/'+value.postId).once('value').then(function(snapshot){
          var data = snapshot.val();
          console.log(data)
          var hari = ['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'];
          var bulan = ['January','February','March','April','May','June','July','Augustus','September','October','November','December']
          var date = new Date(data.dateCreated * 1000);
          var hours = date.getHours(); 
          var minute = date.getMinutes();
          var day = hari[date.getDate()+1];
          var days = date.getDate();
          var month = bulan[date.getMonth()+1];
          
            bookmarksDiv.innerHTML = 
                "<div id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-container-style u-list-item u-repeater-item u-shape-rectangle'>"
                +"  <div id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-container-layout u-similar-container u-container-layout-10'>"
                +"    <div id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-custom-color-1 u-expanded-width u-radius-5 u-shape u-shape-round u-shape-2'></div>"
                +"   <p id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-small-text u-text u-text-body-alt-color u-text-default u-text-variant u-text-17'></p>"
                +"    <h1 id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-text u-text-body-alt-color u-text-default u-title u-text-18'><b>"+data.title+"</b></h1>"
                +"    <p id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-large-text u-text u-text-variant u-text-white u-text-19'>"+days+" "+month+", "+hours+":"+minute+"</p>"
                +"    <img id='"+value.postId+"' onclick='displayDetail(this.id)' class='u-image u-image-circle u-image-5' src='images/Foto_profil.jpg'  data-image-width='1280' data-image-height='852'></img>"
                +"  </div>"
                +"</div>"
                +bookmarksDiv.innerHTML;        
        })
      }
    }
  })
}

function getCompanyDescription(id){
  firebase.database().ref('company/'+id).once('value').then(function(snapshot){
    var data = snapshot.val(); 
    var result=data.companyName;
  })
}

function bookmark(key){
  firebase.database().ref('projects/'+key).once('value').then(function(snapshot){
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    var data = snapshot.val();
    // console.log(data);
    
    //membuat bookmarks baru
    const bookmarksRef = firebase.database().ref('bookmarks')  
        bookmarksRef.push({
            postId : key,
            dateCreated : Date.now(),
            userId: uid
        })
        displayBookmarks();
    }
  )
}

function like(id){
  firebase.database().ref('projects/'+id).once('value').then(function(snapshot){
    var data = snapshot.val();
    var likeCount=data.likeCount+1;

    const projectsRef = firebase.database().ref('projects/'+id)
        projectsRef.update({
            likeCount : likeCount
        })
        displayData();
  })
}

const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user signed out");
    window.location.href='Login-Page.html';
  });
})

function share(id){
  var link='https://workin-test-69bba.web.app/Details.html?projectId='+id;
  navigator.clipboard.writeText(link);
  alert('copied to clipboard');
}

