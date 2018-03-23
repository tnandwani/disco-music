import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';


import { Post } from "./components/posts/Post";


import { SongPost } from "./components/posts/songPost";
import { AlbumPost } from "./components/posts/albumPost";
import { PlaylistPost } from "./components/posts/playlistPost";
import { TextPost } from "./components/posts/textPost";
import { UserBlock } from "./components/blocks/UserBlock";
import { AlbumBlock } from "./components/blocks/AlbumBlock";




var newStyle = {
    display: 'none'
}

function showCreateModal() {
    $('#createModal').modal('toggle');
}

function getNewPosts() {

    // GET All New Posts
    var postsRef = firebase.database().ref('posts').limitToLast(10);
    postsRef.on('child_added', function (data) {
        makePost(data.key, data.val());

    });


}


function makePost(postID, type) {

    var postRef = postsCollection.doc(postID);

    postRef.get().then(function (doc) {
        if (doc.exists) {
            var postData = doc.data();

            console.log(postData);

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}



export class Home extends React.Component {

    render() {

        if (inUser.username == "username") {

            newStyle = {
                display: "block"
            }
        }

        console.log(inUser);

        return (
            <div className="mt-4">

                <div style={newStyle} className="dark jumbotron py-4 my-3 text-center">


                    <h1 className="gold"> <i>DISCOVER NEW MUSIC</i></h1>
                    <h5 className="gray py-4">Disco Music is a music streaming service that allows Artists to share their music for free, and get paid for their work.</h5>

                    {/* <button  className="btn btn-primary px-3 m-3 py-2" > Learn More </button> */}

                    <button onClick={showCreateModal} className="btn btn-warning px-3 m-3 py-2" > Create Account </button>

                </div>



                <div className="dark jumbotron py-4 my-3">

                    <h1 className="gold display-3">New Releases</h1>
                    <h3 className="gray">Disco</h3>


                    {/* <UserBlock /> */}
                    {/*                     
                    <AlbumBlock/> */}

                </div>

                <div className="text-center d-none" >
                    <img src="images/loader.svg" />
                </div>





                <div id="feedDeck" className="card-columns">

                    {/* // Push Posts Here  */}



                </div>

                <div className="my-5">

                    <br />

                </div>

            </div>





        );

    }
}


setTimeout(function () {
    getNewPosts();
}, 1000);
