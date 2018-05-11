import React from "react";
import PropTypes from 'prop-types';


import { Player } from "./components/Player";
import { Leftbar } from "./components/Leftbar";
import { Rightbar } from "./components/Rightbar";
import { Header } from "./components/Header";

import { CreateAccount } from "./components/popups/CreateAccount";
import { SignIn } from "./components/popups/SignIn";
import { Suggestions } from "./components/popups/Suggestions";
import { Followers } from "./components/popups/Followers";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// CLASS
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

export class Root extends React.Component {

	render() {

		return (

			<div>



				<div className="row">

					<div className="col-2 dark d-none d-lg-block">
						<Leftbar />

					</div>

					<div className="col">


						<div className="container-fluid">

							{this.props.children}
							<CreateAccount />
							<SignIn />
							<Suggestions />
							<Followers />





						</div>

					</div>

					<div className="col-2 dark d-none d-lg-block">
						<Rightbar />
					</div>


				</div>

				<div className="layoutFooter dark">
					<Player />
				</div>


			</div>





		);
	}
}
