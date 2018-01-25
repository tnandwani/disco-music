import React from "react";
import { Link } from "react-router";
import PropTypes from 'prop-types';


export const Footer = (props) => {
    return (
        <div className="footer-theme">
            <footer className="footer-theme">
                <div className="row">

                    <div className="col-xs-6 col-sm-4">
                        <div className="row">
                            <div className="col-xs-6 col-md-4 noPadding">
                                <img src="images/coverArt.png" className="footerCover" />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-8 leftAlign">
                                <h4 className="gray">Song Name</h4>
                                <h5><i>Artist</i></h5>
                                <h6 className="gray">Album</h6>
                            </div>
                        </div>

                    </div>

                    <div className="col-xs-6 col-sm-4">
                        <span className="oi oi-loop footerButtons" title="loop"></span>
                        <span className="oi oi-media-skip-backward footerControls" title="media-skip-backward"></span>
                        <span className="oi oi-media-play footerControls" title="media-play"></span>
                        <span className="oi oi-media-skip-forward footerControls" title="media-skip-forward"></span>
                        <span className="oi oi-random footerButtons" title="random"></span>


                    </div>

                    <div className="col-xs-6 col-sm-4">

                        <span className="oi oi-layers footerButtons" title="layers"></span>
                        <span className="oi oi-share footerButtons" title="share"></span>
                        <span className="oi oi-fire footerButtons" title="fire"></span>
                        <span className="oi oi-heart footerButtons" title="heart"></span>
                        <span className="oi oi-plus footerButtons" title="plus"></span>
                        <span className="oi oi-volume-high footerButtons" title="volume-high"></span>


                    </div>

                </div>
            </footer>

        </div>



    );
};
