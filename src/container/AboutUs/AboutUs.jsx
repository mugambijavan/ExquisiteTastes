import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Welcome to Exquisite Tastes, a haven for discerning connoisseurs. Nestled in luxury, indulge in a culinary journey curated with global ingredients. Our chefs craft masterpieces, pleasing both eyes and senses. Immerse in sophistication, where each detail elevates your dining experience. Savor our chef&apos;s tasting menu or à la carte offerings—an ode to indulgence. A realm where artistry meets luxury, creating cherished memories.</p>

        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="exquisite-tastes">
          Once upon a time, amidst a picturesque landscape, Exquisite Tastes emerged—a culinary masterpiece of luxury. Word spread, turning it into a haven of intimate dining experiences. Guided by skilled chefs, the hotel&apos;s menus dazzled with global flavors, each dish a true masterpiece. Over time, it became an iconic hospitality landmark, captivating guests seeking indulgence. Today, Exquisite Tastes endures—a timeless tale of culinary excellence where opulence and taste converge.
        </p>

        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
