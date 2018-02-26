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


function checkUpload() {


	if (loggedIn()) {
		window.location.href = '/upload';


	} else {

		$('#signInModal').modal('toggle');

	}


}

function checkUser() {

	if (loggedIn()) {
		window.location.href = '/user';


	} else {

		$('#signInModal').modal('toggle');

	}

}

function showCreateModal() {

	$('#signInModal').modal('toggle');
	$('#createModal').modal('toggle');

}
