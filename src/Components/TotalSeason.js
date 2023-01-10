import React from 'react'
import CardComponent from './CardComponent'
import CardHeading from './CardHeading'
import Datas from './Datas'

function TotalSeason() {
  return (
    <>

      <div className="row mt-4 mx-2 justify-content-around"  >
      <CardHeading />
        {Datas.map((val) => {
          return (
          <CardComponent
          key={val.id}
          imgs={val.imgs} 
          title={val.title}
          rating={val.rating}
          hrefli={val.hrefli}
          />
           )
        })
        }

      </div>

    </>
  )
}

export default TotalSeason
