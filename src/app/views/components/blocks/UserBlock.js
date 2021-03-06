import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

var rawImage;




function signOut() {
    firebase.auth().signOut();
    inUser = {
        username: "username",
        uid: "uid",
        email: "email",
        publicName: "My Profile",
        followers: ["disco"],
        following: ["disco"],
        photoUrl: "images/profile.png"
    };
    browserHistory.push("/home");
}


function chooseProfileImage() {
    document.getElementById("inputProfile").click();
}

function handleProfile() {

    document.getElementById("profileSpinner").classList.remove('d-none');
    var preview = document.getElementById("selectedImage");
    var file = document.getElementById("inputProfile").files[0];
    var reader = new FileReader();


    // set file

    rawImage = file;

    if (rawImage) { 

        inUser.photoUrl = rawImage;

        var userProfileRef = storageRef.child('profileImages/' + inUser.uid);

        userProfileRef.put(rawImage).then(function (snapshot) {

            document.getElementById("profileSpinner").classList.add('d-none');
            console.log('Uploaded a blob or file to: ');
            console.log(userProfileRef);
            inUser.photoUrl = snapshot.downloadURL;

        });
    } else {
        console.log(":((((");
    }

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}



export class UserBlock extends React.Component {

    render() {
        return (

            <div className="">

                <div className="row container p-3 text-center" >
                    <div className="col py-2" >
                        <img src={inUser.photoUrl} className="rounded-circle profileCircle" id="selectedImage" onClick={chooseProfileImage} />
                        <input className="d-none" type="file" accept="image/*" id="inputProfile" onChange={handleProfile} />
                        <div>
                            <img id="profileSpinner" className="spinner d-none" src="images/loader.svg" />
                        </div>
                        <div className="text-center" >
                            <span className="badge badge-pill badge-warning mt-3">{inUser.verified}</span>

                        </div>
                    </div>
                    <div className="col p-3 pt-5 ">
                        <h1 > {inUser.publicName}</h1>
                        <h1 className="gold py-3"> <i> @{inUser.username} </i> </h1>


                        <h5 ><span className="oi oi-location postIcons pr-2" title="location"></span> {inUser.location}</h5>



                    </div>
                    <div className="col p-3 pt-5 ">

                        <h2 className="white" onClick = {showFollowers} >Followers <small className="gold font-weight-bold pl-2">{inUser.followers.length}</small> </h2>
                        <h2 className="white py-3" onClick = {showFollowers}>Following <small className="gold font-weight-bold pl-2">{inUser.following.length}</small> </h2>

                        <button type="button" className="btn btn-outline-secondary mt-2 px-5" onClick={signOut} > Logout</button>

                    </div>
                    
                </div>


            </div>

        );
    }
}
