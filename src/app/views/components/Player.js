import React from "react";
import PropTypes from 'prop-types';


// Controllers
function togglePlay() {

    var audioPlayer = document.getElementById("audioPlayer");

    if (document.getElementById("playButton").classList.contains("oi-media-play")) {
        // is playing 
        document.getElementById("playButton").classList.remove('oi-media-play');
        document.getElementById("playButton").classList.add('oi-media-pause');
        audioPlayer.play();
    }
    else {
        // is paused
        document.getElementById("playButton").classList.remove('oi-media-pause');
        document.getElementById("playButton").classList.add('oi-media-play');
        audioPlayer.pause();

    }


    // TEST SHIT HERE

}
function toggleLoop() {

    if (inUser.username != "username") {


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


}
function toggleShuffle() {

    if (inUser.username != "username") {


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

}

function timeConverter(time) {

    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var stamp = minutes + ":" + seconds;

    return stamp;
}


var duration = "0:00";
var currentTime = "0:00";

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
            },
            duration: duration,
            currentTime: currentTime
        }

        this.timeUpdate = this.timeUpdate.bind(this);


    }



    timeUpdate() {

        var total = audioPlayer.duration;
        var current = audioPlayer.currentTime;

        if (!total) {
            total = 0;
        }
        var playPercent = 100 * (current / total);


        // prgress bar
        var percentage = playPercent + "%";
        playhead.style.width = percentage;


        this.setState({
            duration: timeConverter(total),
            currentTime: timeConverter(current)
        });
    }

    clickPercent(event) {

        return (event.clientX - getPosition(timeline)) / timelineWidth;


    }
    getPosition(el) {
        return el.getBoundingClientRect().left;
    }

    componentDidMount() {

        var audioPlayer = document.getElementById("audioPlayer");
        var playhead = document.getElementById('playhead'); // playhead
        var timeline = document.getElementById('timeline'); // timeline

        var timelineWidth = timeline.offsetWidth;
        console.log("width:" + timelineWidth);



        timeline.addEventListener("click", function (event) {
            this.clickPercent(event)
        }, false);

        audioPlayer.addEventListener("timeupdate", this.timeUpdate, false);





        if (inUser.username != "username") {

            var playingRef = firebase.database().ref('users/' + inUser.username + '/player');

            playingRef.on('value', snapshot => {

                audioPlayer.load();

                this.setState({
                    playing: snapshot.val().playing,
                    controls: snapshot.val().controls
                });




                if (snapshot.val().controls.loop == true) {
                    document.getElementById("loopButton").classList.remove('gray');
                    document.getElementById("loopButton").classList.add('gold');
                    audioPlayer.loop = true;
                }

                else if (snapshot.val().controls.shuffle == true) {
                    document.getElementById("shuffleButton").classList.remove('gray');
                    document.getElementById("shuffleButton").classList.add('gold');
                }


                else if (snapshot.val().controls.loop == false) {
                    document.getElementById("loopButton").classList.remove('gold');
                    document.getElementById("loopButton").classList.add('gray');
                    audioPlayer.loop = false;

                }

                else if (snapshot.val().controls.shuffle == false) {
                    document.getElementById("shuffleButton").classList.remove('gold');
                    document.getElementById("shuffleButton").classList.add('gray');
                }

            });

        }

    }




    render() {
        return (
            <div className="footer-grid container-fluid text-center px-0 ten ">

                <div className="footerLeft">

                    <div className="float-left ten">

                        {/* <span className="oi oi-layers bigIcon px-3 gold" title="Queue"></span> */}
                        <img src={this.state.playing.cover} className="h-100" />



                    </div>
                    <div className="ml-5">

                        <div className="ml-5 mr-5 mt-1">
                            <h4 > {this.state.playing.name}</h4>
                            <h5 className="gold"> {this.state.playing.artist}</h5>
                            <h6> <i>{this.state.playing.vibes}</i></h6>
                        </div>


                    </div>

                </div>

                <div className="footerCenter w-100">

                    <div className="pt-3 pb-2 gold">
                        <span id="loopButton" onClick={toggleLoop} className="oi oi-reload bigIcon px-3 gray" title="Loop"></span>
                        <span id="backButton" className="oi oi-media-skip-backward controlIcon px-5" title="Back"></span>
                        <span id="playButton" onClick={togglePlay} className="oi oi-media-play controlIcon px-2" title="Play"></span>
                        <span id="nextButton" className="oi oi-media-skip-forward controlIcon px-5" title="Next"></span>
                        <span id="shuffleButton" onClick={toggleShuffle} className="oi oi-random bigIcon pl-3 gray" title="Shuffle"></span>
                    </div>


                    <div className="row">
                        <div className="col-1 ">
                            <p className="gray mb-3"> {this.state.currentTime}</p>

                        </div>
                        <div className="col-10">


                            <div id="timeline" className="timeline mt-2">
                                <div id="playhead" className="playhead"></div>
                            </div>
                        </div>
                        <div className="col-1">

                            <p className="gray mb-3"> {this.state.duration}</p>

                        </div>

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


                <audio controls id="audioPlayer" onCanPlayThrough={test}>

                    <source src={this.state.playing.song} />

                </audio>




            </div>


        );
    }
}
