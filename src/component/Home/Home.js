import React,{useState,useEffect} from 'react';
import ActivityCart from '../ActivityCart/ActivityCart';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {

    const [activities, setactivities] = useState([])
    useEffect(() => {
      fetch('fakedata.json')
      .then(res => res.json())
      .then(data => setactivities(data))
    }, [])
    

    return (
        <div className='home_container'>

            <div className='activitites_container'>
                <Navbar></Navbar>
                <div className='activities_wrapping'>
                    {
                        activities.map(activity => <ActivityCart key = {activity.id} activity = {activity}></ActivityCart>)
                    }
                    
                </div>
                
            </div>

            <div className='profile_info'>
                <h2>Profile info</h2>
            </div>
        </div>
    );
};

export default Home;