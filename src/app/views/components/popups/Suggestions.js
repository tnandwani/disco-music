import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";



function submitSuggestion() {
    // Add a new document with a generated id.

    var rawSuggestion = document.getElementById("rawSuggestion").value;

    if (rawSuggestion.length > 1) {

        firestore.collection("suggestions").add({
            user: inUser.username,
            suggestion: rawSuggestion

        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                $('#suggestionModal').modal('toggle');

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

    }


}


export class Suggestions extends React.Component {
    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="suggestionModal">
                <div className="modal-dialog theme" role="document">
                    <div className="modal-content theme">
                        <div className="modal-body leftAlign">

                            <button type="button" className="close white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>


                            <h2 className="mb-4 gold text-center"> <i>Alpha Suggestion Box</i> </h2>

                            <form>
                                <textarea className="form-control dark" id="rawSuggestion" cols="50" rows="5" placeholder="What can we do better?"></textarea>

                            </form>

                            <div >

                                <p id="errorTip" className="text-danger" > </p>

                            </div>

                            <div className="text-right">

                                <button type="button" className="btn btn-warning m-2" onClick={submitSuggestion} >Submit</button>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
