import React from "react";
import PropTypes from 'prop-types';


export class Leftbar extends React.Component {
    render() {
        return (
            <div className="leftbar">
                <nav className="nav flex-column">

                    <a className="nav-link navOne" href="#">Browse</a>
                    <nav className="nav flex-column">
                        <a className="nav-link navTwo" href="#">Newest Releases</a>
                        <a className="nav-link navTwo" href="#">Top Releases</a>
                    </nav>

                    <a className="nav-link navOne " href="#">Feeds</a>
                    <nav className="nav flex-column">
                        <a className="nav-link navTwo " href="#">Home<span className="badge badge-secondary mx-1">23</span></a>
                        <a className="nav-link navTwo" href="#">Best Friends<span className="badge badge-secondary mx-1">3</span></a>
                    </nav>

                    <a className="nav-link navOne" href="#">Playlists</a>
                    <nav className="nav flex-column">
                        <a className="nav-link navTwo" href="#">Chill Beats</a>
                        <a className="nav-link navTwo" href="#">Driving</a>
                    </nav>

                    <a className="nav-link navOne" href="#">Library</a>
                    <nav className="nav flex-column">
                        <a className="nav-link navTwo" href="#">Songs</a>
                        <a className="nav-link navTwo" href="#">Albums</a>
                        <a className="nav-link navTwo" href="#">Artists</a>
                        <a className="nav-link navTwo" href="#">Suggestions<span className="badge badge-secondary mx-1">7</span></a>

                    </nav>

               

                </nav>
            </div>
        );
    }
}
