import React from 'react'


function TopHeading(props) {
  return (
    <>
    <div className={`bg-${props.changeTheme} `}>  
    <h1 className=" animate__animated animate__backInRight text-center"
    style={{fontFamily: 'Uncial Antiqua',fontSize: '50px', textShadow: '2px 2px 8px red',color:'red', }}>
    NETFLIX
   </h1>
   </div>
   
    </>
  )
}

export default TopHeading