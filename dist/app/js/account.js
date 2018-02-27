////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// START FIREBASE
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var config = {
    apiKey: "AIzaSyDquIdmKQfr-QGF3kyEb28FzAboOPBE36g",
    authDomain: "disco-6a3bf.firebaseapp.com",
    databaseURL: "https://disco-6a3bf.firebaseio.com",
    projectId: "disco-6a3bf",
    storageBucket: "disco-6a3bf.appspot.com",
    messagingSenderId: "71660981931"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();
var storageRef = firebase.storage().ref();


var usersRef = firestore.collection("users");
var postsRef = firestore.collection("posts");
var songsRef = firestore.collection("songs");
var albumsRef = firestore.collection("albums");


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// USER JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////



var inUser = {
    username: "username",
    uid: "uid",
    publicName: "My Profile",
    followers: ["username"],
    following: ["username"]
};



function login() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            console.log("Welcome " + user.displayName);
            

        } else {

            console.log("No One Here");
            
        }
    });

}


function signIn() {

    var inputEmail = document.getElementById("rawEmail").value;
    var inputPassword = document.getElementById("rawPassword").value;

    firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = '/user';
        } else {}
    });


}

function signOut() {
    firebase.auth().signOut();
    window.location.href = '/home';
}



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
    email: "email"
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
    var usernameRef = usersRef.doc(inputUsername);

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


    // set RAW DATA
    rawUser.email = inputEmail;
    rawUser.publicName = inputPublicName;


    if (inputUsername.length > 1 && inputPublicName.length > 1) {

        // check passwords
        if (checkPassword(inputPassword, inputPasswordConfirm)) {

            // check username

            // username taken?
            var usernameRef = usersRef.doc(inputUsername);


            usernameRef.get().then(function (doc) {
                if (doc.exists) {
                    console.log("TAKEN");
                    document.getElementById("errorTip").innerHTML = "Username Taken :(";

                } else {
                    console.log("AVAILABLE!");

                    // set RAW DATA
                    rawUser.username = inputUsername;


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
    console.log("ready to write user: ");
    console.log(rawUser);
    writeUser(rawUser);
}

function writeUser(user) {

    // Add a new document in collection "cities"
    firestore.collection("users").doc(user.username).set({
            username: user.username,
            publicName: user.publicName,
            uid: user.uid,
            email: user.email,
            followers: ["disco"],
            following: ["disco"]
        })
        .then(function () {
            console.log("Document successfully written!");

            // update profile

            var user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: rawUser.username

            }).then(function () {
                // Update successful.

                // upload profile picture 
                if (rawImage) {
                    var userProfileRef = storageRef.child('profileImages/' + user.uid + '.png');

                    userProfileRef.put(rawImage).then(function (snapshot) {
                        console.log('Uploaded a blob or file to: ');
                        console.log(userProfileRef);
                        window.location.href = '/user';

                    });
                }
                window.location.href = '/user';

            }).catch(function (error) {
                // An error happened.
            });








        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });





}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// START SCRIPT
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


login();
