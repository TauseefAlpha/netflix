import React,{useState} from 'react'
import AboutComponents from './AboutComponents'
import BottomFooter from './BottomFooter'
import GallaryImgComp from './GallaryImgComp'
import Habitate from './Habitate'
import ListGallay from './ListGallay'
import Navbar from './Navbar'
import Slider from './Slider'
import Threeicon from './Threeicon'
import Topheader from './Topheader'
import TopHeading from './TopHeading'
import TotalSeason from './TotalSeason'

function Home() {
  const [mode, setmode] = useState('dark')
  // // const[textn,setTextn]=useState('lightmode')
  function handelTheme() {
    console.log("handelTheme clicked")
    if (mode === 'dark') {
      setmode('light')
      // setTextn('darkmode')
    }
    else {
      setmode('dark')
      // setTextn('lightmode')
    }

  }

  return (
    // className='bg-dark'
    <div className={`bg-${mode}`} >
       <Topheader className={`'bg-${mode}'`}/>
       <TopHeading  changeTheme={mode}/>
      <Navbar changeTheme={mode} toggleBtn={handelTheme}/>
      <Slider/>
      <AboutComponents/>
      <TotalSeason/>
      <Habitate changeTheme={mode} toggleBtn={handelTheme}/>
      <Threeicon changeTheme={mode} toggleBtn={handelTheme}/>
      <ListGallay/>
      <BottomFooter/> 
      
    </div>
  )
}

export default Home
