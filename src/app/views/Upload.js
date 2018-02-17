import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


export class Upload extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div className="container" >
                <h3>Caption</h3>
                <input type="text" className="form-control theme my-3" placeholder="100 Charater Limit" />

                <h3 >Music </h3>

                <div className="row my-">
                    <div className="col-sm-4">
                        <img src="images/coverArt.png" className="fillCover" />
                    </div>

                    <div className="col-sm-8 pt-1">
                        <input type="text" className="form-control theme py-3" placeholder="Song Name" />


                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control theme" placeholder="Featuring" />

                        </div>


                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text pl-3" id="basic-addon1">#</span>
                            </div>
                            <input type="text" className="form-control theme" placeholder="Vibes (5 Max)" />

                        </div>

                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>
                        <button className="btn px-3 mr-2"></button>

               

                        <br />
                        <button className="btn btn-outline-success my-3"> + Song File <span className="oi oi-check" title="check"></span></button>

                        <button className="btn btn-outline-success mx-3">+  Lyrics File <span className="oi oi-check" title="check"></span></button>

                        <br />


                        <div className="rightAlign">
                            <button className="btn btn-light"> + Add Next Song</button>
                            <button className="btn btn-warning mx-3"> Publish <span className="oi oi-cloud-upload" title="cloud-upload"></span></button>

                        </div>




                    </div>

                </div>


                <div className="mt-5">

                    <input type="text" className="form-control theme py-3 mr-5 mb-3" placeholder="Album Name" />

                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Song</th>
                                <th scope="col">@Features</th>
                                <th scope="col">#Vibes</th>
                                <th scope="col">Lyrics</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Fun House</td>
                                <td>@Otto</td>
                                <td>#mdo, #driving, #rap </td>
                                <td>
                                    <span className="oi oi-check" title="check"></span>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Gold</td>
                                <td>@Thornton</td>
                                <td>#fat, #bass</td>
                                <td>
                                    <span className="oi oi-check" title="check"></span>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Ice</td>
                                <td>@theBird</td>
                                <td>#pop</td>
                                <td>
                                    <span className="oi oi-check" title="check"></span>
                                </td>

                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>

        );
    }
}
