import React,{useState,useEffect} from 'react';
import ActivityCart from '../ActivityCart/ActivityCart';
import AddBreak from '../addBreak/AddBreak';
import TotalTime from '../ExeciseDetails/TotalTime';
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

    const [count, setcount] = useState(0)
    const [countbreak, setcountbreak] = useState(0)
    
    
    let addTime = (provioustimme) =>{
        setcount(count + provioustimme)
    }
    let newbreak;
    let breaktime = (id) =>{
         newbreak = id
         console.log(newbreak)
        setcountbreak(newbreak)   
    }

    return (
        <div className='home_container'>

            <div className='activitites_container'>
                <Navbar></Navbar>
                <div className='activities_wrapping'>
                    {
                        activities.map(activity => <ActivityCart addTime = {addTime} key = {activity.id} activity = {activity}></ActivityCart>)
                    }
                    
                </div>
                
            </div>

            <div className='dashboard_container'>
                <ProfileInfo></ProfileInfo>
                <AddBreak breaktime = {breaktime} ></AddBreak>
                <TotalTime countbreak = {countbreak} count = {count}></TotalTime>
            </div>
        </div>
    );
};

export default Home;