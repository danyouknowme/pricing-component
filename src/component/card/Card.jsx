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
        <div class="com1 small-com"></div>
        <div class="com2"></div>
        <div class="com3 small-com"></div>
      </div>
    </div>
  );
};

export default Card;

