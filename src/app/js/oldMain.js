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

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		console.log("Welcome " + user.displayName);
		// User is signed in.
	} else {
		// No user is signed in.
	//	window.open("createAccount.html", "_self");

	}
});

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// SHARED VARIABLES
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


var savedCreator = {
	username: "userUsername",
	uid: "userUid",
	publicName: "userPublicName"
}

var
	followingArray,
	followersArray,
	newReleasesArray,
	songDataArray,
	newSongDataArray,
	userFeedTimestampsArray,
	sortedArray,
	myVibesArray,
	myFeaturesArray,
	newCoversArray
	;

var lastRefresh = 0;
var readySongFile = 0;
var readyCoverFile = 0;

// VIBE STUFF
var newVibesRef = firebase.database().ref('vibes/unverified');
var vibesRef = firebase.database().ref('vibes/verified');

var unverifiedVibesArray = ["Quiet"];
var vibesArray = ["Bored"];

var firestore = firebase.firestore();
var storageRef = firebase.storage().ref();
var coverStorageRef = firebase.storage().ref('covers');





////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// SHARED JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function tryLogin() {

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			getCreator();
		} else {
			// No user is signed in.
			console.log("NOT logged in")

		}
	});
}



function getCreator() {

	var user = firebase.auth().currentUser;

	if (user) {
		// User is signed in.

		if (user != null) {
			userUsername = user.displayName;
			userUid = user.uid;

			firebase.database().ref('/users/' + userUsername + "/details/publicName").once('value').then(function (snapshot) {
				var userPublicName = snapshot.val();

				var rawCreator = {
					username: userUsername,
					uid: userUid,
					publicName: userPublicName
				}

				saveCreator(rawCreator);


			});


		}
	} else {
		// No user is signed in.
		console.log("creator is NOT here");

	}

}

function avoidSpace(event) {
	var k = event ? event.which : window.event.keyCode;
	if (k == 32) return false;
	if (k == 64) return false;
}

function saveCreator(incomingCreator) {
	savedCreator = incomingCreator;
	console.log("logged in assssss: " + savedCreator.username);

	getFollowersFor(savedCreator.username);

	getFollowingFor(savedCreator.username);


}

function getFollowingFor(username) {

	var followingRef = firebase.database().ref('/users/' + username + '/details/following');

	followingRef.once('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			// key list
			var childKey = childSnapshot.key;
			// value list 
			var childData = childSnapshot.val();
			saveFollowingArray(childKey);
			// ...
		});
	});
}

function saveFollowingArray(following) {


	if (typeof followingArray == "undefined") {
		followingArray = [following];
	}
	else if (followingArray) {
		followingArray.push(following);
	}

}


function getFollowersFor(username) {

	var followersRef = firebase.database().ref('/users/' + username + '/details/followers');

	followersRef.once('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			// key list
			var childKey = childSnapshot.key;
			// value list 
			var childData = childSnapshot.val();
			saveFollowersArray(childKey);
			// ...
		});


	});
}

function saveFollowersArray(follower) {

	if (typeof followersArray == "undefined") {
		followersArray = [follower];
	}
	else if (followersArray) {
		followersArray.push(follower);
	}

}

function getLastRefresh() {

	firebase.database().ref('/users/' + savedCreator.username + '/details/lastRefresh').once('value').then(function (snapshot) {
		lastRefresh = snapshot.val();

		console.log("last refreshed at: " + lastRefresh);
		// ...
	});

}


function navLogin() {

	var inputEmail = navLogin.navEmail.value;
	var inputPassword = navLogin.navPassword.value;

	firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			window.open("myProfile.html", "_self");
			// User is signed in.

		} else {
			// No user is signed in.
		}
	});
}

function getVibes() {

	// get Vibes
	vibesRef.on('child_added', function (data) {
		vibesArray.push(data.key)
	});

	newVibesRef.on('child_added', function (data) {
		unverifiedVibesArray.push(data.key);
	});

	// both arrays are ready

}


