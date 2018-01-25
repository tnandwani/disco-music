import React from "react";
import { Link } from "react-router";
import PropTypes from 'prop-types';


export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <li className="navbar-brand"><Link to={"/home"} activeStyle={{ color: "#D7B659" }}>DISCO
            <span className="badge badge-secondary ml-2"><span className="oi oi-beaker pr-1" title="beaker"></span>Alpha</span>
            </Link></li>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item px-3">
                        <Link className="" to={"/user"} activeStyle={{ color: "#D7B659" }}>{props.name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/upload"} activeStyle={{ color: "#D7B659" }}>Upload +</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group">
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <input type="text" className="form-control searchbar px-3" placeholder="Search Everything..." />
                        <div className="input-group-append">
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Everything</a>
                                <a className="dropdown-item" href="#">Songs</a>
                                <a className="dropdown-item" href="#">Playlists </a>
                                <a className="dropdown-item" href="#">Albums</a>
                                <a className="dropdown-item" href="#">Artists</a>
                                <a className="dropdown-item" href="#">@Username</a>
                                <a className="dropdown-item" href="#">#Vibes</a>

                            </div>
                            <button type="button" className="btn btn-outline-success">Search</button>

                        </div>
                    </div>
                </form>
            </div>
        </nav>


    );
};
