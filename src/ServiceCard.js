import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./ServiceCard.css";
const ServiceCard = ({
  image,
  title,
  content,
  icon1,
  icon2,
  icon3,
  icon1Line1,
  icon1Line2,
  icon2Line1,
  icon2Line2,
  icon3Line1,
  icon3Line2,
}) => {
  return (
    <Card className="ServiceCard">
      <CardImg
        top
        className="ServiceCard__Image"
        src={image}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText tag="h6" className="mb-2 text-muted">
          {content}
        </CardText>
        <div className="ServiceCard__benifits">
          <div className="ServiceCard__Icon">
            <img src={icon1} alt="logo" />
            <span className="IconInfo">
              {icon1Line1}
              <br />
              {icon1Line2}
            </span>
          </div>
          <div className="ServiceCard__Icon">
            <img src={icon2} alt="logo" />
            <span className="IconInfo">
              {icon2Line1}
              <br />
              {icon2Line2}
            </span>
          </div>
          <div className="ServiceCard__Icon">
            <img src={icon3} alt="logo" />
            <span className="IconInfo">
              {icon3Line1}
              <br />
              {icon3Line2}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
