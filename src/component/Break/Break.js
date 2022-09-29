import React from 'react';
import './Break.css'
const Break = ({time}) => {
    return (
        <div className='breaksingle'>
            <button className='braktime_div'> {time} Min </button>
        </div>
    );
};

export default Break;