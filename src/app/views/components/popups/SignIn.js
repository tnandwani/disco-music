import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


function showCreateModal() {
    $('#signInModal').modal('toggle');
    $('#createModal').modal('toggle');
}

function signIn() {

    var inputEmail = document.getElementById("rawEmail").value;
    var inputPassword = document.getElementById("rawPassword").value;

    firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("errorTip").innerHTML = {errorMessage};

        // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.reload();
            $('#signInModal').modal('toggle');

        } else { }
    });


}



export class SignIn extends React.Component {
    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="signInModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body leftAlign">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>


                            <h2 className="mb-4 gold text-center"> <i>Welcome to Disco</i> </h2>

                            <form>
                                <label>Email</label>
                                <input autoComplete='email' id="rawEmail" type="text" className="form-control dark mb-3" placeholder="Email" />
                                <label>Password</label>


                                <input autoComplete='password' id="rawPassword" type="password" className="form-control dark mb-3" placeholder="Password" />
                            </form>

                            <div >

                                <p id="errorTip" className="text-danger" > </p>

                            </div>

                            <div className="text-right">
                                <button type="button" className="btn btn-outline-warning m-2" onClick={showCreateModal} >Create Account</button>
                                <button type="button" className="btn btn-warning m-2" onClick={signIn} >Sign In</button>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
