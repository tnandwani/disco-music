import React from "react";
import PropTypes from 'prop-types';



export class CardButtons extends React.Component {

    render() {
        return (


            <div className="card-footer noPadding">
                <div className="btn-group" role="group" aria-label="Basic example">

                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-share postIcons" title="share"></span>
                        Send
                        </button>
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-fire postIcons"  title="fire"></span>
                        Share
                        </button>
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-heart postIcons"  title="heart"></span>
                        Like
                        </button>
                    <button type="button" className="btn btn-secondary">
                        <span className="oi oi-plus postIcons" title="plus"></span>
                        Save
                        </button>
                </div>

            </div>

        );
    }
}
