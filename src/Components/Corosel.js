import React from 'react'

export default function Corousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://w0.peakpx.com/wallpaper/855/936/HD-wallpaper-lord-krishna-with-radha-lord-krishna-radha-krishna-kanha-god-hare-krishna-thumbnail.jpg" className="d-block w-50 mx-5 my-5" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://w0.peakpx.com/wallpaper/158/542/HD-wallpaper-jai-shree-krishna-bhagwan-lord-radhe-shree-krishna-shri-krishna-thumbnail.jpg" className="d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://w0.peakpx.com/wallpaper/681/177/HD-wallpaper-krishna-god-god-krishna-lord-lord-krishna-shree-krishna-thumbnail.jpg" className="d-block w-50 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
