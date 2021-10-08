import React, { useState } from "react";
import "./card.scss";

const Card = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  }

  return (
    <div className="card">
      <div className="header">
        <h1>Our Pricing</h1>
        <div className="period">
          <div className="anually">Anually</div>
          <label className="switch">
            <span onClick={togglePricing} className="slide">
              <span className={isMonthly ? "slider" : "slider year"}></span>
            </span>
          </label>
          <div className="monthly">Monthly</div>
        </div>
      </div>
      <div className="component">
        <div className="com1 small-com com-props">
          <p className="title">Basic</p>
          <h1 className="price"><p className="unit">$</p>{isMonthly ? "19.99" : "199.99"}</h1>
          <span className="storage">500 GB Storage</span>
          <span className="users">2 Users Allowed</span>
          <span className="memory">Send up to 3 GB</span>
          <button>LEARN MORE</button>
        </div>
        <div className="com-props com2">
          <p className="title">Professional</p>
          <h1 className="price"><p className="unit">$</p>{isMonthly ? "24.99" : "249.99"}</h1>
          <span className="storage">1 TB Storage</span>
          <span className="users">5 Users Allowed</span>
          <span className="memory">Send up to 10 GB</span>
          <button>LEARN MORE</button>
        </div>
        <div className="com3 small-com com-props">
          <p className="title">Master</p>
          <h1 className="price"><p className="unit">$</p>{isMonthly ? "39.99" : "399.99"}</h1>
          <span className="storage">2 TB Storage</span>
          <span className="users">10 Users Allowed</span>
          <span className="memory">Send up to 20 GB</span>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

