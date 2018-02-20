import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function routerHome() {
    browserHistory.push("/home");
}
function routerUser() {
    browserHistory.push("/user");
}



export class Leftbar extends React.Component {
    render() {
        return (
            <div className="dark pl-3">

                <div className="pt-3 pr-2 dark">

                    <a href="/home"> <h1 className="gold"> DISCO <span className="oi oi-beaker postIcons" title="beaker">  </span> </h1></a>
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" />
                        <span className="oi oi-magnifying-glass mt-2 ml-1 " title="magnifying-glass"></span> 
                    </div>

                    <a href="">  <h5 className="mt-2 py-2" onClick = {routerUser}>  My Profile   </h5></a>

                </div>
            
                <nav className="nav flex-column ml-3">

                    <h6 className="mt-3"> Feeds <span className="oi oi-plus smallIcon ml-2" title="plus"></span></h6>
                    <a className="nav-link ml-2 " href="home">Home</a>
                    <a className="nav-link ml-2 " href="home">New Releases</a>
                    <a className="nav-link ml-2 " href="#">Popular</a>
                    <a className="nav-link ml-2 " href="#">Best Friends</a>

                    <h6 className="mt-3"> Playlists <span className="oi oi-plus smallIcon ml-2" title="plus"></span> </h6>
                    <a className="nav-link ml-2 " href="#">Driving</a>
                    <a className="nav-link ml-2 " href="#">Study</a>
                    <a className="nav-link ml-2 " href="#">Beats</a>
                    <a className="nav-link ml-2 " href="#">Gym</a>

                    <h6 className="mt-3"> Library</h6>
                    <a className="nav-link ml-2 " href="#">Songs</a>
                    <a className="nav-link ml-2 " href="#">Albums</a>
                    <a className="nav-link ml-2 " href="#">Artists</a>




                </nav>


            </div>
        );
    }
}
