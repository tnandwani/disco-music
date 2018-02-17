import React from "react";
import * as firebase from "firebase";
import PropTypes from 'prop-types';

import { CardButtons } from "./frame/cardButtons";
import { CardHeader } from "./frame/cardHeader";



export class TextPost extends React.Component {

    render() {
        return (

            <div className="card text-white bg-dark">

                <CardHeader />

                <CardButtons />
                
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
TextPost.defaultProps = {
    username: 'Username',
    song: 'Song Name',
    artist: 'Artist Name',
    collection: 'Collection Name ',
    likes: 0,
    shares: 0,
    saves: 0,
    cover: "images/coverArt.png"
};
