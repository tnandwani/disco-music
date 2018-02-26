var inUser = {
    username: "username",
    uid: "uid",
    publicName: "My Profile",
    followers: ["username"],
    following: ["username"]
};

var rawUsername, rawPublicName;




function loggedIn() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            return true;
        } else {
            return false;
        }
    });

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
            window.location.href = '/user';

        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}



function getUser() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Welcome " + user.displayName);
            // User is signed in.
            var usernameRef = usersRef.doc(user.displayName);

            usernameRef.get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());

                    inUser = doc.data();

                    // var newLogin = 	document.getElementById("newUserLogin");
                    // newLogin.style.display = "none";
                    // newStyle = {
                    // 	display: 'none'
                    // };



                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such user!");
                }
            }).catch(function (error) {
                console.log("Error getting user:", error);
            });

        } else {

            // login styles here


        }
    });


}


function verifyDetails() {



    var inputEmail = document.getElementById("rawNewEmail").value;
    var inputPassword = document.getElementById("rawNewPassword").value;
    var inputPasswordConfirm = document.getElementById("rawNewPasswordConfirm").value;
    var inputPublicName = document.getElementById("rawPublicName").value;
    var inputUsername = document.getElementById("rawUsername").value;

    // lowercase username 
    inputUsername = inputUsername.toLowerCase();

    // username taken?
    var usernameRef = usersRef.doc(inputUsername);

    usernameRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("TAKEN");
        } else {
            // doc.data() will be undefined in this case
            console.log("AVAILABLE!");

            // passwords match? 

            if (inputPassword === inputPasswordConfirm) {

                firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });

                var user = firebase.auth().currentUser;


                if (user) {


                    // change display Name to public name 
                    user.updateProfile({
                        displayName: inputUsername
                    }).then(function () {
                        // Update successful.
                    }).catch(function (error) {
                        // An error happened.
                    });

                    // write User to database

                    var newUser = {
                        username: inputUsername,
                        email: user.email,
                        publicName: inputPublicName,
                        uid: user.uid
                    };

                    console.log("going to write new user: ");
                    console.log(newUser);
                    writeUser(newUser);





                } else {

                }


            }
        }
    }).catch(function (error) {
        console.log("Error getting user:", error);
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
