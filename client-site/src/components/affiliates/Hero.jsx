import React from 'react';
import bannerImage from '../bannerdd.jpg'; // Importing the image

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full !block">
        <div id="item1" className="carousel-item w-full">
          <img
            src={bannerImage} // Using the imported image
            alt="Banner"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
