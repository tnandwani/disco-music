import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';

import { SongPost } from "./components/posts/songPost";
import { AlbumPost } from "./components/posts/albumPost";
import { PlaylistPost } from "./components/posts/playlistPost";
import { TextPost } from "./components/posts/textPost";
import { UserBlock } from "./components/blocks/UserBlock";
import { AlbumBlock } from "./components/blocks/AlbumBlock";

export class Home extends React.Component {

    render() {

        return (
            <div>

                <div className="container dark "  >
                    {/* <UserBlock /> */}
{/*                     
                    <AlbumBlock/> */}
                    
                </div>

                <div className="card-columns">

                    <AlbumPost />
                    <TextPost />
                    <SongPost />
                    <PlaylistPost />
                    <SongPost />
                    <SongPost />
                    <AlbumPost />
                    <SongPost />
                    <SongPost />
                    <TextPost />
                    <PlaylistPost />
                    <PlaylistPost />
                    <SongPost />
                    <AlbumPost />
                    <SongPost />
                    <SongPost />
                    <TextPost />
                    <PlaylistPost />
                    <PlaylistPost />
                    <AlbumPost />
                    <TextPost />
                    <SongPost />
                    <TextPost />
                    <AlbumPost />
                    <TextPost />
                    <SongPost />

                </div>

            </div>





        );

    }
}
