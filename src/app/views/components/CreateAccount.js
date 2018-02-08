import React from "react";
import PropTypes from 'prop-types';


export class CreateAccount extends React.Component {
    render() {
        return (
            <div className="modal content" tabIndex="-1" role="dialog" id="createModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="text-dark">Welcome to Disco</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form >

                                <div className="container px-5">

                                    <img src="https://firebasestorage.googleapis.com/v0/b/disco-6a3bf.appspot.com/o/profileImages%2Fprofile.png?alt=media&token=bf906fc5-bc41-4a1b-ba29-6376e4a626ed" className="rounded-circle profileCircle" />

                                    <p className= "text-dark mb-4" > Choose Image</p> 
                                   
                                    <input  id= "rawPublicName" type="text" className="form-control my-3" placeholder="Name or Artist Name" />
                                    <input id= "rawUsername" type="text" className="form-control my-3 " placeholder="@Username" />


                                </div>

                            </form>


                            <div id="firebaseui-auth-container" style = {linkStyle}></div>

                        </div>
                        <div className="modal-footer">
                            <button id="nextButton" type="button" className="btn btn-warning" onClick={showLinks}>Next Step</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
