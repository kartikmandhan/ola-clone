import React from "react";
import "./FeatureCard.css";
function FeatureCard({ image, heading, content }) {
  return (
    <div>
      <a className="FeatureCard" target="_blank" href="/">
        <div className="FeatureCard__img">
          <img alt="logo" src={image} />
        </div>
        <div className="FeatureCard__right">
          <h4 className="FeatureCard__heading">{heading}</h4>
          <p className="FeatureCard__info">{content}</p>
        </div>
      </a>
    </div>
  );
}

export default FeatureCard;
