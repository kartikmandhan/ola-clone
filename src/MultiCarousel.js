import React from "react";
import Slider from "react-slick";
import "./MultiCarousel.css";
function MultiCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="MultiCarousel">
      <Slider {...settings}>
        <div className="MultiCarousel__slide">
          <div className="MultiCarousel__slideIcon">
            <img
              src="https://cms-web.olacabs.com/00000000362.jpeg"
              alt="logo"
            />
          </div>
          <div className="MultiCarousel__slideInfo">
            <h3 className="MultiCarousel__Heading">
              Get yourself a Share Pass
            </h3>
            <p className="MultiCarousel__desc">
              Enjoy cheapest rides on the go
            </p>
          </div>
        </div>
        <div className="MultiCarousel__slide">
          <div className="MultiCarousel__slideIcon">
            <img
              src="https://cms-web.olacabs.com/00000000360.jpeg"
              alt="logo"
            />
          </div>
          <div className="MultiCarousel__slideInfo">
            <h3 className="MultiCarousel__Heading">Upgrade to Ola Select</h3>
            <p className="MultiCarousel__desc">
              Explore the benefits of Ola Select
            </p>
          </div>
        </div>
        <div className="MultiCarousel__slide">
          <div className="MultiCarousel__slideIcon">
            <img src="https://cms-web.olacabs.com/00000000363.svg" alt="logo" />
          </div>
          <div className="MultiCarousel__slideInfo">
            <h3 className="MultiCarousel__Heading">
              Sign up for Ola Corporate
            </h3>
            <p className="MultiCarousel__desc">
              Employee travel management made easy
            </p>
          </div>
        </div>
        <div className="MultiCarousel__slide">
          <div className="MultiCarousel__slideIcon">
            <img
              src="https://cms-web.olacabs.com/00000000361.jpeg"
              alt="logo"
            />
          </div>
          <div className="MultiCarousel__slideInfo">
            <h3 className="MultiCarousel__Heading">
              Be entertained with Ola Play
            </h3>
            <p className="MultiCarousel__desc">
              Discover movies and music on your daily ride
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultiCarousel;
