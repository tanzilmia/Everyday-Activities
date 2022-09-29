import React from 'react';
import './TotalTime.css'

const TotalTime = ({count,countbreak}) => {
    
    return (
        <div className='times'>
            <h2>Total Time</h2>
            <div className="totaltime">
                <span className='activities_time'>Activitis Time</span>
                <span> {count} Minutes </span>
            </div>
            
            <div className="totaltime">
                <span className='activities_time'>Break Time</span>
                <span> {countbreak}  Minutes </span>
            </div>
            
        </div>
    );
};

export default TotalTime;