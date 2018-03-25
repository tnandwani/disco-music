import React from "react";
import PropTypes from 'prop-types';

import { Post } from "./posts/Post";



export class Feed extends React.Component {
    render() {

        const content = this.props.posts.map((post) =>        
            <Post key = {post.date} content = {post} type = {post.type}/>
        ); 


        return (
            <div id="feed">

            {content}

            </div>
        );
    }
}
