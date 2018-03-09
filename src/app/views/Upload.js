import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";

var rawCover;

function showAlbum() {

    document.getElementById("albumDiv").classList.remove('d-none');

}


function chooseCover() {
    document.getElementById("inputCover").click();
}
function chooseSong() {
    document.getElementById("inputSong").click();
}

function handleProfile() {

    var preview = document.getElementById("previewCover");
    var file = document.getElementById("inputCover").files[0];
    var reader = new FileReader();


    // set file

    rawCover = file;

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


export class Upload extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <h3>Caption</h3>
                <input type="text" className="form-control dark my-3 py-3" maxLength="100" placeholder="100 Charater Limit" />

                <h3 >Music </h3>

                <div className="row ">
                    <div className="col-4">

                        <div className="w-100">
                            <img id="previewCover" onClick={chooseCover} src="images/coverArt.png" className="dark uploadCover" />
                            <input className="d-none" type="file" accept="image/*" id="inputCover" onChange={handleProfile} />

                        </div>

                    </div>

                    <div className="col-8 pt-1">
                        <input type="text" className="form-control dark py-3" maxLength="50" placeholder="Song Name" />


                        <div className="input-group mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control dark " placeholder="Featuring" />


                        </div>
                        <h5 id="featuresList" className="my-3">  </h5>


                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text pl-3" id="basic-addon1">#</span>
                            </div>
                            <input type="text" className="form-control dark" placeholder="Vibes (5 Max)" />

                        </div>


                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>






                        <br />
                        <button className="btn btn-outline-success my-3"> + Song File <span className="oi oi-check pl-2" title="check"></span></button>

                        <br />


                        <div className="text-right">
                            <button className="btn btn-light" onClick={showAlbum}> + Add Another Song</button>

                        </div>




                    </div>

                    <div id="albumDiv" className="container pt-3 mt-3 d-none" >

                        <div>
                            <input type="text" className="form-control dark py-4" placeholder="Album Name" />

                        </div>

                        <div>

                            <table className="table dark">

                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>







                    </div>

                    <div className="container-fluid text-right my-5 ">

                        <h6 id="uploadError" className="text-danger">Error Here</h6>
                        <button className="btn btn-warning "> Publish <span className="oi oi-cloud-upload" title="cloud-upload"></span></button>

                    </div>




                </div>


            </div>

        );
    }
}
