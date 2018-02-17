import React from "react";
import PropTypes from 'prop-types';


export class CreateAccount extends React.Component {
    render() {
        return (
            <div className="modal content" tabIndex="-1" role="dialog" id="createModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <form >

                                <div className="container px-5 mt-3">

                                    <h2 className="mb-4 gold"> <i>Welcome to Disco</i> </h2>

                                    <img src="https://firebasestorage.googleapis.com/v0/b/disco-6a3bf.appspot.com/o/profileImages%2Fprofile.png?alt=media&token=bf906fc5-bc41-4a1b-ba29-6376e4a626ed" className="rounded-circle profileCircle" />

                                    <p className="mb-4 mt-2 gray" > Choose Image</p>

                                    <input id="rawPublicName" type="text" className="form-control my-3" placeholder="Name or Artist Name" />
                                    <input id="rawUsername" type="text" className="form-control my-3" placeholder="@Username" />
                                    <input id="rawNewEmail" type="email" className="form-control my-3" placeholder="Email" />
                                    <input id="rawNewPassword" type="password" className="form-control my-3" placeholder="Password" />
                                    <input id="rawNewPasswordConfirm" type="password" className="form-control my-3" placeholder="Confirm Password" />


                                </div>

                            </form>

                            <button type="button" className="btn btn-warning my-2" onClick = {verifyDetails} >Create Account</button>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
