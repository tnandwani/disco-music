import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function routerHome() {
    browserHistory.push("/home");
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//  VARIABLES
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


// LOCAL
var uploadPercent = {
    width: "100%"
};

var rawCover, rawSong = false;


var vibes = [
    "Acoustic",
    "Alternative",
    "Ambient",
    "Anime",
    "Bass",
    "Beach",
    "Beats",
    "Blues",
    "BreakUp",
    "Calm",
    "Chill",
    "Christmas",
    "Classical",
    "Clean",
    "Country",
    "Covers",
    "Dance",
    "Dark",
    "Disco",
    "Driving",
    "Drugs",
    "Dubstep",
    "EDM",
    "Electronic",
    "Experimental",
    "Folk",
    "Fun",
    "Funk",
    "Gospel",
    "Grime",
    "Grunge",
    "Halloween",
    "Happy",
    "Heavy",
    "HipHop",
    "House",
    "Indie",
    "Instrumental",
    "Island",
    "Jazz",
    "KPop",
    "Light",
    "Love",
    "Meditation",
    "Melody",
    "Metal",
    "Morning",
    "Night",
    "OldSchool",
    "Oldies",
    "Opera",
    "Orchestra",
    "Party",
    "Piano",
    "Pop",
    "Punk",
    "R&B",
    "Rain",
    "Rap",
    "Reggae",
    "Relax",
    "Religious",
    "Remix",
    "RoadTrip",
    "Rock",
    "Running",
    "Sad",
    "Sex",
    "Sleep",
    "Slow",
    "Smoking",
    "Soft",
    "Soul",
    "Space",
    "Spring",
    "Study",
    "Summer",
    "Swing",
    "Techno",
    "Trance",
    "Trap",
    "Underground",
    "Upbeat",
    "Vacation",
    "Vocals",
    "Weed",
    "Workout"
]



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function verifyPublish() {

    var rawCaption = document.getElementById("rawCaption").value;
    var rawSongName = document.getElementById("rawSongName").value;
    var rawFeaturing = document.getElementById("rawFeaturing").value;
    var rawVibes = document.getElementById("rawVibes").value;
    var rawAlbumName = document.getElementById("rawAlbumName").value;


    // is text post
    // requires: only caption no song name
    if (rawCaption.length > 0 && rawSongName.length == 0) {

        var rawTextPost = {
            caption: rawCaption
        }
        publishTextPost(rawTextPost);
    }

    // song post

    // requires: song name && song file && 1 vibe
    if (rawSongName.length > 0) {
        if (rawSong != false) {

            var rawSongPost = {
                name: rawSongName,
                caption: rawCaption,
                featuring: rawFeaturing,
                vibes: rawVibes
            }
            publishSongPost(rawSongPost);


        }
        else {
            document.getElementById("uploadError").innerHTML = "Missing Song File";
        }

    }

    // album post
    // requires: song name && song file && 1 vibe && album Name 

    // INVALIDS     
    // No caption or Song 
    if (rawCaption.length == 0 && rawSongName.length == 0) {
        document.getElementById("uploadError").innerHTML = "No Caption or Song Entered"
    }


}


function publishTextPost(rawPost) {

    var timestamp = Date.now();
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressBar").innerHTML = "0%";

    // User database ref
    var userPostsRef = database.ref('users/' + inUser.username + '/posts');

    var post = {
        username: inUser.username,
        caption: rawPost.caption,
        type: "text",
        date: timestamp,
        content: false,
        likes: 0,
        shares: 0,
        saves: 0
    };




    // create post ID
    var newPostRef = userPostsRef.push();

    // Post ID to User Database

    newPostRef.set(post.type);

    // Post ID to User Database
    var allPostsRef = database.ref('posts/' + newPostRef.key);
    allPostsRef.set(post.type);

    // Post to Main with key
    postsCollection.doc(newPostRef.key).set(post)
        .then(function () {
            console.log("Document successfully written!");
            document.getElementById("progressBar").style.width = "100%";
            document.getElementById("progressBar").innerHTML = "100%";

            setTimeout(function () { routerHome(); }, 1000);
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}




function publishSongPost(rawPost) {

    var timestamp = Date.now();
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressBar").innerHTML = "0%";

    // User database ref
    var userPostsRef = database.ref('users/' + inUser.username + '/posts');

    // songID to Library

    var song = {
        name: rawPost.name,
        artist: inUser.publicName,
        featuring: rawPost.featuring,
        vibes: rawPost.vibes,
        date: timestamp,
        likes: 0,
        shares: 0,
        saves: 0
    }

    songCollection.add(song)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);


            var songKey = docRef.id;
            // add songID to post 

            var post = {
                username: inUser.username,
                caption: rawPost.caption,
                type: "song",
                date: Date.now(),
                content: songKey,
                likes: 0,
                shares: 0,
                saves: 0
            };
            // create post ID
            var newPostRef = userPostsRef.push();

            // Post ID to User Database

            newPostRef.set(post.type);

            // Post ID to User Database
            var allPostsRef = database.ref('posts/' + newPostRef.key);
            allPostsRef.set(post.type);

            // Post to Main with key
            postsCollection.doc(newPostRef.key).set(post)
                .then(function () {
                    console.log("Document successfully written!");
                    document.getElementById("progressBar").style.width = "25%";
                    document.getElementById("progressBar").innerHTML = "25%";


                    // UPLOAD SONG FILE
                    if (rawSong != false) {
                        console.log('GOT A SONG');

                        var newSongRef = storageRef.child('songs/' + songKey);

                        newSongRef.put(rawSong).then(function (snapshot) {
                            console.log('Uploaded Song');

                            // UPLOAD COVER FILE
                            if (rawCover != false) {
                                console.log('GOT A COVER');

                                document.getElementById("progressBar").style.width = "50%";
                                document.getElementById("progressBar").innerHTML = "50%";

                                var newCoverRef = storageRef.child('covers/' + songKey);

                                newCoverRef.put(rawCover).then(function (snapshot) {
                                    console.log('Uploaded Song');
                                    document.getElementById("progressBar").style.width = "100%";
                                    document.getElementById("progressBar").innerHTML = "100%";

                                    setTimeout(function () { routerHome(); }, 1000);


                                });
                            }
                            else {
                                document.getElementById("progressBar").style.width = "100%";
                                document.getElementById("progressBar").innerHTML = "100%";

                                setTimeout(function () { routerHome(); }, 1000);

                            }


                        });
                    } else {
                        console.log(":((((");
                    }


                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });




        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });



}

