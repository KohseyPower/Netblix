import React from 'react';
import "./Profile.css";

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-options">
                <div className="upper-profile">
                    <h2>Account</h2>
                    <h2>Help Center</h2>
                </div>
                <div className="lower-profile">
                    <h2>Sign out of Netblix</h2>
                </div>
            </div>
        </div>
    )
}

export default Profile