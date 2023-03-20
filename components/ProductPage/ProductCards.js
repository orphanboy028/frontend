import React, { useEffect } from "react";
import style from "./css/ProductPage.module.css";
import Image from "next/image";
import product1 from "../../public/Products-images/hydraulic-fixtures.jpg";
import verifiedImage from "../../public/Products-images/verified_2x.gif";
import callIcon from "../../public/Products-images/viber.png";
import Link from "next/link";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";
import { useContext } from "react";

const productDetalsList = [
  {
    title: "Hydraulic VMC Fixture",
    productDetails:
      "AUTONICS TCN Series PID Controller is economical temperature controllers having dual preset indicator display to increase user convenience. ",
    price: 10000,
    company: "Daksh Tooling system",
    city: "gurgaon",
    slug: "Hydrulic-vum-fixture",
  },

  {
    title: "Hydraulic VMC Fixture",
    productDetails:
      "AUTONICS TCN Series PID Controller is economical temperature controllers having dual preset indicator display to increase user convenience. ",
    price: 10000,
    company: "Daksh Tooling system",
    city: "gurgaon",
    slug: "Hydrulic-vum-fixture",
  },
];

export default function ProductCards() {
  const { Products, getProduts } = useContext(ProductContext);

  useEffect(() => {
    getProduts();
  }, []);

  const renderProductCard = () => {
    return Products.map((el, i) => {
      return (
        <>
          <div className={style.ProductCards_container}>
            <div className={style.ProductCards_imageBox}>
              {el.images.map((image) => {
                return (
                  <>
                    <Image
                      src={`/Products-images/${image.url}`}
                      alt={image.altText}
                      width={200}
                      height={200}
                    />
                  </>
                );
              })}
            </div>
            <div className={style.ProductCards_contentBox}>
              <div className={style.ProductCards_title}>
                <h2>{el.name}</h2>
              </div>
              <div className={style.ProductCards_priceBox}>
                <h2>
                  <span>₹ </span>55,000/
                </h2>
              </div>
              <div className={style.ProductCards_sort_descreption}>
                <p>{el.description}</p>
              </div>
              <div className={style.ProductCards_conatactBtn__box}>
                <span>
                  <Image src={callIcon} alt="call-icon" width={20} />
                </span>{" "}
                <Link href={`${el.slug}`}>
                  <span>Contact Supplier</span>
                </Link>
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
  return (
    <>
      <div>{renderProductCard()}</div>
    </>
  );
}
