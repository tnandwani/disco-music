import React from "react";
import PropTypes from 'prop-types';




function chooseProfileImage(){
    document.getElementById("profileImage").click();
}


export class CreateAccount extends React.Component {
    render() {
        return (
            <div className="modal text-center" tabIndex="-1" role="dialog" id="createModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <form >

                                <div className="container px-5 mt-3">

                                    <h2 className="mb-4 gold"> <i>Welcome to Disco</i> </h2>

                                    <img src="images/profile.png" className="rounded-circle profileCircle" onClick={chooseProfileImage} />

                                    <p className="mb-4 mt-2 gray" onClick={chooseProfileImage} > Choose Image</p>
                                    
                                    <input className="d-none" type="file"  accept="image/*" id="profileImage"/>

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
