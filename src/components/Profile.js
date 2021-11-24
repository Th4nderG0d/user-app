import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css'




const Profile = () => {
const [email]=useSelector((state )=>state.currentUser.email)
// const [username]=useSelector((state )=>state.currentUser.username)

    return (
        <div id="profile">
        
             <header >
        <h3 className="txt">
         Profile: <strong className="txt">Hi {email}</strong> 
         {/* <p>USername:{username}</p> */}
        </h3>
      </header>
     


        </div>
    )
}

export default Profile;
