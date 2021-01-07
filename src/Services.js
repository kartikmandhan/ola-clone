import React from "react";
import { CardGroup, Container } from "reactstrap";
import "./Services.css";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <Container className="Services">
      <h1>A car for every occasion</h1>
      <p>
        Ola offers city taxis, inter-city cabs, and local cabs at hourly
        packages
      </p>
      <CardGroup>
        <ServiceCard
          title="City taxi"
          image="https://cms-web.olacabs.com/00000000356.jpg"
          content="The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!"
          icon1="https://www.olacabs.com/webstatic/img/service-type/ct_1.svg"
          icon2="https://www.olacabs.com/webstatic/img/service-type/ct_2.svg"
          icon3="https://www.olacabs.com/webstatic/img/service-type/ct_3.svg"
          icon1Line1="AC"
          icon1Line2="Cabs"
          icon2Line1="Pocket"
          icon2Line2="Friendly"
          icon3Line1="Cashless"
          icon3Line2="Rides"
        />
        <ServiceCard
          title="OutStation"
          image="https://cms-web.olacabs.com/00000000357.jpg"
          content="Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes."
          icon1="https://www.olacabs.com/webstatic/img/service-type/os_1.svg"
          icon2="https://www.olacabs.com/webstatic/img/service-type/os_2.svg"
          icon3="https://www.olacabs.com/webstatic/img/service-type/os_3.svg"
          icon1Line1="One-Way"
          icon1Line2="Trips"
          icon2Line1="Advance"
          icon2Line2="Booking"
          icon3Line1="Safe"
          icon3Line2="Rides"
        />
        <ServiceCard
          title="City taxi"
          image="https://cms-web.olacabs.com/00000000380.jpg"
          content="The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!"
          icon1="https://www.olacabs.com/webstatic/img/service-type/rental_1.svg"
          icon2="https://www.olacabs.com/webstatic/img/service-type/rental_2.svg"
          icon3="https://www.olacabs.com/webstatic/img/service-type/rental_3.svg"
          icon1Line1="Hourly"
          icon1Line2="Packages"
          icon2Line1="Multiple"
          icon2Line2="Stops"
          icon3Line1="Top-Rated"
          icon3Line2="Partners"
        />
      </CardGroup>
    </Container>
  );
}

export default Services;
