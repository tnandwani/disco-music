import React from "react";
import * as firebase from "firebase";
import PropTypes from 'prop-types';

import { CardButtons } from "./frame/cardButtons";
import { CardHeader } from "./frame/cardHeader";






export class PlaylistPost extends React.Component {

    render() {
        return (

            <div className="card text-white bg-dark  mb-3">
                <CardHeader/>
                <div>
                    <img src= "images/coverArt.png" alt="Card image cap" className="card-img-top" />

                </div>
                <div className="card-body">
                    <h3>Playlist Name</h3>
                    <h4><i className= "gold">@Username</i></h4>
                    <h5><i>#Vibes</i></h5>

                </div>
                <ul className="list-group list-group-flush leftAlign dark">
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                    <li className="list-group-item">Song Name -<small className= "gray"> <i>Artist Name</i> </small></li>
                   

                </ul>
                <CardButtons/>




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
PlaylistPost.defaultProps = {
    username: 'Username',
    song: 'Song Name',
    artist: 'Artist Name',
    collection: 'Collection Name ',
    likes: 0,
    shares: 0,
    saves: 0,
    cover: "https://firebasestorage.googleapis.com/v0/b/disco-6a3bf.appspot.com/o/covers%2FcoverArt.png?alt=media&token=ac5f78d7-580b-4f61-9d1d-f86aa4e64fee"
};
