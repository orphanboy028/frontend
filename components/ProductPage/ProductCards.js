import React from "react";
import style from "./css/ProductPage.module.css";
import Image from "next/image";
import product1 from "../../public/Products-images/hydraulic-fixtures.jpg";
import verifiedImage from "../../public/Products-images/verified_2x.gif";
import callIcon from "../../public/Products-images/viber.png";

const productDetalsList = [
  {
    title: "Hydraulic VMC Fixture",
    productDetails:
      "AUTONICS TCN Series PID Controller is economical temperature controllers having dual preset indicator display to increase user convenience. ",
    price: 10000,
    company: "Daksh Tooling system",
    city: "gurgaon",
  },

  {
    title: "Hydraulic VMC Fixture",
    productDetails:
      "AUTONICS TCN Series PID Controller is economical temperature controllers having dual preset indicator display to increase user convenience. ",
    price: 10000,
    company: "Daksh Tooling system",
    city: "gurgaon",
  },
];

const renderProductCard = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, i) => {
    return (
      <>
        <div className={style.ProductCards_container}>
          <div className={style.ProductCards_imageBox}>
            <Image src={product1} alt="product-image-1" />
          </div>
          <div className={style.ProductCards_contentBox}>
            <div className={style.ProductCards_title}>
              <h2>Hydraulic Fixtures</h2>
            </div>
            <div className={style.ProductCards_priceBox}>
              <h2>
                <span>₹ </span>55,000/
              </h2>
            </div>
            <div className={style.ProductCards_sort_descreption}>
              <p>
                We, "Kmgola Private Limited" are a "Manufacturer" of
                high-quality Power Chucks, Clamping Systems, Hydraulic Power
                Unit, Precision Machined Components, Flexible Standard Products,
                Hydraulic Clamp Cylinders etc.
              </p>
            </div>
            <div className={style.ProductCards_conatactBtn__box}>
              <span>
                <Image src={callIcon} alt="call-icon" width={20} />
              </span>{" "}
              <span>Contact Supplier</span>
            </div>
          </div>
          <div className={style.ProductCards_supplyer_detailsBox}>
            <div className={style.ProductCards_userType}>
              <Image src={verifiedImage} alt="verified-image" width={50} />
            </div>
            <div className={style.ProductCards_companyName}>
              <p>Kmgola Private Limited</p>
              <p>Faridabad</p>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default function ProductCards() {
  return (
    <>
      <div>{renderProductCard()}</div>
    </>
  );
}
