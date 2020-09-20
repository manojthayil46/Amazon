import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price="14.99"
            ratings={4}
          />
          <Product
            id="2"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            price="469.99"
            ratings={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Xiaomi Mi Band 5 Smart Bracelet Swim Sport Monitor Waterproof International Version(Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/512j23v%2Bu6L._AC_SL1000_.jpg"
            price="49.99"
            ratings={4}
          />
          <Product
            id="4"
            title="Elite Series 2 Controller - Black"
            image="https://images-na.ssl-images-amazon.com/images/I/71F6eID-ImL._SL1500_.jpg"
            price="152.89"
            ratings={4}
          />
          <Product
            id="5"
            title="OnePlus 7T HD1907, 8GB RAM + 128GB Memory, GSM 4G LTE Factory Unlocked for AT&T T-Mobile, Single Sim, US Model (Glacier Blue)"
            image="https://images-na.ssl-images-amazon.com/images/I/51GGjGUfuFL._AC_SL1000_.jpg"
            price="449.99"
            ratings={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung Electronics UN32N5300AFXZA 32 1080p Smart LED TV (2018), Black"
            image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg"
            price="236.31"
            ratings={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
