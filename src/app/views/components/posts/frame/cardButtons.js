import React from "react";
import PropTypes from 'prop-types';



export class CardButtons extends React.Component {

    render() {
        return (


            <div className="card-footer p-0 text-center container">
                <div className="btn-group" role="group" aria-label="Basic example">

                    
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-fire postIcons pr-2"  title="fire"></span>
                        Share
                        </button>
                    <button type="button" className="btn btn-secondary px-4">
                        <span className="oi oi-heart postIcons pr-2"  title="heart"></span>
                        Like
                        </button>
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-plus postIcons pr-2" title="plus"></span>
                        Save
                        </button>
                </div>

            </div>

        );
    }
}