function loadVibes() {
	var availableTags = vibesArray;

	$("#inputVibes").autocomplete({
		source: availableTags
	});
}



function saveVibes(e) {

	if (e.keyCode === 32) {
		// if pressed space 
		return false;
	}
	else if (e.keyCode === 13) {
		// if pressed enter 
		console.log("pressed enter");

		var inputVibe = document.getElementById('inputVibes').value;
		saveMyVibes(inputVibe);

	}

}

function saveMyVibes(newVibe) {

	if (typeof myVibesArray == "undefined") {
		myVibesArray = [newVibe];
	}
	else if (myVibesArray) {
		if (myVibesArray.length < 5) {
			// less than 5 vibes
			myVibesArray.push(newVibe);
		}
		else {
			// extra vibes
			myVibesArray.shift();
			myVibesArray.push(newVibe);

		}
	}

	console.log(myVibesArray);
	updateVibeUI();
	
	document.getElementById('inputVibes').value = "";

}

function updateVibeUI() {

	for (index = 0; index < 5; index++) {
		if (myVibesArray[index]) {
			// if value is there
			$("#vibe" + (index + 1)).html("#" + myVibesArray[index]);
		}
		else {
			$("#vibe" + (index + 1)).html("");
		}
	}

}


function loadMutuals() {


	if (typeof followersArray == "undefined") {
		followersArray = ["none"];
	}

	var mutualsArray = makeMutuals(followingArray, followersArray);

	var availableTags = mutualsArray;

	console.log("mutuals:");
	console.log(mutualsArray);


	$("#inputFeatures").autocomplete({
		source: availableTags
	});
}


function makeMutuals(a, b) {
	var t;
	if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
	return a.filter(function (e) {
		return b.indexOf(e) > -1;
	});
}

function saveFeatures(e) {

	if (e.keyCode === 32) {
		// if pressed space 
		return false;
	}
	else if (e.keyCode === 13) {
		// if pressed enter 
		console.log("pressed enter????");

		var inputFeature = document.getElementById('inputFeatures').value;
		saveMyFeatures(inputFeature);

	}

}

function saveMyFeatures(feature) {

	console.log("about to save: " + feature);

	if (typeof myFeaturesArray == "undefined") {
		myFeaturesArray = [feature];
	}
	else if (myFeaturesArray) {
		if (myFeaturesArray.length < 5) {
			// less than 5 artists
			var repeat = myFeaturesArray.indexOf(feature);
			if (repeat == -1) {
				//new feature
				myFeaturesArray.push(feature);
			}
		}
		else {
			// extra vibes

			var repeat = myFeaturesArray.indexOf(feature);
			if (repeat == -1) {
				//new feature
				myFeaturesArray.shift();
				myFeaturesArray.push(feature);
			}


		}
	}

	updateFeaturesUI();


	document.getElementById('inputFeatures').value = "";

}



function updateFeaturesUI() {

	$("#readyFeatures").html("@ft. " + myFeaturesArray);
	$('#featuresBlock').css('display', 'inline-block');

}

function updateNewFiveUI() {

	// newReleasesArray READY
	console.log("NEW RELEASE ARRAY ");
	console.log(newReleasesArray);

	// get data for new releases

	for (i = 0; i < 5; i++) {
		getDataForNewReleases(newReleasesArray[i]);
	}

	// update UI 
	setTimeout(function () {

		// fill UI with data
		updateTimeline();

		// listen for MORE new songs 

	}, 1200);




}


function getDataForNewReleases(songID) {

	firebase.database().ref('/songs/' + songID).once('value').then(function (snapshot) {
		var username = snapshot.val().creator.username;
		var artistName = snapshot.val().creator.publicName;
		var songName = snapshot.val().name;
		var cover = snapshot.val().cover;
		var timestamp = snapshot.val().timestamp;

		if (cover == undefined) {
			cover = "images/coverArt.png"
		}

		var songData = {
			username: username,
			artistName: artistName,
			songName: songName,
			cover: cover,
			songID: songID,
			timestamp: timestamp
		};
		saveNewReleaseData(songData);

	});

}
function saveNewReleaseData(songPreview) {

	if (newSongDataArray) {
		newSongDataArray.push(songPreview);
	}

	else if (typeof newSongDataArray == "undefined") {
		newSongDataArray = [songPreview];
	}

}

