import React from "react";
import PropTypes from 'prop-types';


export class UserBlock extends React.Component {

    render() {
        return (

            <div className=" container dark mb-2">
                <div className="profile-grid">
                    <div className="profileImage text-center">
                        <img src="images/profile.png" className="rounded-circle profileCircle" />
                    </div>
                    <div className="profileTags"><span className="badge badge-warning">{inUser.verified}</span>

                    </div>
                    <div className="profileInfo mt-4">
                        <h1> {inUser.publicName}</h1>
                        <h2 className="gold"> <i> @{inUser.username} </i> </h2>
                        <h5 ><span className="oi oi-location postIcons pr-2" title="location"></span> Location</h5>


                    </div>
                    <div className="profileFollow mr-4">

                        <h2 className="gold">Followers</h2>
                        <h3>{inUser.followers.length}</h3>
                        <h2 className="gold">Following</h2>
                        <h3>{inUser.following.length}</h3>

                        <button type="button" className="btn btn-outline-secondary mt-2 px-4" onClick={signOut} > Logout</button>

                    </div>

                </div>

            </div>

        );
    }
}
