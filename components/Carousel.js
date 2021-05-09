import React from "react";

export default function Carousel(props) {
  const { person } = props;
  return (
    <div className="item ">
      <div className="testimonials-two__single">
        <div className="testimonials-two__top">
          <div className="testimonials-two__image">
            <img src={person.img} alt />
          </div>
          {/* /.testimonials-two__image */}
          <div className="testimonials-two__top-content">
            <h3>{person.name}</h3>
            <span>{person.group}</span>
          </div>
          {/* /.testimonials-two__top-content */}
        </div>
        {/* /.testimonials-two__top */}
        <div className="testimonials-two__content">
          <p>{person.des}</p>
        </div>
        {/* /.testimonials-two__content */}
        <div className="testimonials-two__bottom">
          <i className="far fa-quote-right testimonials-two__qoute-icon" />
          <div className="testimonials-two__stars">
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </div>
          {/* /.testimonials-two__stars */}
        </div>
        {/* /.testimonials-two__bottom */}
      </div>
      {/* /.testimonials-two__single */}

      {/* /.item */}
    </div>
  );
}
