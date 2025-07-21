import React from 'react'
function ImageSlider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner slider-wrapper">
        <div className="carousel-item active">
          <img src="images/7961007.jpg" id='img' className="d-block w-100 slider-img" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="images/sliderimage-2.jpg" id='img' className="d-block w-100 slider-img" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="images/banner.png" id='img' className="d-block w-100 slider-img" alt="Slide 3" />
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
  );
}

export default ImageSlider;
