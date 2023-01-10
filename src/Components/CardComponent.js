import React from 'react'

const bt={
  border:'2px solid red',
  backgroundColor:'grey',
  color:'white'    
}


function CardComponent(props) {
  return (
      <>
        {/* col-md-4 */}
                <div className="col-md-5 col-lg-4 pe-1 mb-1 my-2 hvr-bounce-out"  >
                    <div className="card " id="cardd">
                        <div className="card-header">
                            <img src={props.imgs} alt="" style={{ height: '242px',border:'3px solid grey' }}
                                className="card-img-top h-5" />
                        </div>
                        <div className="card-body ">
                            <h3 className="card-title text-Dark" style={{ textAlign: 'center' }}>{props.title}</h3>
                            <p className="card -text p-1" >Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese.
                            </p>
                            <p id='price' className="card-text text-shadow"> <b>Rating:</b><span
                                className="text-success">{props.rating}</span>
                            </p>

                            <a href={props.hrefli} target='_blank' rel="noreferrer" className="btn btn-transparent" style={bt}>Watch Now</a>

                        </div>
                    </div>
                </div>

            



        </>
      
   
  )
}

export default CardComponent