function updateTimeline() {

	var name1 = document.getElementById('name1');
	var name2 = document.getElementById('name2');
	var name3 = document.getElementById('name3');
	var name4 = document.getElementById('name4');
	var name5 = document.getElementById('name5');

	var artist1 = document.getElementById('artist1');
	var artist2 = document.getElementById('artist2');
	var artist3 = document.getElementById('artist3');
	var artist4 = document.getElementById('artist4');
	var artist5 = document.getElementById('artist5');

	var cover1 = document.getElementById("coverArt1");
	var cover2 = document.getElementById('coverArt2');
	var cover3 = document.getElementById('coverArt3');
	var cover4 = document.getElementById('coverArt4');
	var cover5 = document.getElementById('coverArt5');


	//////////////////////////////////////////// 


	setTimeout(function () {


		console.log("READY SONG DATA");
		console.log(newSongDataArray);





		name1.innerHTML = newSongDataArray[0].songName;
		artist1.innerHTML = newSongDataArray[0].artistName;
		cover1.src = newSongDataArray[0].cover;

		name2.innerHTML = newSongDataArray[1].songName;
		artist2.innerHTML = newSongDataArray[1].artistName;
		cover2.src = newSongDataArray[1].cover;


		name3.innerHTML = newSongDataArray[2].songName;
		artist3.innerHTML = newSongDataArray[2].artistName;
		cover3.src = newSongDataArray[2].cover;


		name4.innerHTML = newSongDataArray[3].songName;
		artist4.innerHTML = newSongDataArray[3].artistName;
		cover4.src = newSongDataArray[3].cover;


		name5.innerHTML = newSongDataArray[4].songName;
		artist5.innerHTML = newSongDataArray[4].artistName;
		cover5.src = newSongDataArray[4].cover;


		////////////////////////////////////


	}, 1000);

	///////////////////////////////////////////////

}

function saveNewFiveURL(url) {

	if (newCoversArray) {
		newCoversArray.push(url);
	}

	else if (typeof newCoversArray == "undefined") {
		newCoversArray = [url];
	}

}


// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// // CREATE ACCOUNT JS
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// HAVE NOT VERIFIED WORKING 


function checkUsername() {

	var inputPublicName = loginForm.inputPublicName.value;
	var inputUsername = loginForm.inputUsername.value;
	var inputEmail = loginForm.inputEmail.value;
	var inputPassword = loginForm.inputPassword.value;
	var inputConfirmPassword = loginForm.inputConfirmPassword.value;


	// check username availibility 

	if (inputUsername.length > 0) {

		// username typed 
		var usernameRef = firebase.database().ref("users/");

		usernameRef.once("value")
			.then(function (snapshot) {
				if (snapshot.child(inputUsername).exists()) {
					alert("Username is taken");
				}
				else {
					console.log("username NOT is taken");
					if (inputPassword.length > 5 && inputPassword == inputConfirmPassword) {
						// password is longer than 5 and matches confirm

						createAccount(inputEmail, inputPassword, inputUsername, inputPublicName);
					}
					else {
						alert("Passwords DO NOT match");
					}
				}
			});
	} // end username typed  



} // end checkCreate()

function createAccount(goodEmail, goodPassword, goodUsername, goodPublicName) {
	console.log("about to create");
	firebase.auth().createUserWithEmailAndPassword(goodEmail, goodPassword).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// [START_EXCLUDE]
		if (errorCode == 'auth/weak-password') {
			alert('The password is too weak.');
		} else {
			alert(errorMessage);
		}
		console.log(error);
		// [END_EXCLUDE]
	});

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			console.log("user was created");
			console.log(user.uid);
			writeUserData(goodUsername, goodEmail, user.uid, goodPublicName);

			var user = firebase.auth().currentUser;

			user.updateProfile({
				displayName: goodUsername
			}).then(function () {
				window.open("myProfile.html", "_self");
				// Update successful.
			}, function (error) {
				// An error happened.
			});
			// user now created and logged in:


		} else {
			// No user is signed in.
			console.log("user was NOT created");
		}
	});


} // end good Create Account


