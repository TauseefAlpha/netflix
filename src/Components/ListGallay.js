import React from 'react'
import GallaryApi from './GallaryApi'
import GallaryImgComp from './GallaryImgComp'


function ListGallay() {
  return (
    <>

      <div class="container">

        <div class="row mt-5 mb-5  justify-content-around ">
          {
            GallaryApi.map((vale) => {
              console.log()

              return (
                <GallaryImgComp
                  key={vale.id}
                  imgsd={vale.imgs}
                />
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default ListGallay