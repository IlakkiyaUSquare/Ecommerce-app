import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Component/Contact'
import Img from '../assets/about.webp'
const About = () => {
  return (
    <>
      <div className='container py-4 my-4'>
        <div className='row'>
          <div className='col-md-6 '>
            <h1 className='prod fw-bolder mb-4'>About  Us</h1><hr />
            <p className='para mb-4'>
               &nbsp;&nbsp;&nbsp;&nbsp;The largest textile kingdom in Tamil Nadu, The Liya Collection has proven to be a shopper's delight for generations of families. It has a widespread reach with sprawling showrooms in  Dindigul and Tanjore. The Chennai Silks continues its endeavours to reach out to customers, beyond barriers and beyond boundaries. It has the most exhautive collection of clothing for men, women and children, under on roof. These include Wedding Silks, Designer Sarees, Cotton & Silk Sarees, Chudidars, Dress Materials, Traditional & Western Wear, Suitings & Shirtings, Formal & Casual Wear, Dhoties, Sherwanis & Children's Wear. With clothes for every season and every occasion, Liya Collection has indeed become the favourite family shop.
              The advanced supply chain Management makes automatic updation of stock, and therefore greater precision in inventory control. With on-time supply, Liya Collection enjoys a smooth rapport with its vendors, a relationship that has always been governed by ethical business practices & hassle-free online payments.
              Testifying to authentic products of Liya Collection, are the Silk Mark and Handloom Mark. In compliance with International Quality Management Systems, the Chennai & Coimbatore stores are certified with ISO 9001:2000 <br />
              <strong>11, Main Road,<br />
              Varadharaj Shopping Complex,<br />
              Dindigul.</strong></p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className='col-md-5 d-flex justify-content-center '>
            <img src={Img} className="aboutpage"
            alt="About us" height={350} width={350} />

          </div>

        </div>
      </div>
    </>
  )
}

export default About
