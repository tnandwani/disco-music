import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


export class Upload extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div className="mx-5 mt-2 leftAlign" >
                <h3>Caption</h3>
                <input type="text" className="form-control theme my-3" placeholder="100 Charater Limit" />

                <h3 >Music </h3>

                <ul className="nav nav-tabs mt-3" id="postType" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link px-5 active" id="song-tab" data-toggle="tab" href="#song" role="tab" aria-controls="song" aria-selected="true">Upload Song</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-5" id="album-tab" data-toggle="tab" href="#album" role="tab" aria-controls="album" aria-selected="false">Upload Album</a>
                    </li>

                </ul>

                <div className="tab-content mt-4">

                    <div className="tab-pane active" id="song" role="tabpanel" aria-labelledby="song-tab">

                        <div className="row">
                            <div className="col-sm-4">
                                <img src="images/coverArt.png" className="feedCover" />
                            </div>

                            <div className="col-sm-8 pt-1">
                                <input type="text" className="form-control theme py-3" placeholder="Song Name" />


                                <div className="input-group my-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" className="form-control theme" placeholder="Featuring" />

                                </div>


                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text pl-3" id="basic-addon1">#</span>
                                    </div>
                                    <input type="text" className="form-control theme" placeholder="Vibes" />

                                </div>

                                <button className="btn px-3 m-2"></button>
                                <button className="btn px-3 m-2"></button>
                                <button className="btn px-3 m-2"></button>
                                <button className="btn px-3 m-2"></button>
                                <button className="btn px-3 m-2"></button>

                                <br />
                                <button className="btn btn-outline-success my-3"> + Song File </button><span className="oi oi-check pl-3"  title="check"></span>

                                <br />
                                <button className="btn btn-outline-success">+  Lyrics File</button><span className="oi oi-check pl-3"  title="check"></span>




                            </div>

                        </div>
                    </div>

                    <div className="tab-pane" id="album" role="tabpanel" aria-labelledby="albums-tab">

                    </div>
                </div>
            </div>

        );
    }
}
