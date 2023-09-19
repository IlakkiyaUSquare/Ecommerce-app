import React from 'react'
import Imag from '../assets/mgs.jpg'

const Contact = () => {
  return (
    <>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-12 text-center py-4 my-4'>
            <h1 className='prod fw-bolder'>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src={Imag} alt='Contact Us' height={400} width={400} />
          </div>
          <div className='col-md-6'>
            <form>
              <div className='mb-3'>
                <div className="mb-3">
                  <label htmlFor="exampleForm" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleForm" placeholder="enter your name"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter your email address"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message </label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary">Send Message</button>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
