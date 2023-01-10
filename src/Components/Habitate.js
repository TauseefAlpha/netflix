import React from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function Habitate(props) {
    return (
        // {`${props.changeTheme==='dark'?'text-light':'text-dark'}`}
        <div>
            <div class="container-fluid">
                <div class="row justify-content-around px-1"
                    style={{ borderTop: '4px solid red', borderBottom: '4px solid red' }}
                    id="gallary">
                    <div class="col-md-5  my-4">
                        <h4 className="text-start" style={{ fontSize: '30px', color: 'red' }}>Welcome To Netflix</h4>
                        <p className={`text-lg-start ${props.changeTheme==='dark'?'text-light':'text-dark'} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                            assumenda aspernaturerror quam sed dignissimos repudiandae sit in libero vel tenetur, nulla veritatis voluptatibus fugiat
                            quaerat.Nihilsint repudiandae neque eveniet, ratione labore vel. Amet sunt totam architecto ipsum,
                            recusandae officia, harum distinctio nihil sequi, soluta expedita voluptatibus veritatis ea.</p>
                        <p className={`text-lg-start ${props.changeTheme==='dark'?'text-light':'text-dark'} `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veniam eveniet at ex,
                            harum essedolores id corporis ipsam! Eligendi quae aperiam cum dolor eaque nisi doloremque,
                            reprehenderit,accusantium, architecto earum officia distinctio perferendis aliquid sequi animivoluptatibus
                            possimus quam! Voluptas distinctio ut excepturi assumenda vitae quod tenetur accusantium
                            temporibus?</p>
                    </div>

                    <div class="col-md-5 px-4 my-3">
                        <h5 style={{ color: 'red' }}> key feature</h5>
                        <p className={`text-lg-start ${props.changeTheme==='dark'?'text-light':'text-dark'} `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                            deserunt culpa
                            ipsam ipsum explicabo
                            earum laudantium in mollitia iusto pariatur, maxime rem laborum perspiciatis?</p>

                        <ul className='text-lg-start' style={{ lineHeight: '100%', listStyleType: 'none', paddingLeft: '0px' }}
                            class="text-white">
                            <li class=" nav-item "> <a class="nav-link text-secondary" href=""><DoneOutlineIcon style={{color:'green'}}/> ODER WOULD
                                LIKE TO DO IT</a> </li>
                
                                <li class=" nav-item "> <a class="nav-link text-secondary" href=""><DoneOutlineIcon style={{color:'green'}}/>ODER WOULD
                                LIKE TO DO IT</a> </li>

                            <li class=" nav-item "> <a class="nav-link text-secondary" href=""> <DoneOutlineIcon style={{color:'green'}}/>ODER WOULD
                                LIKE TO DO IT</a> </li>

                            <li class=" nav-item "> <a class="nav-link text-secondary" href=""><DoneOutlineIcon style={{color:'green'}}/>ODER WOULD
                                LIKE TO DO IT</a> </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habitate