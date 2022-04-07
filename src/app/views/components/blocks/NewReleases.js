import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";



export class NewReleases extends React.Component {

    render() {
        return (

            <div className="">
                <h1 id= "feedTitle" className="gold">New Releases</h1>
                <h3 id= "feedSource" className="gray">Everyone</h3>

            </div>

        );
    }
}
