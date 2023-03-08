import React from "react";
import style from "./css/RelatedProductComponent.module.css";
import productImg from "../../public/Products-images/hydraulic-fixtures.jpg";
import Image from "next/image";
export default function RelatedProductCard() {
  return (
    <>
      {/* start */}
      <div className={style.RelatedProductCard_card_container}>
        <div className={style.RelatedProductCard_imageBox}>
          <Image src={productImg} alt="product-image" width={120} />
        </div>
        <div className={style.RelatedProductCard_detailsBox}>
          <h2>Drilling Fixture</h2>
          <div>
            <span>icon</span> <span>Sneh Engineering Works</span>
          </div>
          <div>
            <h4>Gurgaon</h4>
          </div>
          <div>
            <span> ₹ </span> <span> 12,000</span> <span> / Piece</span>
          </div>
          <div className={style.RelatedProductCard_btn}>Get Lates Price</div>
        </div>
      </div>

      {/* end */}

      <div className={style.RelatedProductCard_card_container}>
        <div className={style.RelatedProductCard_imageBox}>
          <Image src={productImg} alt="product-image" width={120} />
        </div>
        <div className={style.RelatedProductCard_detailsBox}>
          <h2>Drilling Fixture</h2>
          <div>
            <span>icon</span> <span>Sneh Engineering Works</span>
          </div>
          <div>
            <h4>Gurgaon</h4>
          </div>
          <div>
            <span> ₹ </span> <span> 12,000</span> <span> / Piece</span>
          </div>
          <div className={style.RelatedProductCard_btn}>Get Lates Price</div>
        </div>
      </div>

      <div className={style.RelatedProductCard_card_container}>
        <div className={style.RelatedProductCard_imageBox}>
          <Image src={productImg} alt="product-image" width={120} />
        </div>
        <div className={style.RelatedProductCard_detailsBox}>
          <h2>Drilling Fixture</h2>
          <div>
            <span>icon</span> <span>Sneh Engineering Works</span>
          </div>
          <div>
            <h4>Gurgaon</h4>
          </div>
          <div>
            <span> ₹ </span> <span> 12,000</span> <span> / Piece</span>
          </div>
          <div className={style.RelatedProductCard_btn}>Get Lates Price</div>
        </div>
      </div>

      <div className={style.RelatedProductCard_card_container}>
        <div className={style.RelatedProductCard_imageBox}>
          <Image src={productImg} alt="product-image" width={120} />
        </div>
        <div className={style.RelatedProductCard_detailsBox}>
          <h2>Drilling Fixture</h2>
          <div>
            <span>icon</span> <span>Sneh Engineering Works</span>
          </div>
          <div>
            <h4>Gurgaon</h4>
          </div>
          <div>
            <span> ₹ </span> <span> 12,000</span> <span> / Piece</span>
          </div>
          <div className={style.RelatedProductCard_btn}>Get Lates Price</div>
        </div>
      </div>
    </>
  );
}
