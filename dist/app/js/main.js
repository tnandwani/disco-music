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
var usersRef = firestore.collection("users");
var postsRef = firestore.collection("posts");
var songsRef = firestore.collection("songs");
var albumsRef = firestore.collection("albums");

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// SHARED VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

var inUser = {
	username: "username",
	uid: "uid",
	publicName: "My Profile",
	followers: ["username"],
	following: ["username"]
};



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// SHARED JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function startDisco() {

	getUser(); // includes followers and following

}

function createUser(user) {

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
					document.getElementById("newUserLogin").style.display = "none";


				} else {
					// doc.data() will be undefined in this case
					console.log("No such user!");
				}
			}).catch(function (error) {
				console.log("Error getting user:", error);
			});

		} else {
			// No user is signed in.
			document.getElementById("oldUserLogin").style.display = "none";

		}
	});


}


function loginUser() {

	var inputEmail = document.getElementById("inputEmail").value;
	var inputPassword = document.getElementById("inputPassword").value;

	firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
	window.open("home", "_self");


}




//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// RUN SCRIPT 
//////////////////////////////////////////////////////////////////////////////////////////////////////////


startDisco();
