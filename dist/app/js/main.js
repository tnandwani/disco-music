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
// USER VARIABLES
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


var sampleSong = {
    name: "Song Name",
    artist: "Artist",
    featuring: false,
    vibes: "#Vibes",
    date: "Date",
    cover: "images/coverArt.png",
    explicit: false,
    likes: 0,
    shares: 0,
    saves: 0
};


var feedArray;



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function getUser() {



    var userRef = usersCollection.doc(inUser.username);
    userRef.get().then(function (doc) {
        if (doc.exists) {
            inUser = doc.data();

            storageRef.child('profileImages/' + inUser.uid).getDownloadURL().then(function (url) {
                // setPhotoUrl(url);
                console.log("Welcome back " + inUser.publicName);
            }).catch(function (error) {
                // Handle any errors



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

function makeFeed(postId) {


    var postRef = postsCollection.doc(postId);

    postRef.get().then(function (doc) {
        if (doc.exists) {
            var postData = doc.data();


            if (feedArray) {
                feedArray.unshift(postData);
            } else if (typeof feedArray == "undefined") {
                feedArray = [postData];
            }


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

}


function getNewPosts() {

    // GET All New Posts
    var postsRef = firebase.database().ref('posts').limitToLast(10);
    postsRef.on('child_added', function (data) {
        var songId = data.key;
        makeFeed(songId);


    });

}

function newPlaying(playing) {

    sampleSong = playing;


}

function test(){

    console.log("Hi");


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


        var playingRef = firebase.database().ref('users/' + inUser.username + '/player/playing');

        playingRef.on('value', function (snapshot) {
            var playing = snapshot.val();
            
            newPlaying(playing);

        });





    } else {
        // No user is signed in.
    }
});
