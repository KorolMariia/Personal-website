import React from 'react';
import './SectionAdditionally.scss';

export default function SectionAdditionally() {
  return (
    <div className="section additionally">
      <div>
        <h2>
          My passion <span className="color">is travel!</span>
        </h2>
        <p>
          Whenever possible, I try to travel and discover new cities and
          countries. <br />I have already{' '}
          <span className="color">visited 20 countries</span> and I hope this
          number will grow.
        </p>
        <div className="slider">
          <figure className="slider-figure">
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-1.webp"
              alt="Foto-Italy"
            />
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-2.webp"
              alt="Foto-Germany"
            />
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-3.webp"
              alt="Foto-Israel"
            />
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-4.webp"
              alt="Foto-Germany"
            />
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-5.webp"
              alt="Foto-Greece"
            />
            <img
              className="slider-figure-img"
              src="/images/additionally/travel-6.webp"
              alt="Foto-Albania"
            />
          </figure>
        </div>
      </div>
      <div className="additionally-other">
        <div className="other end">
          <h3>
            I love <span className="color">cooking!</span>
          </h3>
          <img
            className="other-foto"
            src="/images/additionally/cooking.webp"
            alt="Foto-Cooking"
          />
        </div>
        <div className="other">
          <img
            className="other-foto"
            src="/images/additionally/painting.webp"
            alt="Foto-Painting"
          />
          <h3>
            I like <span className="color">painting!</span>
          </h3>
        </div>
        <div className="other end">
          <h3>
            I passionate <span className="color">about animals!</span>
          </h3>
          <img
            className="other-foto"
            src="/images/additionally/animals.webp"
            alt="Foto-Animals"
          />
        </div>
      </div>
    </div>
  );
}
