import React from 'react';
import Break from '../Break/Break';
import './AddBreak.css'
const AddBreak = () => {
    return (
        <div className='brak_container'>
            <h2>Add A Break</h2>
            <div className='breaks'>
                <Break time = {5} ></Break>
                <Break time = {10} ></Break>
                <Break time = {15} ></Break>
                <Break time = {20} ></Break>
            </div>
        </div>
    );
};

export default AddBreak;