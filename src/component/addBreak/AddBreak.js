import React from 'react';
import Break from '../Break/Break';
import './AddBreak.css'
const AddBreak = ({breaktime}) => {
    return (
        <div className='brak_container'>
            <h2>Add A Break</h2>
            <div className='breaks'>
                <Break breaktime = {breaktime} time = {5} ></Break>
                <Break breaktime = {breaktime} time = {10} ></Break>
                <Break breaktime = {breaktime} time = {15} ></Break>
                <Break breaktime = {breaktime} time = {20} ></Break>
            </div>
        </div>
    );
};

export default AddBreak;