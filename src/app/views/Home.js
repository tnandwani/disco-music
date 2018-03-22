import React from "react";
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';


import { Post } from "./components/posts/Post";


import { SongPost } from "./components/posts/songPost";
import { AlbumPost } from "./components/posts/albumPost";
import { PlaylistPost } from "./components/posts/playlistPost";
import { TextPost } from "./components/posts/textPost";
import { UserBlock } from "./components/blocks/UserBlock";
import { AlbumBlock } from "./components/blocks/AlbumBlock";







export class Home extends React.Component {

    render() {


        return (
            <div className="mt-4">

                <div className="dark jumbotron py-4 my-3">

                    <h1 className="gold">Home</h1>
                    <h5 className="gray">@{inUser.username}</h5>

                    {/* <UserBlock /> */}
                    {/*                     
                    <AlbumBlock/> */}

                </div>

                <div className="text-center d-none" >
                    <img src="images/loader.svg" />
                </div>





                <div className="card-columns">

                    <Post />
                   


                </div>

                <div className="my-5">

                    <br />

                </div>

            </div>





        );

    }
}
