import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";



export class HomeFeed extends React.Component {

    render() {
        return (

            <div className="">
                <h1 className="gold">Home</h1>
                <h3 className="gray">@{inUser.username}</h3>

            </div>

        );
    }
}
