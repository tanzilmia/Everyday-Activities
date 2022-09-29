import React from 'react';
import './ActivityCart.css'
const ActivityCart = ({activity}) => {
    console.log(activity);
    let {title,details,img,timeRequred} = activity
    let newDetils = details.slice(0,80)
    return (
        <div className='activity_cart'>
            <img src= {img} alt="" />
            <p className='title'> {title} </p>
            <p className='details'> {newDetils} ... </p>
            <p> <span className='time_required'>Time Required :</span> <span className='time'>{timeRequred} Minutes</span> </p>
            <button className='btn'>Add Times</button>
        </div>
    );
};

export default ActivityCart;