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

    console.log("user ref:" + userRef);



    userRef.get().then(function (doc) {
        if (doc.exists) {
            inUser = doc.data();
            console.log("Got User: ");
            console.log(inUser);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });


}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        storageRef.child('profileImages/' + user.uid).getDownloadURL().then(function (url) {
            inUser.photoUrl = url;
        }).catch(function (error) {
            // Handle any errors
        });
        inUser.username = user.displayName;
        console.log(inUser);
        getUser();

    } else {
        // No user is signed in.
    }
});
