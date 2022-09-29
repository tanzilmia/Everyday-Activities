import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna'>
            <div>
                <h3>how does react work ?</h3>
                <p> <strong>Ans :</strong> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>
            <div>
                <h3>what is deffarace between props and state ?</h3>
                <p> <strong>Ans :</strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
            </div>
            <div>
                <h3>type of uses useEffect without fetch data in react ?</h3>
                <p> <strong>Ans :</strong> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: <strong>fetching data</strong> , <strong> directly updating the DOM</strong> , and  <strong>timers</strong> . useEffect accepts two arguments. The second argument is optional. </p>
            </div>
        </div>
    );
};

export default Qna;