function writeUserData(username, email, uid, name) {
	firebase.database().ref('users/' + username + '/details').set({
		username: username,
		email: email,
		userID: uid,
		publicName: name
	})
	firebase.database().ref('users/' + username + '/details/following/disco').set("disco");
}




////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// FEED JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function getFeed() {

	console.log("user is following:");
	console.log(followingArray);
	console.log("user follows:");
	console.log(followersArray);


	for (i = 0; i < followingArray.length; i++) {
		getPostFor(followingArray[i]);
	}
}


function getNewReleases() {

	var recentPostsRef = firebase.database().ref('songs').limitToLast(5);

	recentPostsRef.on('child_added', function (data) {
		saveNewReleases(data.key);
	});
}

function saveNewReleases(newSongID) {


	if (newReleasesArray) {
		newReleasesArray.push(newSongID);
	}

	else if (typeof newReleasesArray == "undefined") {
		newReleasesArray = [newSongID];
	}

	// creates and saves array in newReleasesArray

}


function getPostFor(username) {

	var postsRef = firebase.database().ref('/users/' + username + '/posts/singles').limitToLast(5);

	postsRef.once('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			// key list
			var songID = childSnapshot.key;
			// value list = timestamp
			var songTimestamp = childSnapshot.val();

			// bigger number is newer 

			var songStamp = {
				songID: songID,
				timestamp: songTimestamp
			}


			addSongToFeed(songStamp);




			// ...
		});
	});

}


function getDataForSong(songID) {

	firebase.database().ref('/songs/' + songID).once('value').then(function (snapshot) {
		var username = snapshot.val().creator.username;
		var artistName = snapshot.val().creator.publicName;
		var songName = snapshot.val().name;
		var coverURL = snapshot.val().cover;
		var timestamp = snapshot.val().timestamp;

		var songData = {
			username: username,
			artistName: artistName,
			songName: songName,
			coverURL: coverURL,
			songID: songID,
			timestamp: timestamp
		};

		saveSongData(songData);

	});

}

function saveSongData(songPreview) {

	if (songDataArray) {
		songDataArray.push(songPreview);
	}

	else if (typeof songDataArray == "undefined") {
		songDataArray = [songPreview];
	}

}


function addSongToFeed(songStamp) {

	var incomingStamp = songStamp.timestamp;


	console.log("incoming stamp is:");
	console.log(songStamp);

	if (userFeedTimestampsArray) {

		userFeedTimestampsArray.push(songStamp);
	}
	else if (typeof userFeedTimestampsArray == "undefined") {
		userFeedTimestampsArray = [songStamp];
	}

}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// UPLOAD JS
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////



function startCoverUpload() {
	document.getElementById('coverFile').click();
}

function handleCoverSelect(input) {

	if (input.files && input.files[0]) {
		console.log("file exists");
		readyCoverFile = input.files[0];

		// change cover in HTML
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#coverArt')
				.attr('src', e.target.result);
		};
		reader.readAsDataURL(readyCoverFile);
	}

}

function startSongUpload() {
	document.getElementById('songFile').click();
}

function handleSongSelect(input) {
	if (input.files && input.files[0]) {
		console.log("file exists");
		readySongFile = input.files[0];

		$('#songChosen').css('display', 'inline-block');


	}

}


