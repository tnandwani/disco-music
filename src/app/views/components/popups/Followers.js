import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";



export class Followers extends React.Component {

    constructor(props) {
        super(props);

        var exFollowing = (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
            <span className="badge badge-primary badge-pill">Block</span>
            </li>
        );


        var exFollowers = (

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
        <span className="badge badge-primary badge-pill">Unfollow</span>
            </li>

        );


        this.state = {
            followers: exFollowers,
            following: exFollowing
        }

    }

    componentDidMount() {

        let inFollowers;
        inFollowers = inUser.followers.map((followers) =>
            <li key={followers.toString()} className="list-group-item d-flex justify-content-between align-items-center">
                @{followers}
                <span className="badge badge-warning badge-pill">Block</span>
            </li>
        );

        let inFollowing;
        inFollowing = inUser.following.map((following) =>
            <li key={following.toString()} className="list-group-item d-flex justify-content-between align-items-center">
                @{following}
                <span className="badge badge-warning badge-pill">Unfollow</span>
            </li>


        );



        this.setState({
            followers: inFollowers,
            following: inFollowing
        });


    }

    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="followersModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="container">

                                <ul className="nav nav-pills nav-fill mx-3" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#followers" role="tab" aria-selected="true">Followers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#following" role="tab" aria-selected="false">Following</a>
                                    </li>
                                </ul>

                                <div className="container">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="followers" role="tabpanel">
                                            <br />

                                            <ul className="list-group">
                                                {this.state.followers}

                                            </ul>



                                        </div>
                                        <div className="tab-pane fade" id="following" role="tabpanel" >
                                            <br />

                                            <ul className="list-group">
                                                {this.state.following}

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <br />

                            </div>


                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
