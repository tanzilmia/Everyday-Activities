import React from 'react';
import './Break.css'
const Break = ({time,breaktime}) => {
    return (
        <div className='breaksingle'>
            <button onClick={()=>breaktime(time)} className='braktime_div'> {time} Min </button>
        </div>
    );
};

export default Break;