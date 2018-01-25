import React from "react";
import PropTypes from 'prop-types';



export class CardHeader extends React.Component {

    render() {
        return (


            <div className="card-header p-2">
                <a  className = "white" href = ""><h6>@Username</h6></a> 
                <h6 className="gray pt-2">Caption Over Here</h6>

            </div>

        );
    }
}
