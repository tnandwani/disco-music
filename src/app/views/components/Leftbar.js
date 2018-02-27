import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function routerHome() {
    browserHistory.push("/home");
}

function routerUpload() {
    browserHistory.push("/upload");
}

function routerUser() {
    browserHistory.push("/user");
}

function checkUpload() {
    if (loggedIn()) {
        window.location.href = '/upload';
    } else {
        $('#signInModal').modal('toggle');
    }
}

function checkUser() {
    if (loggedIn()) {
        window.location.href = '/user';
    } else {
        $('#signInModal').modal('toggle');
    }
}






export class Leftbar extends React.Component {
    render() {
        return (
            <div className="dark pl-3 layoutMenu">

                <div className="pt-3 dark">


                    <div className="row">
                        <div className="col">
                            <h1 className="gold" onClick={routerHome}> DISCO</h1>


                        </div>
                        <div className="col text-right pt-3">

                            <a onClick={checkUser}> <span className="oi oi-person bigIcon pr-2" title="plus" ></span></a>
                        </div>
                    </div>



                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" />
                        {/* <span className="oi oi-magnifying-glass mt-2 ml-1 " title="magnifying-glass"></span> */}
                    </div>

                    <button className="btn-sm btn-outline-warning px-3 mt-2 w-100 py-2" onClick={checkUpload}> Upload + </button>





                </div>


                <nav className="nav flex-column ml-3">


                    <h6 className="mt-3"> Discover</h6>
                    <a className="nav-link ml-2" href="home#Home">Home</a>
                    <a className="nav-link ml-2 " href="home#NewReleases">New Releases</a>
                    <a className="nav-link ml-2 " href="home#Popular">Popular</a>


                    <h6 className="mt-3"> Library</h6>
                    <a className="nav-link ml-2" href="home#">Songs</a>
                    <a className="nav-link ml-2" href="home#">Albums</a>
                    <a className="nav-link ml-2" href="home#">Artists</a>

                    <h6 className="mt-3"> Playlists <span className="oi oi-plus smallIcon ml-2" title="plus"></span> </h6>
                    <a className="nav-link ml-2 " href="home#Driving">Driving</a>
                    <a className="nav-link ml-2 " href="home#Study">Study</a>
                    <a className="nav-link ml-2 " href="home#Gym">Gym</a>

                </nav>


            </div>
        );
    }
}
