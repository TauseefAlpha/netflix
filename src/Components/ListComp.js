import React from 'react'

function ListComp(props) {
    console.log('threeicon',props.chahgetext)
    // console.log(props)
    
    return (
        <>

            <div class="col-md-3">

                <img src={props.imgs}
                    style={{width:'80%',height:'220px', padding:'10px'}} alt="" />
                <h3 class= {` text-center ${props.chahgetext==='dark'?'text-light':'text-dark'}`}>{props.Title}</h3>
                <p className={`${props.chahgetext==='dark'?'text-light':'text-dark'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta alias, minima
                    expedita rerum
                    labore officia! Quae aliquid incidunt dolorem!
                </p>

            </div>

        </>
    )
}

export default ListComp