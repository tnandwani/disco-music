import React from "react";
import PropTypes from 'prop-types';
import { browserHistory } from "react-router";


export class Upload extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <h3>Caption</h3>
                <input type="text" className="form-control dark my-3 py-3"  maxLength="100" placeholder="100 Charater Limit" />

                <h3 >Music </h3>

                <div className="row my-">
                    <div className="col-sm-4">
                        <img src="images/coverArt.png" className="w-100 dark" />
                    </div>

                    <div className="col-sm-8 pt-1">
                        <input type="text" className="form-control dark py-3" placeholder="Song Name" />


                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control dark " placeholder="Featuring" />

                        </div>


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
                            <button className="btn btn-light"> + Add Another Song</button>

                        </div>




                    </div>

                    <div className="container pt-4 mt-4" >

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

                    <div className="container text-right mt-3 ">
                        <button className="btn btn-warning "> Publish <span className="oi oi-cloud-upload" title="cloud-upload"></span></button>

                    </div>




                </div>


            </div>

        );
    }
}
