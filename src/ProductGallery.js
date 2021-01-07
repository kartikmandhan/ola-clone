import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "./ProductGallery.css";
import ProductGalleryCard from "./ProductGalleryCard";
function ProductGallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ProductGallery pt-5">
      <Container className="my-3">
        <h1 className="ProductGallery__heading">Meet our Awesome Fleet</h1>
        <h3 className="ProductGallery__subHeading">
          The widest variety of cars to choose from
        </h3>
      </Container>
      <Slider
        className="ProductGallery__nav mb-5"
        {...settings}
        asNavFor={nav1}
        ref={slider2}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-auto-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Auto</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-bike-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Bike</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-share-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Share</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-micro-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Micro</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-mini-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Mini</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-sedan-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Prime Sedan</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-play-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Prime Play</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-prime-suv-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Prime SUV</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-lux-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>LUX</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-e-rick-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>E-Rick</h6>
        </div>
        <div className="ProductGallery__IconContainer">
          <div className="ProductGallery__IconWrapper">
            <img
              src="https://www.olacabs.com/webstatic/img/ola-fleet-svg/ola-kaali-peeli-active.svg"
              className="ProductGallery__Icon"
              alt="icon"
            />
          </div>
          <h6>Kaali Peeli</h6>
        </div>
      </Slider>
      <div className="ProductGallery__Items pb-5">
        <Container>
          <Slider asNavFor={nav2} ref={slider1}>
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/auto.png"
              heading="Auto"
              subHeading="Get an Auto at your doorstep"
              content="The all too familiar auto ride, minus the hassle of waiting and haggling for price. A convenient way to travel everyday."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/eco-friendly.svg",
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/bike.png"
              heading="Bike"
              subHeading="On Time, Every time."
              content="Hate waiting in the snarling traffic each day? Not anymore as with Ola Bike you can now reduce your travel time by at least 50%. Simply book a bike with a tap of a button and ride away within minutes and all this at the most affordable rates in town!
"
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/share.png"
              heading="Share"
              subHeading="Eco-friendly rides at pocket-friendly rates"
              content="Fully air conditioned cars that you can share with others depending on your route and location."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/route-sharing.svg",
                "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/micro.png"
              heading="Micro"
              subHeading="Small fares for short rides"
              content="Compact yet comfortable AC cars that seat up to 3 people and give you great value for your money. Small fares for short rides."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/compact-hatchback.svg",
                "https://www.olacabs.com/webstatic/img/car-features/baggage-2.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/mini.png"
              heading="Mini"
              subHeading="Everyday dependable ride"
              content="A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/regular-hatchback.svg",
                "https://www.olacabs.com/webstatic/img/car-features/baggage-2.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png"
              heading="Prime Sedan"
              subHeading="Sedans with free Wi-Fi and top drivers"
              content="Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                "https://www.olacabs.com/webstatic/img/car-features/boot-space.svg",
                "https://www.olacabs.com/webstatic/img/car-features/exec-ride.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/prime-play.png"
              heading="Prime Play"
              subHeading="Enjoy music, radio, videos on the go"
              content="Cars with in-cab entertainment consoles that allow you to watch movies, listen to music and stay connected while on the move."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ola-play.svg",
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                "https://www.olacabs.com/webstatic/img/car-features/family.svg",
                "https://www.olacabs.com/webstatic/img/car-features/baggage-3.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/prime-suv.png"
              heading="Prime SUV"
              subHeading="SUVs with free Wi-Fi and top drivers"
              content="A perfect choice of car for your weekend getaways, with plenty of room for everyone including that extra bag."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                "https://www.olacabs.com/webstatic/img/car-features/family.svg",
                "https://www.olacabs.com/webstatic/img/car-features/baggage-3.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/lux.png"
              heading="Lux"
              subHeading="The new luxury ride in town"
              content="Top-of-the-line luxury cars like Mercedes, BMW, and Audis powered by auto-connect Wi-Fi, at unbeatable fares & attractive hourly rental packages."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                "https://www.olacabs.com/webstatic/img/car-features/water-bottle.svg",
                "https://www.olacabs.com/webstatic/img/car-features/lux-ride.svg",
                "https://www.olacabs.com/webstatic/img/car-features/usb.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/e-rick.png"
              heading="E-Rick"
              subHeading="Get an E-Rick at your doorstep"
              content="Go green by booking yourself an e-rickshaw ride online and travel short distances without the hassle of managing and arranging change."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/eco-friendly.svg",
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/kaali-peeli.png"
              heading="Kaali Peeli"
              subHeading="Get an E-Rick at your doorstep"
              content="This offering by Ola allows you to book a local black-yellow cab like any other Ola cab."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/value-money.svg",
                "https://www.olacabs.com/webstatic/img/car-features/cashless.svg",
              ]}
            />
            <ProductGalleryCard
              image="https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png"
              heading="Prime Sedan"
              subHeading="Sedans with free Wi-Fi and top drivers"
              content="Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space."
              icons={[
                "https://www.olacabs.com/webstatic/img/car-features/ac.svg",
                "https://www.olacabs.com/webstatic/img/car-features/wifi.svg",
                "https://www.olacabs.com/webstatic/img/car-features/leg-room.svg",
                "https://www.olacabs.com/webstatic/img/car-features/boot-space.svg",
                "https://www.olacabs.com/webstatic/img/car-features/exec-ride.svg",
              ]}
            />
          </Slider>
        </Container>
      </div>
    </div>
  );
}
export default ProductGallery;
