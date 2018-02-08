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


var oldStyle, newStyle;

var linkStyle = {
	display: 'none'
};



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
					newStyle = {
						display: 'none'
					};


				} else {
					// doc.data() will be undefined in this case
					console.log("No such user!");
				}
			}).catch(function (error) {
				console.log("Error getting user:", error);
			});

		} else {
			document.getElementById("oldUserLogin").style.display = "none";
			oldStyle = {
				display: 'none'
			};

		}
	});


}

function showLinks() {

	var rawPublicName = document.getElementById("rawPublicName").value;
	var rawUsername = document.getElementById("rawUsername").value;


	console.log(rawPublicName);


	if ( rawPublicName.length > 1 && rawUsername.length > 1  ) {

		document.getElementById("nextButton").style.display = 'none';
		document.getElementById("firebaseui-auth-container").style.display = 'block';


	} else {

		// not there

		console.log("fill something out!!");

	}
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

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {

			location.reload();


		}
		else{


		}});


}

function signOut(){
	firebase.auth().signOut();
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// RUN SCRIPT 
//////////////////////////////////////////////////////////////////////////////////////////////////////////



startDisco();
