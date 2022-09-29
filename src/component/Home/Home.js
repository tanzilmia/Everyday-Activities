import React,{useState,useEffect} from 'react';
import ActivityCart from '../ActivityCart/ActivityCart';
import AddBreak from '../addBreak/AddBreak';
import Navbar from '../Navbar/Navbar';
import ProfileInfo from '../profile-info/ProfileInfo';
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

            <div className='dashboard_container'>
                <ProfileInfo></ProfileInfo>
                <AddBreak></AddBreak>
                
            </div>
        </div>
    );
};

export default Home;