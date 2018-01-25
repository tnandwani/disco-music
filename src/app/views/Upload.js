import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


export class Upload extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The Upload Page</h3>
            </div>
        );
    }
}
