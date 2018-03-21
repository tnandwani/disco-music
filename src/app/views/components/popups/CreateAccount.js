import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// CREATE ACCOUNT JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var rawImage;

var rawUser = {
    username: "username",
    uid: "uid",
    publicName: "My Profile",
    email: "email",
    followers: ["disco"],
    following: ["disco"]

}



function checkUser() {

    var user = firebase.auth().currentUser;

    if (user) {
        // User is signed in.

        window.location.reload();
        $('#createModal').modal('toggle');


    } else {
        // No user is signed in.
    }


}


function checkPassword(inputPassword, inputPasswordConfirm) {

    // pass match?
    if (inputPassword === inputPasswordConfirm) {
        // longer than 6 
        if (inputPassword.length > 5) {
            return true
        }
        document.getElementById("errorTip").innerHTML = "Passwords Too Weak";
        return false;



    } else {

        document.getElementById("errorTip").innerHTML = "Passwords Don't Match";
        return false;


    }

}

function checkUsername(inputUsername) {

    // username taken?
    var usernameRef = usersCollection.doc(inputUsername);

    usernameRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("TAKEN");
        } else {
            console.log("AVAILABLE!");
        }
    }).catch(function (error) {
        console.log("Error getting user:", error);
    });

}


function verifyDetails() {

    var inputEmail = document.getElementById("rawNewEmail").value;
    var inputPassword = document.getElementById("rawNewPassword").value;
    var inputPasswordConfirm = document.getElementById("rawNewPasswordConfirm").value;
    var inputPublicName = document.getElementById("rawPublicName").value;
    var inputUsername = document.getElementById("rawUsername").value;
    // make username lowercase
    inputUsername = inputUsername.toLowerCase();
    inputUsername = inputUsername.replace(/\s/g, "");

    console.log("username is now: " + inputUsername);



    // set RAW DATA
    rawUser.email = inputEmail;
    rawUser.publicName = inputPublicName;


    if (inputUsername.length > 1 && inputPublicName.length > 1) {

        // check passwords
        if (checkPassword(inputPassword, inputPasswordConfirm)) {

            // check username

            // username taken?
            var usernameRef = usersCollection.doc(inputUsername);


            usernameRef.get().then(function (doc) {
                if (doc.exists) {
                    console.log("TAKEN");
                    document.getElementById("errorTip").innerHTML = "Username Taken :(";

                } else {
                    console.log("AVAILABLE!");

                    // set RAW DATA
                    rawUser.username = inputUsername;

                    document.getElementById("spinner").classList.remove('d-none');

                    // create account
                    firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        document.getElementById("errorTip").innerHTML = errorMessage;


                        // ...
                    });


                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            // User is signed in.
                            var user = firebase.auth().currentUser;
                            rawUser.uid = user.uid;
                            saveUser(rawUser);
                        } else {
                            // No user is signed in.
                        }
                    });
                }
            }).catch(function (error) {
                console.log("Error getting user:", error);
            });

        } else {

        }

    } else {
        document.getElementById("errorTip").innerHTML = "Please Fill In All Fields";

    }

}

function saveUser(incomingUser) {

    rawUser = incomingUser;


    writeUser(incomingUser);
}


function writeUser(incomingUser) {

    console.log("ready to write user: ");
    console.log(incomingUser);

    // Add a new user
    firestore.collection("users").doc(incomingUser.username).set({
        username: incomingUser.username,
        publicName: incomingUser.publicName,
        uid: incomingUser.uid,
        email: incomingUser.email,
        verified: "Alpha Artist",
        location: "Location",
        followers: ["disco"],
        following: ["disco", incomingUser.username],
        photoUrl: "images/profile.png"

    })
        .then(function () {
            console.log("Document successfully written!");

            // update profile

            // User is signed in.
            var user = firebase.auth().currentUser;

            console.log("going to update: " + user);

            user.updateProfile({
                displayName: rawUser.username

            }).then(function () {
                // Update successful.

                console.log("successfully updated profile!");

                console.log("raw image is ");
                console.log(rawImage);

                // upload profile picture 
                if (rawImage) {

                    var userProfileRef = storageRef.child('profileImages/' + rawUser.uid);

                    userProfileRef.put(rawImage).then(function (snapshot) {

                        console.log('Uploaded a blob or file to: ');
                        console.log(userProfileRef);
                        
                        checkUser();

                    });
                } else {
                    checkUser();

                }


            }).catch(function (error) {
                // An error happened.
            });


        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });





}

function chooseProfileImage() {
    document.getElementById("inputProfile").click();
}

function handleProfile() {

    var preview = document.getElementById("selectedImage");
    var file = document.getElementById("inputProfile").files[0];
    var reader = new FileReader();


    // set file

    rawImage = file;

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
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
                                    <img src="images/profile.png" className="rounded-circle profileCircle" id="selectedImage" onClick={chooseProfileImage} />



                                    <p className="mb-4 mt-2 gray" onClick={chooseProfileImage} > Choose Image</p>

                                    <input className="d-none" type="file" accept="image/*" id="inputProfile" onChange={handleProfile} />

                                    <input autoComplete="name" id="rawPublicName" type="text" className="form-control my-3" placeholder="Name or Artist Name" />
                                    <input autoComplete="name" id="rawUsername" type="text" className="form-control my-3" placeholder="@Username" />
                                    <input autoComplete="email" id="rawNewEmail" type="email" className="form-control my-3" placeholder="Email" />
                                    <input autoComplete="password" id="rawNewPassword" type="password" className="form-control my-3" placeholder="Password" />
                                    <input autoComplete="password" id="rawNewPasswordConfirm" type="password" className="form-control dark my-3" placeholder="Confirm Password" />


                                </div>

                            </form>

                            <div >

                                <p id="errorTip" className="text-danger" > </p>

                            </div>

                            <div className="text-right pr-5">
                               <button type="button" className="btn btn-warning my-2" onClick={verifyDetails} >Create Account</button><span><img  id= "spinner" className = "spinner d-none" src="images/loader.svg"/></span> 

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