function publish() {


	// NEED TO DO PUBLISH PREREQUIESETES


	var uploadTimestamp = Math.floor(Date.now() / 1000);

	var songsRef = firebase.database().ref('songs/');
	var postsRef = firebase.database().ref('posts/');
	var userPostsRef = firebase.database().ref('users/posts');

	var newSongRef = songsRef.push();
	var newPostRef = postsRef.push();

	var songID = newSongRef.key;
	var postID = newPostRef.key;


	var songStorageRef = storageRef.child('songs/' + songID);
	var coverStorageRef = storageRef.child('covers/' + songID);


	///////// publish to user/posts
	// post ID : timeline
	firebase.database().ref('users/' + savedCreator.username + '/posts/' + postID).set(uploadTimestamp);


	//////// publish to songs/
	// create song 
	var songDetails = createSong(uploadTimestamp, songID);
	// publish song
	if (songDetails != false) {
		newSongRef.set(songDetails);
	}


	///////// publish to posts/
	// create post
	var postDetails = createPost(uploadTimestamp, songID);
	// publish post
	newPostRef.set(postDetails);


	////////// upload files to storage
	// song upload
	var uploadSongTask = songStorageRef.put(readySongFile);
	// UPLOADING SONG TASK
	uploadSongTask.on('state_changed', function (snapshot) {
		var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

		progressDiv.style.display = 'block'
		uploadProgress.style.width = progress + "%";
		uploadProgress.innerHTML = (progress.toFixed(0) + "%");

		console.log(progress + "% DONE");

	}, function (error) {
		// Handle unsuccessful upload
	}, function () {
		// Handle successful upload on complete
		if (readyCoverFile != 0) {
			//cover exists
			var uploadCoverTask = coverStorageRef.put(readyCoverFile);

			uploadCoverTask.on('state_changed', function (snapshot) {
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

				progressDiv.style.display = 'block'
				uploadProgress.style.width = progress + "%";
				uploadProgress.innerHTML = (progress.toFixed(0) + "%");

				console.log(progress + "% DONE");

			}, function (error) {
				// Handle unsuccessful upload
			}, function () {
				// Handle successful upload on complete
				var downloadURL = uploadCoverTask.snapshot.downloadURL;

				newSongRef.child('cover').set(downloadURL);

				console.log("DONE WITH EVERYTHING!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				window.open("index.html", "_self");



			}); // DONE with all Uploads


		}

	}); // DONE with all Uploads

}

function createSong(uploadTimestamp, songID) {

	var inputSongName = document.getElementById('inputSongName').value;
	var inputExplicit = document.getElementById('inputExplicit').checked;



	// song file is there
	if (inputSongName.length > 0) {

		// name is longer than 1 character

		var songPost = {
			name: inputSongName,
			creator: savedCreator,
			timestamp: uploadTimestamp,
			explicit: inputExplicit,
			vibes: myVibesArray,
			features: myFeaturesArray
		};

		console.log("PUBLISHING SONG: ");
		console.log(songPost);
		return songPost;

	}


	else {
		// no name written
	}
}

function createPost(uploadTimestamp, songID) {

	var inputCaption = document.getElementById('inputCaption').value;

	// Determine post type



	var postDetails = {

		type: "songs",
		timestamp: uploadTimestamp,
		caption: inputCaption,
		creator: savedCreator,
		ID: songID
	}

	console.log("PUBLISHING POST: ");
	console.log(postDetails);
	return postDetails;


}


function nextPost() {



	var cell = '<div class="row">';
	cell += '<h1>';
	cell += newSongDataArray[0].songName;
	cell += '</h1>';
	cell += '<h3>';
	cell += newSongDataArray[0].artistName;
	cell += '</h3>';
	cell += '</div>';

	return cell;


	// var post = '<li>';
	// post += '<h1>';
	// post += "NEXT POST HERE";
	// post += '</h1>';
	// post += '</li>';

	// return post;

	// var post = '<li>';
	// post += '<article>';
	// post += '<header><h1>Random Article!</h1></header>';
	// post += paragraphs.join('');
	// post += '</article>';
	// post += '</li>';

	// 	return post;

	// TRY HERE 

}



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// START HERE
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

tryLogin();
getNewReleases();
getVibes();
