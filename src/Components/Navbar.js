import React from 'react'
import DigitalClockHook from './DigitalClockHook'
import ModalComponent from './ModalComponent'
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import CropOriginalRoundedIcon from '@material-ui/icons/CropOriginalRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';




function Navbar(props) {
  console.log("themevalue", props)
  return (
    <>
      <nav className={`navbar navbar-expand-sm navbar-${props.changeTheme} bg-${props.changeTheme} sticky-top`}>
        <div className={`container-fluid bg-${props.changeTheme}`}>
          <a href="/" class="navbar-brand"><img id="logo" src="https://about.netflix.com/images/logo.png" alt='logo' /></a>
          {/* <a className="navbar-brand" href="/" style={{color:'red', fontSize:'28'}}>NETFLIX</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto" id="topnav">
              <li className="nav-item">
                <a className="nav-link" href="/"><HomeIcon style={{ color: 'red' }} />Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><TvIcon style={{ color: 'red' }} />TvShows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><CropOriginalRoundedIcon style={{ color: 'red' }} />Originals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"> <PlaylistPlayRoundedIcon style={{ color: 'red' }} />RecentelyAdded</a>
              </li>

            </ul>
            <li className="nav-item pe-2"><DigitalClockHook /></li>


            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search"></input>
              <button className="btn btn-danger" type="button">Search</button>
            </form>
            <a className="nav-link mx-2 my-1 btn btn-danger p-1" href='/' data-bs-toggle="modal" style={{ color: 'rgb(226, 217, 217)' }}
              data-bs-target='#myModal' id="log"><ExitToAppRoundedIcon />login</a>
            {/* <button className="nav-link mx-2" data-bs-toggle="modal" data-bs-target='#myModal'> login</button> */}

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleBtn} />
              <label className={`${props.changeTheme === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckChecked" >
                {props.changeTheme === 'dark' ? 'enable-light' : 'enable-dark'}</label>
            </div>
            <ModalComponent target="myModal" />

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
