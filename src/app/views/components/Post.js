import React from "react";
import * as firebase from "firebase";
import PropTypes from 'prop-types';


var contentStyle = {
    display: "none"
};

var listStyle = {
    display: "none"
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var post = {
    username: "Username",
    artist: "Artist",
    caption: "Caption Over Here (100 Characters Max)",
    cover: "images/coverArt.png",
    type: "text",
    date: "Date Posted",
    content: ["Song Name"],
    title: "Album Name",
    likes: 0,
    shares: 0,
    saves: 0,
    vibes: "#Vibes"
};


export class Post extends React.Component {



    // load needed data here in constructor before passing
    constructor(props) {
        super(props);

        var postId = this.props.id;

       


        // text post 
        this.state = {
            contentStyle: contentStyle,
            id: postId
        };

        // song post 

        if (this.props.content.type == "song") {

            this.state = {
                contentStyle: {
                    display: "block"
                }
            };

        }

        this.pushSong = this.pushSong.bind(this);


    }

    pushSong() {

        var songId = this.props.content.content;
        console.log(songId);


        // is song 
        if (songId.length == 1) {
            songId = songId[0];

        }

        // is album
        if (songId.length > 1) {

        }


        var audioPlayer = document.getElementById("audioPlayer");

        if (document.getElementById("playButton").classList.contains("oi-media-play")) {
            // is playing 
            document.getElementById("playButton").classList.remove('oi-media-play');
            document.getElementById("playButton").classList.add('oi-media-pause');

            audioPlayer.play();


        }

        if (inUser.username != "username") {

            var songRef = songsCollection.doc(songId);
            songRef.get().then(function (doc) {
                if (doc.exists) {
                    var songData = doc.data();
                    // console.log(songData);

                    pushPlaying(songData);


                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        }


    }



    render() {

        return (

            <div className="card p-0 text-white bg-dark mb-3 container">

                {/* HEADER */}
                <div id="postHeader" className="card-header text-center pb-1">

                    <div className="row">
                        <div className="col text-left">
                            <span className="oi oi-bolt" title="follow"></span>

                        </div>
                        <div className="col">
                            <a className="text-white" href=""><h6>@{this.props.content.username}</h6></a>

                        </div>
                        <div className="col text-right">
                            <div className="dropdown show">
                                <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="oi oi-ellipses" title="ellipses"></span>
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

                    <h6 className="gray pt-2 text-center "> <i>{this.props.content.caption}</i> </h6>

                </div>

                {/* MUSIC CONTENT TRUE */}

                <div id="postContent" style={this.state.contentStyle}>

                    {/* COVER */}

                    <div id="postCover">
                        <img src={this.props.content.cover} alt="Card image cap" onClick={this.pushSong} className="card-img-top" />

                    </div>


                    {/* INFO */}

                    <div id="postInfo" className="card-body">
                        <h3>{this.props.content.title}</h3>
                        <h4><i className="gold">{this.props.content.artist}</i></h4>
                        <h5><i>{post.vibes}</i></h5>

                    </div>


                    {/* LIST */}
                    <div id="postList">
                        <ul className="list-group list-group-flush darkFade d-none">
                            <li className="list-group-item">Song Name</li>
                            <li className="list-group-item">Song Name</li>
                            <li className="list-group-item">Song Name</li>
                        </ul>
                    </div>

                </div>






                {/* BUTTONS */}

                <div id="postButtons" className="card-footer text-center p-0">

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