function publishAlbumPost(rawPost) {

    var timestamp = Date.now();
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressBar").innerHTML = "0%";

    // User database ref
    var userPostsRef = database.ref('users/' + inUser.username + '/posts');

    var post = {
        username: inUser.username,
        caption: rawPost.caption,
        type: "album",
        date: Date.now(),
        content: true,
        likes: 0,
        shares: 0,
        saves: 0
    };

}


function uploadSong(song) {
    // 
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// CONTROLLERS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function showMusic() {



    if (document.getElementById("musicDiv").classList.contains('d-none')) {
        // NOT VISIBLE
        document.getElementById("musicDiv").classList.remove('d-none');
    }
    else {
        // VISIBLE
        document.getElementById("musicDiv").classList.add('d-none');

    }


}

function showAlbum() {
    if (document.getElementById("albumDiv").classList.contains('d-none')) {
        // NOT VISIBLE
        document.getElementById("albumDiv").classList.remove('d-none');
    }
    else {
        // VISIBLE
        document.getElementById("albumDiv").classList.add('d-none');

    }

}
function chooseCover() {
    document.getElementById("inputCover").click();
}

function handleCover() {

    var preview = document.getElementById("previewCover");
    var file = document.getElementById("inputCover").files[0];
    var reader = new FileReader();

    // set file

    rawCover = file;

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function chooseSong() {
    document.getElementById("inputSong").click();
}

function handleSong() {

    var file = document.getElementById("inputSong").files[0];
    rawSong = file;
    document.getElementById("fileCheck").classList.remove('d-none');






    // var reader = new FileReader();
    // reader.addEventListener("load", function () {
    //     preview.src = reader.result;
    // }, false);

    // if (file) {
    //     reader.readAsDataURL(file);
    // }

    // set file



}



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// RENDER
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


export class Upload extends React.Component {
    render() {
        return (
            <div className="mt-4">

                <h6 className="gold text-center"><i >BETA: Only Text Uploads Working</i></h6>


                <h3>Caption</h3>
                <div>
                    <input id="rawCaption" type="text" className="form-control dark my-3 py-3" maxLength="100" placeholder="100 Charater Limit" />

                    <div className="text-right">
                        <button className="btn btn-light" onClick={showMusic}> + Add Song(s)</button>
                    </div>
                </div>


                <div id="musicDiv" className="d-none">
                    <h3 >Music </h3>

                    <div className="row">
                        <div className="col-4">

                            <div className="w-100">
                                <img id="previewCover" onClick={chooseCover} src="images/coverArt.png" className="dark uploadCover" />
                                <input id="inputCover" className="d-none" type="file" accept="image/*" onChange={handleCover} />

                            </div>

                        </div>

                        <div className="col-8 pt-1">
                            <input id="rawSongName" type="text" className="form-control dark py-3" maxLength="50" placeholder="Song Name" />


                            <div className="input-group mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input id="rawFeaturing" type="text" className="form-control dark " placeholder="Featuring" />


                            </div>
                            <h5 id="featuresList" className="my-3">  </h5>


                            <div className=" input-group mb-3 ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text pl-3" id="basic-addon1">#</span>
                                </div>
                                <input id="rawVibes" type="text" list={vibes} className="form-control dark" placeholder="Vibes (5 Max)" />

                            </div>


                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>

                            <br />
                            <button onClick={chooseSong} className="btn btn-outline-success my-3"> + Song File <span id="fileCheck" className="oi oi-check pl-2 text-warning d-none" title="check"></span></button>
                            <input id="inputSong" className="d-none" type="file" accept="audio/*" onChange={handleSong} />

                            <br />


                            <div className="text-right">
                                <button className="btn btn-light" onClick={showAlbum}> + Add Song to Album</button>

                            </div>

                        </div>

                        <div id="albumDiv" className="container pt-3 mt-3 d-none" >

                            <div>
                                <input id="rawAlbumName" type="text" className="form-control dark py-4" placeholder="Album Name" />

                            </div>

                            <div>

                                <table className="table dark">

                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </div>

                <h3 className="mt-4" >Publish </h3>
                <div>
                    <div className="row mb-5">

                        <div className="col-9">
                            <div className="progress mt-2 h-75">
                                <div id="progressBar" className="progress-bar progress-bar-striped bg-warning text-dark" role="progressbar" ></div>
                            </div>
                        </div>
                        <div className="col text-right">

                            <h6 id="uploadError" className="text-danger"></h6>
                            <button id="publishButton" onClick={verifyPublish} className="btn btn-warning px-4 py-2"> Publish <span className="oi oi-cloud-upload ml-2" title="cloud-upload"></span></button>


                        </div>

                    </div>

                    <div className="my-5">

                        <br />

                    </div>


                </div>





            </div>

        );
    }
}
