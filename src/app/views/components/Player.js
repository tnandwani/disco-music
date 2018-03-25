import React from "react";
import PropTypes from 'prop-types';



// Controllers
function togglePlay() {

    var audioPlayer = document.getElementById("audioPlayer");

    if (document.getElementById("playButton").classList.contains("oi-media-play")) {
        // is playing 
        console.log("is playing");
        document.getElementById("playButton").classList.remove('oi-media-play');
        document.getElementById("playButton").classList.add('oi-media-pause');

        audioPlayer.play();


    }
    else {
        // is paused
        console.log("is paused");
        document.getElementById("playButton").classList.remove('oi-media-pause');
        document.getElementById("playButton").classList.add('oi-media-play');
        audioPlayer.pause();

    }


    // TEST SHIT HERE

}
function toggleLoop() {

    var loopRef = firebase.database().ref('users/' + inUser.username + '/player/controls/loop');

    if (document.getElementById("loopButton").classList.contains("gray")) {
        // is  
        document.getElementById("loopButton").classList.remove('gray');
        document.getElementById("loopButton").classList.add('gold');
        loopRef.set(true);



    }
    else {
        // is not
        document.getElementById("loopButton").classList.remove('gold');
        document.getElementById("loopButton").classList.add('gray');
        loopRef.set(false);

    }
}
function toggleShuffle() {

    var shuffleRef = firebase.database().ref('users/' + inUser.username + '/player/controls/shuffle');

    if (document.getElementById("shuffleButton").classList.contains("gray")) {
        // is  
        document.getElementById("shuffleButton").classList.remove('gray');
        document.getElementById("shuffleButton").classList.add('gold');
        shuffleRef.set(true);



    }
    else {
        // is not
        document.getElementById("shuffleButton").classList.remove('gold');
        document.getElementById("shuffleButton").classList.add('gray');
        shuffleRef.set(false);

    }
}



export class Player extends React.Component {

    // load needed data here in constructor before passing
    constructor(props) {
        super(props);

        var placeholder = {
            name: "Song Name",
            artist: "Artist",
            featuring: false,
            vibes: "#Vibes",
            date: "Date",
            cover: "images/coverArt.png",
            explicit: false,
            likes: 0,
            shares: 0,
            saves: 0
        };
        this.state = {
            playing: placeholder,
            controls: {
                loop: false,
                play: false,
                shuffle: false
            }
        }

    }

    componentDidMount() {
        var playingRef = firebase.database().ref('users/' + inUser.username + '/player');

        playingRef.on('value', snapshot => {

            console.log("NOW PLAYING: " + snapshot.val().playing);

            var audioPlayer = document.getElementById("audioPlayer");

            audioPlayer.load();

            this.setState({
                playing: snapshot.val().playing,
                controls: snapshot.val().controls
            });


            if (snapshot.val().controls.loop == true) {
                document.getElementById("loopButton").classList.remove('gray');
                document.getElementById("loopButton").classList.add('gold');
            }

            else if (snapshot.val().controls.shuffle == true) {
                document.getElementById("shuffleButton").classList.remove('gray');
                document.getElementById("shuffleButton").classList.add('gold');
            }


            else if (snapshot.val().controls.loop == false) {
                document.getElementById("loopButton").classList.remove('gold');
                document.getElementById("loopButton").classList.add('gray');
            }

            else if (snapshot.val().controls.shuffle == false) {
                document.getElementById("shuffleButton").classList.remove('gold');
                document.getElementById("shuffleButton").classList.add('gray');
            }

        });
    }


    render() {
        return (
            <div className="footer-grid container-fluid text-center px-0 ten ">

                <div className="footerLeft">

                    <div className="float-left ten">

                        {/* <span className="oi oi-layers bigIcon px-3 gold" title="Queue"></span> */}
                        <img src={this.state.playing.cover} className="h-100" />



                    </div>
                    <div className="ml-5 float-right">

                        <div className="ml-5 mr-5">
                            <h4 > {this.state.playing.name}</h4>
                            <h5 className="gold"> {this.state.playing.artist}</h5>
                            <h6> <i>{this.state.playing.vibes}</i></h6>


                        </div>


                    </div>

                </div>

                <div className="footerCenter">
                    <div className="pt-4 gold">
                        <span id="loopButton" onClick={toggleLoop} className="oi oi-reload bigIcon px-3 gray" title="Loop"></span>
                        <span id="backButton" className="oi oi-media-skip-backward controlIcon px-5" title="Back"></span>
                        <span id="playButton" onClick={togglePlay} className="oi oi-media-play controlIcon px-2" title="Play"></span>
                        <span id="nextButton" className="oi oi-media-skip-forward controlIcon px-5" title="Next"></span>
                        <span id="shuffleButton" onClick={toggleShuffle} className="oi oi-random bigIcon pl-3 gray" title="Shuffle"></span>
                    </div>
                </div>

                <div className="footerRight mt-3 px-0 mx-0">

                    <div className="pt-3 text-muted">
                        <span className="oi oi-share footerIcon px-3" title="Send"></span>
                        <span className="oi oi-fire footerIcon px-3" title="Share"></span>
                        <span className="oi oi-heart footerIcon px-3" title="Like"></span>
                        <span className="oi oi-plus footerIcon px-3" title="Add"></span>
                        <span className="oi oi-volume-high footerIcon pl-3" title="Volume"></span>



                    </div>




                </div>


                <audio id="audioPlayer">

                    <source src={this.state.playing.song} />

                </audio>




            </div>


        );
    }
}
