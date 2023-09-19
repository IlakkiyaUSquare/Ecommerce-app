import React from 'react'
import Image from '../assets/bgd1.jpg'
import Image1 from '../assets/bgd3.jpg'
import Image2 from '../assets/bgd2.jpg'
import Product from './Product'

const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image} className="d-block  w-100" alt="Shopping" height={600} />
            
          </div>
          <div className="carousel-item">
            <img src={Image1} className="d-block w-100" alt="Shopping" height={600} />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="Shopping" height={600} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>

    </>
  )
}

export default Home
