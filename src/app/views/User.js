import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

import { SongPost } from "./components/posts/songPost";
import { AlbumPost } from "./components/posts/albumPost";
import { PlaylistPost } from "./components/posts/playlistPost";
import { TextPost } from "./components/posts/textPost";


var url = "https://firebasestorage.googleapis.com/v0/b/disco-6a3bf.appspot.com/o/profileImages%2Fprofile.png?alt=media&token=bf906fc5-bc41-4a1b-ba29-6376e4a626ed";

var followers = 0;
var following = 0;




export class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="profile-grid">
                        <div className="profileImage text-center">
                            <img src={url} className="rounded-circle profileCircle" />
                        </div>
                        <div className="profileTags"><span className="badge badge-warning">{inUser.verified}</span>

                        </div>
                        <div className="profileInfo mt-4">
                            <h1> {inUser.publicName}</h1>
                            <h2 className="gold"> <i> @{inUser.username} </i> </h2>
                            <h5 > Location</h5>


                        </div>
                        <div className="profileFollow mr-4">

                            <h2 className="gold">Followers</h2>
                            <h3>{inUser.followers.length}</h3>
                            <h2 className="gold">Following</h2>
                            <h3>{inUser.following.length}</h3>

                            <button type="button" className="btn btn-outline-success mt-2 px-5 mx-2"> Upload + </button>
                            <button type="button" className="btn btn-outline-success mt-2 px-5"  onClick={signOut} > Logout</button>

                        </div>

                    </div>

                </div>

                <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link px-5 active" id="home-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-5" id="profile-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="false">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-5" id="messages-tab" data-toggle="tab" href="#shares" role="tab" aria-controls="shares" aria-selected="false">Shares</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-5" id="settings-tab" data-toggle="tab" href="#likes" role="tab" aria-controls="likes" aria-selected="false">Likes</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active" id="all" role="tabpanel" aria-labelledby="home-tab">
                        <div className="card-columns mt-4">

                            <PlaylistPost />
                            <TextPost />
                            <PlaylistPost />
                            <SongPost />
                            <AlbumPost />
                            <PlaylistPost />
                            <PlaylistPost />
                            <SongPost />
                            <SongPost />
                            <AlbumPost />
                            <SongPost />

                        </div>
                    </div>
                    <div className="tab-pane" id="posts" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="card-columns mt-4">

                            <TextPost />
                            <PlaylistPost />
                            <SongPost />
                            <SongPost />
                            <AlbumPost />
                            <PlaylistPost />
                            <SongPost />
                            <AlbumPost />
                            <PlaylistPost />
                            <SongPost />

                        </div>
                    </div>
                    <div className="tab-pane" id="shares" role="tabpanel" aria-labelledby="messages-tab">
                        <div className="card-columns mt-4">

                            <PlaylistPost />
                            <SongPost />
                            <AlbumPost />
                            <PlaylistPost />s
                            <PlaylistPost />
                            <SongPost />
                            <SongPost />
                            <PlaylistPost />
                            <TextPost />
                            <AlbumPost />
                            <SongPost />

                        </div>
                    </div>
                    <div className="tab-pane" id="likes" role="tabpanel" aria-labelledby="settings-tab">
                        <div className="card-columns mt-4">

                            <SongPost />
                            <AlbumPost />
                            <PlaylistPost />
                            <TextPost />
                            <SongPost />
                            <SongPost />
                            <AlbumPost />
                            <SongPost />
                            <TextPost />
                            <SongPost />
                            <AlbumPost />

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
