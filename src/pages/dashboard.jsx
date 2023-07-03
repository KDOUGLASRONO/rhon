import React, {useEffect, useState} from 'react'
import Header from '../dashboardComponents/header';
import LeftSideBar from '../dashboardComponents/leftSideBar';
import Main from '../dashboardComponents/main';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { MdYard } from 'react-icons/md';
import baseUrl from '../baseUrl';

const dashboard = ({session, setSession}) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  

  useEffect(()=>{
    const mySession = JSON.parse(sessionStorage.getItem('session'));
    if(mySession === null){

      navigate('/', {replace: true});
    }else{
      navigate('/dashboard/Details');
      // get user data
      fetch(`${baseUrl}/merchant-analytics/${mySession._id}`)
        .then(res => res.json())
        .then(res => {
          console.log("dashboard: ", res)
          setUserInfo(res);
        })
    }
  }, [])

  const [activePage, setActivePage] = useState('Details');


  const handleActivePage = (page)=>{
    navigate(`/dashboard/${page}`);
  }
  
  return (
    <div className='h-screen bg-inherit w-full'>
      <Header userInfo={userInfo} session={session} setSession={setSession}/>
      <section className='flex-cols-1 md:flex flex-row-reverse h-4/5 w-full'>
        <div className='md:h-full md:w-9/12 h-4/5 '>
          <Main userInfo={userInfo}/>
        </div>
        <div className='bg-violet-100 md:h-full mb-0 h-1/5 md:w-3/12'>
          <LeftSideBar handleActivePage={handleActivePage} activePage={activePage} setActivePage={setActivePage}/>
        </div>
      </section>
      <div className="h-fit md:block">
        <Footer/>
      </div>
    </div>
  )
}

export default dashboard