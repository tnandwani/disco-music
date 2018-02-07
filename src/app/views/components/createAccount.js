import React from "react";
import PropTypes from 'prop-types';


export class CreateAccount extends React.Component {
    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="createModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="text-dark">Welcome to Disco</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div >

                                    <img src="https://firebasestorage.googleapis.com/v0/b/disco-6a3bf.appspot.com/o/profileImages%2Fprofile.png?alt=media&token=bf906fc5-bc41-4a1b-ba29-6376e4a626ed" className="rounded-circle profileCircle mb-3" />

                                    <input type="text" className="form-control my-3" placeholder="Name or Artist Name" />
                                    <input type="text" className="form-control my-3" placeholder="@Username" />

                                    <div>   

                                        
                                    </div>





                                </div>



                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning">Create Account</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
