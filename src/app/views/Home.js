import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';




// import { UserBlock } from "./components/blocks/UserBlock";
// import { AlbumBlock } from "./components/blocks/AlbumBlock";


import { Feed } from "./components/Feed";



var newStyle = {
    display: 'none'
}

function showCreateModal() {
    $('#createModal').modal('toggle');
}




function getPost(postID, type) {

    var postRef = postsCollection.doc(postID);

    postRef.get().then(function (doc) {
        if (doc.exists) {
            var postData = doc.data();

            cardFeed.push(postData);
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

        // var postProto = <Post/>;

        // cardFeed.push(postProto);

        if (inUser.username == "username") {

            newStyle = {
                display: "block"
            }
        }

        return (
            <div className="mt-4">

                <div style={newStyle} className="dark jumbotron py-4 my-3 text-center">


                    <h1 className="gold"> <i>DISCOVER NEW MUSIC</i></h1>
                    <h5 className="gray py-4">Disco Music is a music streaming service that allows Artists to share their music for free, and get paid for their work.</h5>

                    {/* <button  className="btn btn-primary px-3 m-3 py-2" > Learn More </button> */}

                    <button onClick={showCreateModal} className="btn btn-warning px-3 m-3 py-2" > Create Account </button>

                </div>



                <div className="dark jumbotron py-4 my-3">

                    <h1 className="gold">New Releases</h1>
                    <h3 className="gray">Everyone</h3>


                    {/* <UserBlock /> */}
                    {/*                     
                    <AlbumBlock/> */}

                </div>

                <div className="text-center d-none" >
                    <img src="images/loader.svg" />
                </div>





                <div className="card-columns">

                    {/* // Push Posts Here  */}


                    <Feed posts = {feedArray} />




                </div>

                <div className="my-5">

                    <br />

                </div>

            </div>





        );

    }
}


// START THE FEED HERE 
// START THE FEED HERE 
// START THE FEED HERE 
// START THE FEED HERE 

getNewPosts();
