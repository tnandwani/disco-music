import React from "react";
import PropTypes from 'prop-types';

import { Post } from "./Post";


export class Feed extends React.Component {

    constructor(props) {
        super(props);


        let content;

        if (this.props.posts != 0) {

            this.state = {
                content: content
            }
        }
        else {

            this.state = {
                content: ""
            }

        }

    }

    render() {



        return (
            <div id="feed">

                {this.state.content}

            </div>
        );
    }
}



// content = this.props.posts.map((post) =>
// <Post key={post.id} id={post.id} content={post.data} type={post.type} />
// );
