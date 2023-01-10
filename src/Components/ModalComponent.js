import React from 'react'


function ModalComponent(props) {
  return (
    <> 
    <div className="modal" id={props.target}>
    <div className="modal-dialog">
        <div className="modal-content">

            <div className="modal-header" style={{ backgroundColor: 'rgb(15, 47, 83)' }}>
                <h4 className="modal-title">
                    <ul className="nav nav-pills" style={{listStyleType:'none'}}>
                        <li className="nav-item active text-white"><a className="nav-link" data-bs-toggle="pill"
                            href="#login">login</a></li>
                        <li className="nav-item text-white"><a className="nav-link" data-bs-toggle="pill"
                            href="#signup">signup</a></li>
                    </ul>
                </h4>

            </div>

            <div className="modal-body justify-content-between">

                <div className="tab-content" id="mytabcontent">
                    <div id="login" className="tab-pane   active">
                        <div className="myform ">
                            <form>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" />

                                </div>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" />
                                </div>
                                <div className="checkbox my-3">
                                    <label><input type="checkbox" /> Remember me</label>
                                </div>
                                <button type="button" className="btn  btn-primary mt-3">Submit</button>
                            </form>

                        </div>
                    </div>

                    <div id="signup" className="tab-pane">

                        <div className="my form ">
                            <form>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" />

                                </div>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" />
                                </div>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2" htmlFor="pwd">Contact</label>
                                    <input type="number" className="form-control" id="pwd" />
                                </div>
                                <div className="form-group my-3">
                                    <label className="control-label col-sm-2"
                                        htmlFor="chosefile">ChoseFile</label>
                                    <input type="file" className="form-control" id="chosefile" />
                                </div>

                                <div className="checkbox my-3">
                                    <label><input type="checkbox" /> Remember me</label>
                                </div>
                                <button type="button" className="btn  btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


            <div className="modal-footer" style={{ backgroundColor: 'rgb(199, 199, 199)' }}>
                <button type="button" className="btn btn-outline-success" data-bs-target="#mylogin"
                    data-bs-toggle="modal">Login</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>
</>
  )
}

export default ModalComponent