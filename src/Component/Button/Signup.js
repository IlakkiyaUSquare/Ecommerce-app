import React from 'react'


const Signup = () => {
  return (
    <div>
       
        <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#SignupModal">
                <span className='fa fa-user-plus me-2'></span>Register
            </button>


            <div className="modal fade" id="SignupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-google me-2'></span>SignUp with google
                            </button>
                            <button className='btn btn-primary w-100 mb-4'>
                                <span className='fa fa-facebook me-2'></span>SignUp with facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput"/>
                                       
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword3" className="form-label"> Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword3"/>
                                </div>
                                <div className="mb-5 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                                        <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
                            </form>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Signup
