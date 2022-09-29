
import React from 'react';
import userimg from '../logo/user.png'
import './ProfileInfo.css'
const ProfileInfo = () => {
    return (
        <div className='user_wrapping'>
            <div className='user_names'>
                <img src= {userimg} alt="" />
                <div>
                    <h4>Rayanda Mico</h4>
                    <p>Toronto,Canada</p>
                </div>
            </div>

            <div className='info'>
                <div className='sort_info'>
                    <h2>70 <span>Kg</span> </h2>
                    <p>Weight</p>
                </div>
                <div className='sort_info'>
                    <h2>24 <span>Yrs</span> </h2>
                    <p>Age</p>
                </div>
                <div className='sort_info'>
                    <h2>6.5 <span></span> </h2>
                    <p>Height</p>
                </div>
            </div>  

        </div>
    );
};

export default ProfileInfo;