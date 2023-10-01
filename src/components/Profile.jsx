import React from 'react';
import "./Profile.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Profile() {
    const user = useSelector(selectUser);
    return (
        <div className="profile-container">
            <div className="profile-options">
                <div className="upper-profile">
                    <h2 class="option">Account</h2>
                    <h2 class="option">Help Center</h2>
                </div>
                <div className="lower-profile">
                    <h2 class="option"><a href={null} onClick={() => auth.signOut()}>Sign out of Netblix</a></h2>
                </div> 
            </div>
        </div>
    )
}

export default Profile