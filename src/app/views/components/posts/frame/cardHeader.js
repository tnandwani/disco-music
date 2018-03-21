import React from "react";
import PropTypes from 'prop-types';



export class CardHeader extends React.Component {

    render() {
        return (
            <div className="card-header p-2 text-center">

                <div className="row">
                    <div className="col">
                        {/* <span className="oi oi-fire pl-2" title="fire"></span> */}

                    </div>
                    <div className="col">
                        <a className="text-white" href=""><h6>@Username</h6></a>

                    </div>
                    <div className="col text-right">
                        <div className="dropdown show">
                            <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="oi oi-ellipses pr-2" title="ellipses"></span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Send</a>
                                <a className="dropdown-item" href="#">Play Next</a>
                                <a className="dropdown-item" href="#">Add to Queue</a>
                                <a className="dropdown-item" href="#">Report</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>


                    </div>
                </div>

                <h6 className="gray pt-2 text-center "> <i>Caption Over Here (100 Characters Max)</i> </h6>

            </div>

        );
    }
}
