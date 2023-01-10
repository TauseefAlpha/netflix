import React from 'react'

function Topheader() {
    return (
        <>
            <div class="container-fluid p-2  mb-3" style={{backgroundColor: 'grey'}}>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-3 text-center" style={{color:'white',fontSize:'20'}}> <span style={{fontSize:'30', fontWeight:'bolder',color:'red'}}>PHONE:</span>0314-5976605</div>
                        <div class="col-md-3 text-center" style={{fontSize:'20'}}><span style={{fontSize:'30', fontWeight:'bolder',borderRight:'3px solid red', color:'red',paddingRight:'3px'}}>EMAIL</span> ahmedtausef98@gamil.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheader