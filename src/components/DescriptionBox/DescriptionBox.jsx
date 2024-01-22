import React from 'react';
import './DescriptionBox.css'

export default function DescriptionBox() {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce revolutionizes shopping by bringing the marketplace to your fingertips. With just a few clicks, customers can explore a vast array of products, compare prices, and make secure transactions—all from the comfort of their homes. This digital marketplace not only enhances convenience but also opens up endless possibilities for businesses and consumers alike, fostering a dynamic and accessible global economy.</p>
            <p>In the realm of e-commerce, convenience meets choice, offering customers a personalized and seamless shopping experience. From virtual storefronts to doorstep delivery, this digital landscape continues to redefine the way we buy and sell.</p>
        </div>
    </div>
  );
}
