////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// START FIREBASE
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var config = {
    apiKey: "AIzaSyDquIdmKQfr-QGF3kyEb28FzAboOPBE36g",
    authDomain: "disco-6a3bf.firebaseapp.com",
    databaseURL: "https://disco-6a3bf.firebaseio.com",
    projectId: "disco-6a3bf",
    storageBucket: "disco-6a3bf.appspot.com",
    messagingSenderId: "71660981931"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();
var storageRef = firebase.storage().ref();


var usersCollection = firestore.collection("users");
var postsCollection = firestore.collection("posts");
var songsCollection = firestore.collection("songs");
var albumsCollection = firestore.collection("albums");


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// USER JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var inUser = {
    username: "username",
    uid: "uid",
    email: "email",
    publicName: "My Profile",
    followers: ["disco"],
    following: ["disco"],
    photoUrl: "images/profile.png"
};

function getUser() {

    var userRef = usersCollection.doc(inUser.username);
    userRef.get().then(function (doc) {
        if (doc.exists) {
            inUser = doc.data();
            storageRef.child('profileImages/' + inUser.uid).getDownloadURL().then(function (url) {
                setPhotoUrl(url);
                console.log("Got User: ");
                console.log(inUser);
               
            }).catch(function (error) {
                // Handle any errors
                console.log("Got User: ");
                console.log(inUser);
                
            });
          
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });


}

function setPhotoUrl(url) { 
    inUser.photoUrl = url;

 }

 function newPostsArray(songID) {

    console.log(songID);
 }



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// START DISCO
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


 // Get User Info
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        inUser.username = user.displayName;
        inUser.uid = user.uid;
        getUser();
      

    } else {
        // No user is signed in.
    }
});


// GET All New Posts
var postsRef = firebase.database().ref('posts');
postsRef.on('child_added', function(data) {
  newPostsArray(data.key);
});
