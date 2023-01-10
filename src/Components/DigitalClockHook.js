import React,{useState} from 'react'


function DigitalClockHook() {
    
    let d=new Date().toLocaleTimeString()
    const [time,setTime]=useState(d)

    const  UpDateTime=()=>{
       d=new Date().toLocaleTimeString()
         setTime(d)
        console.log('ClickTime')
       
      }
      setInterval(UpDateTime,1000)
    
  return (
    <>
    <h2 style={{color:'red',fontFamily: '"Trirong", serif'}}>{time}</h2>
   </>
  )
}

export default DigitalClockHook