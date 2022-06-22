import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="100"
            title="The lean Startup: How Constant Innovaction Create Radically Successful Businesses Paperback"
            price={19.69}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="101"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239}
            image="https://th.bing.com/th/id/OIP.ER2BLyZq_q6TeOlGpMH_OgHaHE?pid=ImgDet&rs=1"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="102"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.69}
            image="https://th.bing.com/th/id/OIP.ih7wewEjknWKXVqvi4IpRAHaFr?pid=ImgDet&rs=1"
            rating={3}
          />
          <Product
            id="104"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.39}
            image="https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/43/837/g837ECHO3B-B.jpg"
            rating={5}
          />
          <Product
            id="105"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598}
            image="https://cdn.shoplightspeed.com/shops/606657/files/19193072/apple-new-129-inch-ipadpro-wi-fi-128gb-4th-generat.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="106"
            title="LG 65EF9500 OLED TV"
            price={1019.69}
            image="https://th.bing.com/th/id/OIP.dW6sjvvSzjBXeapBRa7BNAHaEK?pid=ImgDet&rs=1"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
