import React from "react";
import { Link } from "react-router";
import PropTypes from 'prop-types';

function togglePlay() {

    if (document.getElementById("playButton").classList.contains("oi-media-play")) {
        // is playing 
        console.log("is playing");
        document.getElementById("playButton").classList.remove('oi-media-play');
        document.getElementById("playButton").classList.add('oi-media-pause');



    }
    else {
        // is paused
        console.log("is paused");
        document.getElementById("playButton").classList.remove('oi-media-pause');
        document.getElementById("playButton").classList.add('oi-media-play');



    }





}


export const Footer = (props) => {
    return (
        <div className="footer-grid container-fluid text-center px-0 ten ">

            <div className="footerLeft">
                <div className="float-left ten">

                    <span className="oi oi-layers bigIcon px-3 gold" title="Queue"></span>
                    <img src="images/coverArt.png" className="h-100" />



                </div>
                <div className="ml-5 float-right">
                    <div className="ml-5 mr-5">
                        <h4 > Song Name</h4>
                        <h5 className="gold"> Artist</h5>
                        <h6> <i>#Vibes</i></h6>


                    </div>


                </div>

            </div>

            <div className="footerCenter">
                <div className="pt-4 gold">
                    <span className="oi oi-reload bigIcon px-3" title="Loop"></span>
                    <span className="oi oi-media-skip-backward controlIcon px-5" title="Back"></span>
                    <span id="playButton" onClick={togglePlay} className="oi oi-media-play controlIcon px-2" title="Play"></span>
                    <span className="oi oi-media-skip-forward controlIcon px-5" title="Next"></span>
                    <span className="oi oi-random bigIcon pl-3" title="Shuffle"></span>



                </div>
            </div>

            <div className="footerRight mt-3 px-0 mx-0">

                <div className="pt-3 text-muted">
                    <span className="oi oi-share footerIcon px-3" title="Send"></span>
                    <span className="oi oi-fire footerIcon px-3" title="Share"></span>
                    <span className="oi oi-heart footerIcon px-3" title="Like"></span>
                    <span className="oi oi-plus footerIcon px-3" title="Add"></span>
                    <span className="oi oi-volume-high footerIcon pl-3" title="Volume"></span>



                </div>




            </div>




        </div>


    );
};
