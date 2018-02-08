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

                <div className="navbar-nav mr-auto" id="oldUserLogin"  style ={oldStyle}>
                    <ul className="navbar-nav mt-2 mt-lg-0" id="oldUserLogin">
                        <li className="nav-item px-3">
                            <Link id="propName" to={"/user"} activeStyle={{ color: "#D7B659" }}>{props.name}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/upload"} activeStyle={{ color: "#D7B659" }}>Upload +</Link>
                        </li>
                    </ul>

                </div>


                <form className="form-inline my-2 my-lg-0 mr-auto" id="newUserLogin" style ={newStyle}>
                    <div className="input-group">
                        <input id="inputEmail" type="text" className="form-control" placeholder="Email" />
                        <input id="inputPassword" type="password" className="form-control" placeholder="Password" />
                        <div className="input-group-append" >

                            <button type="button" className="btn btn-warning px-5" onClick={loginUser}>Login</button>
                        </div>
                        <button type="button" className="btn btn-outline-success mx-2" data-toggle="modal" data-target="#createModal">Create Account</button>

                    </div>
                </form>







                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group">
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <input type="text" className="form-control searchbar px-3" placeholder="Search Everything..." />
                        <div className="input-group-append">
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">All</a>
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
