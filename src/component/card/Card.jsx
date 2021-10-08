import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div class="card">
      <div class="header">
        <h1>Our Pricing</h1>
        <div class="period">
          <div class="anually">Anually</div>
          <label class="switch">
            <span class="slider round"></span>
          </label>
          <div class="monthly">Monthly</div>
        </div>
      </div>
      <div class="component">
        <div class="com1 small-com com-props">
          <p class="title">Basic</p>
          <h1 class="price"><p class="unit">$</p>19.99</h1>
          <span class="storage">500 GB Storage</span>
          <span class="users">2 Users Allowed</span>
          <span class="memory">Send up to 3 GB</span>
          <button>LEARN MORE</button>
        </div>
        <div class="com-props com2">
          <p class="title">Professional</p>
          <h1 class="price"><p class="unit">$</p>24.99</h1>
          <span class="storage">1 TB Storage</span>
          <span class="users">5 Users Allowed</span>
          <span class="memory">Send up to 10 GB</span>
          <button>LEARN MORE</button>
        </div>
        <div class="com3 small-com com-props">
          <p class="title">Master</p>
          <h1 class="price"><p class="unit">$</p>39.99</h1>
          <span class="storage">2 TB Storage</span>
          <span class="users">10 Users Allowed</span>
          <span class="memory">Send up to 20 GB</span>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

