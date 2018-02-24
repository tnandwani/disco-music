import React from "react";
import { Link } from "react-router";
import PropTypes from 'prop-types';


export const Footer = (props) => {
    return (
        <div className="footer-grid container-fluid text-center px-0 ten ">

            <div className="footerLeft">
                <div className="float-left ten">
                    <span className="oi oi-layers bigIcon px-3 gold" title="layers"></span>

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
                    <span className="oi oi-reload bigIcon px-3" title="reload"></span>
                    <span className="oi oi-media-skip-backward controlIcon px-5" title="media-skip-backward"></span>
                    <span className="oi oi-media-play controlIcon px-2" title="media-play"></span>
                    <span className="oi oi-media-skip-forward controlIcon px-5" title="media-skip-forward"></span>
                    <span className="oi oi-random bigIcon pl-3" title="random"></span>



                </div>
            </div>

            <div className="footerRight mt-3 px-0 mx-0">

                <div className="pt-3">
                    <span className="oi oi-share footerIcon px-3" title="share"></span>
                    <span className="oi oi-fire footerIcon px-3" title="fire"></span>
                    <span className="oi oi-heart footerIcon px-3" title="heart"></span>
                    <span className="oi oi-plus footerIcon px-3" title="plus"></span>
                    <span className="oi oi-volume-high footerIcon pl-3" title="volume-high"></span>



                </div>




            </div>




        </div>


    );
};
