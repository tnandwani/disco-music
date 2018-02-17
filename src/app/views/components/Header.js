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

                <div className="navbar-nav mr-auto">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item px-3">
                            <Link id="propName" to={"/user"} activeStyle={{ color: "#D7B659" }}>{props.name}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/upload"} activeStyle={{ color: "#D7B659" }}>Upload +</Link>
                        </li>
                    </ul>

                </div>


                <form className="form-inline my-2 my-lg-0 mr-auto">
                    <div className="input-group">
                    
                        <button type="button" className="btn btn-warning px-3" data-toggle="modal" data-target="#signInModal">Sign In</button>

                        <button type="button" className="btn btn-outline-warning mx-2" data-toggle="modal" data-target="#createModal">Create Account</button>

                    </div>
                </form>







                <form className="form-inline my-2 my-lg-0">
                    <span className="oi oi-magnifying-glass postIcons mr-2" title="magnifying-glass"></span>

                    <input type="text" className="form-control searchbar px-4" placeholder="Search Everything..." />

                </form>
                <button type="button" className="btn btn-outline-warning">Search</button>

            </div>

        </nav>


    );
};
