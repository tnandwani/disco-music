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


var rawUsername, rawPublicName;



// var uiConfig = {
// 	signInSuccessUrl: '<url-to-redirect-to-on-success>',
// 	signInOptions: [
// 	  // Leave the lines as is for the providers you want to offer your users.
// 	  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// 	  firebase.auth.EmailAuthProvider.PROVIDER_ID

// 	],
// 	// Terms of service url.
// 	tosUrl: '<your-tos-url>'
//   };

//   // Initialize the FirebaseUI Widget using Firebase.
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   // The start method will wait until the DOM is loaded.

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

function checkUpload() {


	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			window.location.href = '/upload';
		} else {
			// No user is signed in.
			$('#signInModal').modal('toggle');

		}
	});




}

function checkUser() {


	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			window.location.href = '/user';
		} else {
			// No user is signed in.
			$('#signInModal').modal('toggle');

		}
	});




}


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





//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// RUN SCRIPT 
//////////////////////////////////////////////////////////////////////////////////////////////////////////



// startDisco();
