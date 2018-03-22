import React from "react";
import * as firebase from "firebase";
import PropTypes from 'prop-types';

import { CardButtons } from "./frame/cardButtons";
import { CardHeader } from "./frame/cardHeader";



export class Post extends React.Component {

    render() {


        //if text

        

        // if song

        return (

            <div className="card p-0 text-white bg-dark mb-3 container">

                {/* HEADER */}
                <div  id="postHeader" className="card-header p-2 text-center">

                    <div className="row">
                        <div className="col text-left">
                            {/* <span className="oi oi-fire pl-2" title="fire"></span> */}

                        </div>
                        <div className="col">
                            <a className="text-white" href=""><h6>@Username</h6></a>

                        </div>
                        <div className="col text-right">
                            <div className="dropdown show">
                                <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="oi oi-ellipses pr-2" title="ellipses"></span>
                                </a>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Send</a>
                                    <a className="dropdown-item" href="#">Play Next</a>
                                    <a className="dropdown-item" href="#">Add to Queue</a>
                                    <a className="dropdown-item" href="#">Report</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <h6 className="gray pt-2 text-center "> <i>Caption Over Here (100 Characters Max)</i> </h6>

                </div>


                {/* COVER */}

                <div id="postCover"  className= "">
                    <img src="images/coverArt.png" alt="Card image cap" className="card-img-top" />

                </div>


                {/* INFO */}

                <div  id="postInfo"  className="card-body">
                    <h3>Album Name</h3>
                    <h4><i className="gold">Artist</i></h4>
                    <h5><i>#Vibes</i></h5>

                </div>


                {/* LIST */}
                <div id="postList"  className="">
                    <ul className="list-group list-group-flush darkFade">
                        <li className="list-group-item">Song Name</li>
                        <li className="list-group-item">Song Name</li>
                        <li className="list-group-item">Song Name</li>
                    </ul>
                </div>




                {/* BUTTONS */}

                <div id="postButtons"  className="card-footer p-0 text-center container">


                    <button type="button" className="btn btn-secondary ">
                        <span className="oi oi-fire postIcons pr-2" title="fire"></span>
                        Share
                      </button>
                    <button type="button" className="btn btn-secondary  px-4">
                        <span className="oi oi-heart postIcons pr-2" title="heart"></span>
                        Like
                     </button>
                    <button type="button" className="btn btn-secondary ">
                        <span className="oi oi-plus postIcons pr-2" title="plus"></span>
                        Save
                       </button>

                </div>



            </div>


        );
    }
}

// <div>
//     <h1>{this.props.song}</h1>
//     <h3><i>{this.props.artist}</i></h3>
//     <h4>{this.props.collection}</h4>
//     <img src={this.props.cover} className="feedCover" />
//     <h5>Likes <small> {this.props.likes}</small> </h5>
//     <h5>Saves <small> {this.props.saves}</small> </h5>
//     <h5>Shares <small> {this.props.shares}</small> </h5>
// </div>


// Specifies the default values for props:


Post.defaultProps = {
    id: "123",
    name: "Song Name"
};
