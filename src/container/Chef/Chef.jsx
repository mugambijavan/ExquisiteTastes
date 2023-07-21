import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">As an amazing chef, I take pride in creating mesmerizing culinary wonders that leave my diners delighted with each exquisite bite.</p>
        </div>
        <p className="p__opensans">
          It&apos;s the genuine smiles and expressions of awe from my guests that fuel my passion for pushing the boundaries of taste and imagination. Crafting vibrant and harmonious flavors is not just a job but a heartfelt commitment to excellence that brings immense joy and fulfillment to my culinary journey.
        </p>

      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
