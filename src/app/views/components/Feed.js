import React from "react";
import PropTypes from 'prop-types';

import { Post } from "./Post";



export class Feed extends React.Component {
    render() {

        let content;
        
        if (this.props.posts){
             content = this.props.posts.map((post) =>
            <Post key={post.id} id={post.id} content={post.data} type={post.type} />
        );
            
        }
       

        return (
            <div id="feed">

                {content}

            </div>
        );
    }
}
