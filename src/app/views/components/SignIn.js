import React from "react";
import PropTypes from 'prop-types';


export class SignIn extends React.Component {
    render() {
        return (
            <div className="modal content" tabIndex="-1" role="dialog" id="signInModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body leftAlign">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>


                            <h2 className="mb-4 gold "> <i>Welcome Back to Disco</i> </h2>
                            <label>Email</label>
                            <input id="rawEmail" type="text" className="form-control mb-3" placeholder="Email" />
                            <label>Password</label>

                            <input id="rawPassword" type="password" className="form-control mb-3" placeholder="Password" />


                            <button type="button" className="btn btn-warning my-2" onClick={signIn} >Sign In</button>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
