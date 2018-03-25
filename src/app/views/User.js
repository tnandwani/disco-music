import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

import { UserBlock } from "./components/blocks/UserBlock";


export class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div className="">

                <div className="dark">
                    <UserBlock />


                </div>


             

                <div className="tab-content">
                    <div className="tab-pane active" id="all" role="tabpanel" aria-labelledby="home-tab">
                        <div className="card-columns">



                        </div>
                    </div>
                    <div className="tab-pane" id="posts" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="card-columns">


                        </div>
                    </div>
                    <div className="tab-pane" id="shares" role="tabpanel" aria-labelledby="messages-tab">
                        <div className="card-columns">


                        </div>
                    </div>
                    <div className="tab-pane" id="likes" role="tabpanel" aria-labelledby="settings-tab">
                        <div className="card-columns">

                   
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
