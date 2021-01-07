import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Feature.css";
import FeatureCard from "./FeatureCard";
function Features() {
  return (
    <Container className="Features">
      <h1>Why ride with Ola?</h1>
      <p>The best way to travel to your destination</p>
      <Row>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000368.jpg"
            heading="Cabs for Every Pocket"
            content="From Sedans and SUVs to Luxury cars for special occasions, we have
            cabs to suit every pocket"
          />
        </Col>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000374.jpg"
            heading="Ola Select"
            content="A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time"
          />
        </Col>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000382.jpg"
            heading="Share and Express"
            content="To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!"
          />
        </Col>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000370.jpg"
            heading="Secure and Safer Rides"
            content="Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience."
          />
        </Col>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000371.jpg"
            heading="In Cab Entertainment"
            content="Play music, watch videos and a lot more with Ola Play!  Also stay connected even if you are travelling through poor network areas with our free wifi facility."
          />
        </Col>
        <Col md={6}>
          <FeatureCard
            image="https://cms-web.olacabs.com/00000000372.jpg"
            heading="Cashless Rides"
            content="Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
