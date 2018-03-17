////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FIREBASE VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

// FIRESTORE
var firestore = firebase.firestore();
var publishBatch = firestore.batch();
var usersCollection = firestore.collection("users");
var postsCollection = firestore.collection("posts");
var songCollection = firestore.collection("songs");
var albumCollection = firestore.collection("albums");
var playlistCollection = firestore.collection("playlists");


// REALTIME
var database = firebase.database();

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function verifyPublish() {

    var rawCaption = document.getElementById("rawCaption").value;
    var rawSongName = document.getElementById("rawSongName").value;

    // is text post
    // requires: only caption
    if (rawCaption.length > 0 && rawSongName.length == 0) {

        var rawPost = {
            caption: rawCaption
        }
        publishText(rawPost);
    }

    // song post
    // requires: song name && song file && 1 vibe


    // album post
    // requires: song name && song file && 1 vibe && album Name 

    // INVALIDS
    // No caption or Song 
    if (rawCaption.length == 0 || rawSongName.length == 0){
        document.getElementById("uploadError").innerHTML = "No Caption or Song Entered"
    }


}


function publishText(rawPost) {

    var timestamp = Date.now();

    var post = {
        username: inUser.username,
        uid: inUser.uid,
        caption: rawPost.caption,
        type: "text",
        date: timestamp,
        content: false
    };

    // Post ID to User Database
    var userPostsRef = database.ref(inUser.username + '/posts');
    var newPostRef = userPostsRef.push();

    newPostRef.set(timestamp);

    // Post to Main with key
    postsCollection.doc(newPostRef.key).set(post)
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}




function publishSong(rawPost) {

    var timestamp = Date.now();


    var post = {
        username: inUser.username,
        uid: inUser.uid,
        caption: rawPost.caption,
        type: "song",
        date: Date.now(),
        content: true,
        likes: 0,
        shares: 0,
        saves: 0
    };

}

function publishAlbum(rawPost) {

    var timestamp = Date.now();

    var post = {
        username: inUser.username,
        uid: inUser.uid,
        caption: rawPost.caption,
        type: "album",
        date: Date.now(),
        content: true
    };

}
