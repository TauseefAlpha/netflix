import React from 'react'
import ListComp from './ListComp'

function Threeicon(props) {

let t=props.changeTheme
  let v=props.toggleBtn;
  console.log("v",v)
  console.log("t",t)
  return (
    <>
              <div class="container-fluid">
              <div class="row mt-4 justify-content-around">
               <ListComp imgs='./img/icon/setrm.png' Title='Setting'chahgetext={t} changeCol={v}/>
               <ListComp imgs='./img/icon/cloudrm.png' Title='Cloud'chahgetext={t} changeCol={v}/>
               <ListComp imgs='./img/icon/listrm.png' Title='LIstView'chahgetext={t} changeCol={v}/>
              </div>
            </div>
    </>
  )
}

export default Threeicon