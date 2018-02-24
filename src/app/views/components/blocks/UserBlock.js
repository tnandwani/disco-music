import React from "react";
import PropTypes from 'prop-types';


export class UserBlock extends React.Component {

    render() {
        return (

            <div>

                <div className="row container p-3 text-center" >
                    <div className="col text-right" >
                        <img src="images/profile.png" className="rounded-circle profileCircle" />
                        

                    </div>
                    <div className="col p-3 ">
                        <h1 > {inUser.publicName}</h1>
                        <h1 className="gold py-3"> <i> @{inUser.username} </i> </h1>
                        <h5 ><span className="oi oi-location postIcons pr-2" title="location"></span> Location</h5>



                    </div>
                    <div className="col p-3">

                        <h2 className="white">Followers <small className="gold">{inUser.followers.length}</small> </h2>        
                        <h2 className="white py-3">Following <small className="gold">{inUser.following.length}</small> </h2>             

                        <button type="button" className="btn btn-outline-secondary mt-2 px-5" onClick={signOut} > Logout</button>



                    </div>
                </div>


            </div>

        );
    }
}


// <div className="profile-grid">
//                     <div className="profileImage text-center">
//                         <img src="images/profile.png" className="rounded-circle profileCircle" />
//                     </div>
//                     <div className="profileTags"><span className="badge badge-warning">{inUser.verified}</span>

//                     </div>
//                     <div className="profileInfo mt-4">
//                         <h1> {inUser.publicName}</h1>
//                         <h2 className="gold"> <i> @{inUser.username} </i> </h2>
//                         <h5 ><span className="oi oi-location postIcons pr-2" title="location"></span> Location</h5>


//                     </div>
//                     <div className="profileFollow mr-4">

//                         <h2 className="gold">Followers</h2>
//                         <h3>{inUser.followers.length}</h3>
//                         <h2 className="gold">Following</h2>
//                         <h3>{inUser.following.length}</h3>

//                         <button type="button" className="btn btn-outline-secondary mt-2 px-4" onClick={signOut} > Logout</button>

//                     </div>

//                 </div>