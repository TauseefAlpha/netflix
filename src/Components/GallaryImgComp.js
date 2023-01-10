import React from 'react'

function GallaryImgComp(props) {
    return (
        <>
            <div class="col-md-5 col-lg-4 pe-1 mb-2"><img src={props.imgsd}
                style={{ width: '100%', height: '360px', borderRadius: '10%', border: '2px solid red' }}
                alt="/" />
            </div>

        </>
    )
}

export default GallaryImgComp