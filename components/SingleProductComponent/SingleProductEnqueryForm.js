import React from "react";
import style from "./css/SingleProductComponent.module.css";
import productImage from "../../public/Products-images/hydraulic-fixtures.jpg";
import Image from "next/image";

export default function SingleProductEnqueryForm() {
  return (
    <>
      <div className={style.SingleProductEnqueryForm_container}>
        <div className={style.SingleProductEnqueryForm_form_HeadingBox}>
          <h2>Send your enquiry to this supplier</h2>
        </div>
        <div className={style.SingleProductEnqueryForm_toEnqueryBox}>
          <div className={style.SingleProductEnqueryForm_ToBox}>To</div>
          <div className={style.SingleProductEnqueryForm_NameBox}>
            Axis Manufacturing Solution
          </div>
        </div>

        {/* Product image and title start */}
        <div className={style.SingleProductEnqueryForm_product_DetailsBox}>
          <div className={style.SingleProductEnqueryForm_productIMageBox}>
            <Image src={productImage} alt="Product_Image" width={50} />
          </div>
          <div className={style.SingleProductEnqueryForm_productNameBox}>
            Hydraulic HMC Fixture For Rear Housing
          </div>
        </div>
        {/* Product image and title End */}

        <div className={style.SingleProductEnqueryForm_formBox}>
          <form className={style.SingleProductEnqueryForm_form}>
            <textarea
              className={style.SingleProductEnqueryForm_textArea}
            ></textarea>

            <div className={style.SingleProductEnqueryForm_formBtnBox}>
              <div className={style.SingleProductEnqueryForm_formBtn}>
                Submit Enquirey
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
