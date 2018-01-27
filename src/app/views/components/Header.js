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


                <form className="form-inline my-2 my-lg-0 mr-auto">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email" />
                        <input type="text" className="form-control" placeholder="Password" />
                        <div className="input-group-append" >

                            <button type="button" className="btn btn-warning px-5">Login</button>
                        </div>
                        <button type="button" className="btn btn-primary mx-2">Create Account</button>

                    </div>
                </form>

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="userOptions">
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



            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            You should make an account
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



        </nav>


    );
};
