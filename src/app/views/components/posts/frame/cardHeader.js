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
                        <a className="white" href=""><h6>@Username</h6></a>

                    </div>
                    <div className="col text-right">
                        <div className="dropdown show">
                            <a className="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="oi oi-ellipses pr-2" title="ellipses"></span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Send</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>


                    </div>
                </div>

                <h6 className="gray pt-2 text-center">Caption Over Here</h6>

            </div>

        );
    }
}
