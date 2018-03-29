import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';

import { Feed } from "./components/Feed";

import { UserBlock } from "./components/blocks/UserBlock";
import { NewReleases } from "./components/blocks/NewReleases";
import { HomeFeed } from "./components/blocks/HomeFeed";



var newStyle = {
    display: 'none'
}

function showCreateModal() {
    $('#createModal').modal('toggle');
}


export class Home extends React.Component {


    constructor(props) {
        super(props);

        if (inUser.username == "username") {

            newStyle = {
                display: "block"
            }
        }

    }

    render() {
        return (
            <div className="mt-4">

                <div style={newStyle} className="dark jumbotron py-4 my-3 text-center">


                    <h1 className="gold"> <i>DISCOVER NEW MUSIC</i></h1>
                    <h5 className="gray py-4">Disco Music is a music streaming service that allows Artists to share their music for free, and get paid for their work.</h5>

                    {/* <button  className="btn btn-primary px-3 m-3 py-2" > Learn More </button> */}

                    <button onClick={showCreateModal} className="btn btn-warning px-3 m-3 py-2" > Create Account </button>

                </div>



                <div className="dark jumbotron py-4 my-3">




                    {/* <UserBlock /> */}
                    <NewReleases/>
                    {/* <HomeFeed /> */}




                </div>

                <div className="text-center d-none" >
                    <img src="images/loader.svg" />
                </div>





                <div className="card-columns">

                    {/* // Push Posts Here  */}


                    <Feed posts={feedArray} />




                </div>

                <div className="my-5">

                    <br />

                </div>

            </div>





        );

    }
}
