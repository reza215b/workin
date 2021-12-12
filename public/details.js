var database = firebase.database()

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    const uid = user.uid;
    var projectId = getProjectId("projectId");
    getCompanyDescription(projectId);
    getProjectData(projectId);
    
  } else {
    // No user is signed in.
  }
});

function getProjectId( projectId ){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(projectId);
}

function getProjectData(projectId){
    firebase.database().ref('projects/'+projectId).once('value').then(function(snapshot){
        var user = firebase.auth().currentUser;
        const uid = user.uid;
        var data = snapshot.val();
        
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("duration").innerHTML = data.duration;
        document.getElementById("workHours").innerHTML = data.workHours;
        document.getElementById("salary").innerHTML = data.salary;
        document.getElementById("description").innerHTML = data.description;
        document.getElementById("responsibilities").innerHTML = data.responsibilities;
        document.getElementById("requirements").innerHTML = data.requirements;
    })
}

function getCompanyDescription(projectId){
    firebase.database().ref('projects/'+projectId).once('value').then(function(snapshot){
        var data = snapshot.val();
        firebase.database().ref('company/'+data.createdBy).once('value').then(function(snapshot){
          var data = snapshot.val();
          document.getElementById("companyName").innerHTML = data.companyDescription;
        })
      })
}