import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

import { SongPost } from "./components/posts/songPost";
import { AlbumPost } from "./components/posts/albumPost";
import { PlaylistPost } from "./components/posts/playlistPost";
import { TextPost } from "./components/posts/textPost";

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


                <ul className="nav nav-pills nav-justified my-2" id="myTab" role="tablist">
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
                        <div className="card-columns">

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
