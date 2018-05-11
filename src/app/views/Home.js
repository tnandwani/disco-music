import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';

import { Feed } from "./components/Feed";

import { UserBlock } from "./components/blocks/UserBlock";
import { NewReleases } from "./components/blocks/NewReleases";
import { HomeFeed } from "./components/blocks/HomeFeed";


const loader = <img  id= "feedSpinner" className = "spinner d-none text-center" src="images/loader.svg"/>;




function showCreateModal() {
    $('#createModal').modal('toggle');
}

export class Home extends React.Component {


    constructor(props) {
        super(props);

        if (inUser.username == "username") {

            
            this.state = {
                newStyle: {
                    display: 'block'
                }
            }
        }
        else {
            this.state = {
                newStyle: {
                    display: 'none'
                }
            }
        }
    }


    render() {
        return (
            <div className="mt-4">

                <div style={this.state.newStyle} className="dark jumbotron py-4 my-3 text-center">


                    <h1 className="gold"> <i>DISCOVER NEW MUSIC</i></h1>
                    <h5 className="gray py-4">Disco Music is a music streaming service that allows Artists to share their music for free, and get paid for their work.</h5>

                    {/* <button  className="btn btn-primary px-3 m-3 py-2" > Learn More </button> */}

                    <button onClick={showCreateModal} className="btn btn-warning px-3 m-3 py-2" > Create Account </button>

                </div>



                <div className="dark jumbotron py-4 my-3">




                    {/* <UserBlock /> */}
                    <NewReleases />
                    {/* <HomeFeed /> */}




                </div>

                <div className= "text-center">
                {loader}

                </div>






                <div className="card-columns">

                    {/* // Push Posts Here  */}


                    <Feed posts={1} />




                </div>

                <div className="my-5">

                    <br />

                </div>

            </div>





        );

    }
}
