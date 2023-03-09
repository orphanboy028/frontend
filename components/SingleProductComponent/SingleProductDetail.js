import React from "react";
import style from "./css/SingleProductComponent.module.css";
import SingleProductEnqueryForm from "./SingleProductEnqueryForm";
export default function SingleProductDetail() {
  return (
    <>
      <div className={style.SingleProductDetail_Main_container}>
        <div className={style.SingleProductDetail_Container}>
          <div className={style.SingleProductDetail_DetailBox}>
            <div className={style.SingleProductDetail_BoxHeading}>
              <h2>Product Details</h2>
            </div>
            <div className={style.SingleProductDetail_ProductDetailsBox}>
              <div className={style.SingleProductDetail_ProductDetail_Heading}>
                <h1>Product Specification</h1>
              </div>
              <div className={style.SingleProductDetail_Product_Specification}>
                <pre> Material -- Alloy Steel </pre>
                <pre> Tolerance -- 0.10 mm</pre>
                <pre> Brand -- Axis </pre>
                <pre> Technic -- Hot Rolled </pre>
                <pre> Surface -- Finish Polished </pre>
                <pre> Usage -- VMC Machine </pre>
              </div>
            </div>
          </div>

          {/* Enquery form box start */}
          <div className={style.SingleProductDetail_enqueryBox}>
            <SingleProductEnqueryForm />
          </div>
          {/* Enquery form box End */}
        </div>
      </div>
    </>
  );
}
