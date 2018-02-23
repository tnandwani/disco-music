import React from "react";
import PropTypes from 'prop-types';


export class AlbumBlock extends React.Component {

    render() {
        return (

            <div>

                <div className="row container p-3 text-center" >
                    <div className="col text-right" >
                        <img src="images/coverArt.png" className="profileCircle" />


                    </div>
                    <div className="col p-3 ">
                        <h1 > Album Name</h1>
                        <h1 className="gold py-3"> Artist </h1>
                        <h4 > <i> #Vibes</i></h4>



                    </div>
                    <div className="col p-3">

                        <button type="button" className="btn btn-outline-secondary w-75">
                            <span className="oi oi-plus pr-2" title="plus"></span>
                            Save
                        </button>
                        <br/>
                        <button type="button" className="btn btn-outline-secondary w-75 my-3">
                            <span className="oi oi-fire pr-2" title="fire"></span>
                            Share
                        </button>
                        <br/>
                        <button type="button" className="btn btn-outline-secondary w-75 mb-3">
                            <span className="oi oi-heart pr-2" title="heart"></span>
                            Like
                        </button>

                        <button type="button" className="btn btn-outline-secondary w-75">
                            <span className="oi oi-share pr-2" title="share"></span>
                            Send
                        </button>


                    </div>
                </div>


            </div>

        );
    }
}
