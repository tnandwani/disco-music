import React from "react";
import * as firebase from "firebase";
import PropTypes from 'prop-types';

// import { CardButtons } from "./frame/cardButtons";
// import { CardHeader } from "./frame/cardHeader";


var noneStyle = {
    display: "none"
}

var post = {
    username: "Username",
    artist: "Artist",
    caption: "Caption Over Here (100 Characters Max)",
    type: "text",
    date: "Date Posted",
    content: ["Song Name"],
    title: "Album Name",
    likes: 0,
    shares: 0,
    saves: 0,
    vibes: "#Vibes"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






export class Post extends React.Component {


    constructor(props) {
        super(props);

        var postId = this.props.id;
        var postType = this.props.type;

        var postData = false;


        var postRef = postsCollection.doc(postId);
        postRef.get().then(function (doc) {
            if (doc.exists) {

                postData = doc.data();
         
            
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    
        
        this.state = {
            contentStyle: noneStyle,
            listStyle: noneStyle,
            id: postId,
            type: postType,
            post: postData
        };


   



    }

    render() {



        return (

            <div className="card p-0 text-white bg-dark mb-3 container">

                {/* HEADER */}
                <div id="postHeader" className="card-header p-2 text-center">

                    <div className="row">
                        <div className="col text-left">
                            {/* <span className="oi oi-fire pl-2" title="fire"></span> */}

                        </div>
                        <div className="col">
                            <a className="text-white" href=""><h6>@{this.state.post.username}</h6></a>

                        </div>
                        <div className="col text-right">
                            <div className="dropdown show">
                                <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="oi oi-ellipses pr-2" title="ellipses"></span>
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

                    <h6 className="gray pt-2 text-center "> <i>{post.caption}</i> </h6>

                </div>

                {/* MUSIC CONTENT TRUE */}

                <div id="postContent" style={this.state.contentStyle}>

                    {/* COVER */}

                    <div id="postCover">
                        <img src="images/coverArt.png" alt="Card image cap" className="card-img-top" />

                    </div>


                    {/* INFO */}

                    <div id="postInfo" className="card-body">
                        <h3>{post.title}</h3>
                        <h4><i className="gold">{post.artist}</i></h4>
                        <h5><i>{post.vibes}</i></h5>

                    </div>


                    {/* LIST */}
                    <div id="postList" style={this.state.listStyle} >
                        <ul className="list-group list-group-flush darkFade">
                            <li className="list-group-item">Song Name</li>
                            <li className="list-group-item">Song Name</li>
                            <li className="list-group-item">Song Name</li>
                        </ul>
                    </div>

                </div>






                {/* BUTTONS */}

                <div id="postButtons" className="card-footer p-0 text-center container">


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
