////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var firestore = firebase.firestore();
var publishBatch = firestore.batch();

var newSongRef = firestore.collection("songs").doc();
var newAlbumRef = firestore.collection("albums").doc();


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////// HTML JS //////////////////////////


function startCoverUpload() {
    document.getElementById('coverFile').click();
}

function handleCoverSelect(input) {

    if (input.files && input.files[0]) {
        console.log("file exists");
        readyCoverFile = input.files[0];

        // change cover in HTML
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#coverArt')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(readyCoverFile);
    }

}

function createSong(uploadTimestamp) {

    var inputSongName = document.getElementById('inputSongName').value;
    var inputExplicit = document.getElementById('inputExplicit').checked;


    // CHECK REQUIREMENTS 

    // CREATE SONG OBJECT 

    var songData = {
        name: inputSongName,
        creator: savedCreator,
        timestamp: uploadTimestamp,
        explicit: inputExplicit,
        vibes: myVibesArray,
        features: myFeaturesArray
    };

    console.log("PUBLISHING SONG: ");
    console.log(songData);
    return songData;

}

////////////////////////// PUBLISH POST //////////////////////////

function publishSongPost() {

    var uploadTimestamp = Math.floor(Date.now() / 1000);

    // write song data -> get song ID 

    // user/posts/

    // upload song

    // upload cover


    // commit BATCH


}

function publishAlbumPost() {

    var uploadTimestamp = Math.floor(Date.now() / 1000);



    // albums/ 

    // user/posts

    // LOOP songs/

    // LOOP upload song

    // upload cover

    // commit BATCH


}

////////////////////////// WRITE LIBRARY DATA //////////////////////////

function pushSongData(songData) {

    // Add a new song with a generated id.

    firestore.collection("songs").add(songData)
        .then(function (docRef) {
            console.log("songID: ", docRef.id);
             // this is the songID 
             var songId = docRef;
             pushSongFile(songId);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}

function pushAlbumData() {

}


////////////////////////// WRITE USER DATA //////////////////////////


function pushUserPost() {

}

////////////////////////// UPLOAD FILES //////////////////////////

function pushSongFile(songId) {

    var songStorageRef = storageRef.child('songs/' + songId);
    // var uploadSongTask = songStorageRef.put(readySongFile);
    
    

}

function pushCoverFile() {

}
