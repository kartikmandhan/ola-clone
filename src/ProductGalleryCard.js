import React from "react";
import "./ProductGalleryCard.css";
function ProductGalleryCard({ image, heading, subHeading, content, icons }) {
  return (
    <div className="ProductGalleryCard">
      <div className="ProductGalleryCard__image">
        <img className="img-fluid" src={image} alt="car" />
      </div>
      <div className="ProductGalleryCard__content">
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
        <p>{content}</p>
        <div className="ProductGalleryCard__Icons">
          {icons?.map((icon) => {
            return (
              <div className="ProductGalleryCard__IconContainer">
                <img
                  className="ProductGalleryCard__Icon"
                  src={icon}
                  alt="icon"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGalleryCard;
