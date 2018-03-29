import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function routerHome() {
    browserHistory.push("/home");
}

function checkUpload() {

    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        browserHistory.push("/upload");

    } else {
        // No user is signed in.
        $('#signInModal').modal('toggle');
    }


}

function checkUser() {

    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.
        browserHistory.push("/user");

    } else {
        // No user is signed in.
        $('#signInModal').modal('toggle');
    }


}

function alphaButton() { 
    console.log("ALPHA BUTOTN");
    $('#suggestionModal').modal('toggle');

 }




var feedHeader = "New Releases";









export class Leftbar extends React.Component {
    render() {
        return (
            <div className="dark pl-3 pt-3 layoutMenu">

                <div className="dark">

                    <div className="row">
                        <div className="col-9">
                            <h1 className="gold" onClick={routerHome}> DISCO <span  onClick = {alphaButton} className="oi oi-beaker smallIcon ml-1" title="alpha"></span></h1>

                        </div>
                        <div className="col-3 text-right pt-3">

                            <a onClick={checkUser}> <span className="oi oi-person postIcons pr-2" title="Profile" ></span></a>
                        </div>
                    </div>



                    <div className="input-group">
                        <input type="search" className="form-control lessDark" placeholder="Search" />
                        {/* <span className="oi oi-magnifying-glass mt-2 ml-1 " title="magnifying-glass"></span> */}
                    </div>


                    <button className="btn-sm btn-outline-warning px-3 mt-3 w-100 py-2" onClick={checkUpload}> Upload + </button>

                </div>


                <nav className="nav flex-column ml-3">

                  <h6 className="mt-3"> Discover</h6>
                    <a className="nav-link ml-2 " href="">New Releases<span className="badge badge-pill badge-warning ml-2"><span className="oi oi-bolt smallIcon" title="alpha"></span></span></a>
                    <a className="nav-link ml-2" href="">Home<span className="badge badge-pill badge-warning ml-2">17</span></a>
                    {/* <a className="nav-link ml-2 " href="">Suggestions<span className="badge badge-pill badge-warning ml-2">5</span></a> */}

                    <h6 className="mt-3"> Profile</h6>
                    <a className="nav-link ml-2"  onClick = {getUserPosts}>Posts</a>
                    {/* <a className="nav-link ml-2" href="">Reposts</a>
                    <a className="nav-link ml-2 " href="">Likes</a>
 */}


                    {/* // <h6 className="mt-3"> Library</h6>
                    <a className="nav-link ml-2" href="#">Songs</a>
                     <a className="nav-link ml-2" href="#">Albums</a>
                     <a className="nav-link ml-2" href="#">Artists</a>
                     <a className="nav-link ml-2" href="#">Posts</a>


                     <h6 className="mt-3"> Playlists <span className="oi oi-plus smallIcon ml-2" title="plus"></span> </h6>
                    <a className="nav-link ml-2 " href="#Driving">Driving</a>
                 <a className="nav-link ml-2 " href="#Study">Study</a>
                    <a className="nav-link ml-2 " href="#Gym">Gym</a> */}



                    {/* SPACERS */}
                    <div className="my-5">

                        <br />

                    </div>
                    <div className="my-5">

                        <br />

                    </div>

                </nav>


            </div>
        );
    }
}
