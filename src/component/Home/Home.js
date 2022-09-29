import React,{useState,useEffect} from 'react';
import ActivityCart from '../ActivityCart/ActivityCart';
import AddBreak from '../addBreak/AddBreak';
import TotalTime from '../ExeciseDetails/TotalTime';
import Navbar from '../Navbar/Navbar';
import ProfileInfo from '../profile-info/ProfileInfo';
import Qna from '../QNA/Qna';
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

    let time;
    let breaktime = (time) =>{
        localStorage.setItem('breaktime',JSON.stringify(time))
        setcountbreak(time)
    }

    useEffect(() => {
      let localstorageData = localStorage.getItem('breaktime',JSON.stringify(time))
      if(localstorageData){
        setcountbreak(localstorageData)
      }
      
    }, [time])
    


    return (
        <div className='home_container'>

            <div className='activitites_container'>
                {/* navbar */}
                <Navbar></Navbar>
                <div className='activities_wrapping'>
                    {/* all activities cart */}
                    {
                        activities.map(activity => <ActivityCart addTime = {addTime} key = {activity.id} activity = {activity}></ActivityCart>)
                    }
                    
                </div>

                {/* question and answer */}

                    <Qna></Qna>
                
            </div>
                {/* dashboard section  */}
            <div className='dashboard_container'>
                <ProfileInfo></ProfileInfo>
                <AddBreak breaktime = {breaktime} ></AddBreak>
                <TotalTime countbreak = {countbreak} count = {count}></TotalTime>
                <button className='complete_btn'> Activity Complete </button>
            </div>
        </div>
    );
};

export default Home;