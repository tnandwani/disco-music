import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function routerHome() {
    browserHistory.push("/home");
}

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


var uploadPercent = {
    width: "100%"
};



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
    if (rawCaption.length == 0 && rawSongName.length == 0){
        document.getElementById("uploadError").innerHTML = "No Caption or Song Entered"
    }


}


function publishText(rawPost) {

    var timestamp = Date.now();
    document.getElementById("progressBar").style.width = "0%";

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
            document.getElementById("progressBar").style.width = "100%";
            setTimeout(function(){ routerHome(); }, 1000);
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


var rawCover;


function finishedUploading() {
    console.log("MADE IT");
    browserHistory.push("/home");
}

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
function chooseSong() {
    document.getElementById("inputSong").click();
}

function handleProfile() {

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
                                <input id="inputCover" className="d-none" type="file" accept="image/*" onChange={handleProfile} />

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


                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text pl-3" id="basic-addon1">#</span>
                                </div>
                                <input id="rawVibes" type="text" className="form-control dark" placeholder="Vibes (5 Max)" />

                            </div>


                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>
                            <button className="btn px-3 mr-2"></button>

                            <br />
                            <button className="btn btn-outline-success my-3"> + Song File <span className="oi oi-check pl-2 d-none" title="check"></span></button>

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

                        <div className="col-10">
                            <div className="progress mt-2 h-75">
                                <div id = "progressBar" className="progress-bar progress-bar-striped bg-warning text-dark" role="progressbar" ></div>
                            </div>
                        </div>
                        <div className="col text-right">

                            <h6 id="uploadError" className="text-danger"></h6>
                            <button id="publishButton" onClick={verifyPublish} className="btn btn-warning px-4 py-2"> Publish <span className="oi oi-cloud-upload" title="cloud-upload"></span></button>


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
