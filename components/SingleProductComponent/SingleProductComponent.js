import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import style from "./css/SingleProductComponent.module.css";
import childImage from "../../public/Products-images/hydraulic-fixtures.jpg";
import Image from "next/image";
import company_logo from "../../public/company_logo.jpg";
import placeholder from "../../public/placeholder.png";
import check from "../../public/check.png";

export default function SingleProductComponent() {
  return (
    <div>
      <Breadcrumb />
      <div className={style.SingleProductComponent_container}>
        <div className={style.SingleProductComponent_ImageBox}>
          <div className={style.SingleProductComponent_image_gallery_box}>
            <div
              className={style.SingleProductComponent_image_gallery_children}
            >
              <Image src={childImage} alt="child-image" width={50} />
            </div>
            <div
              className={style.SingleProductComponent_image_gallery_children}
            >
              <Image src={childImage} alt="child-image" width={50} />
            </div>

            <div
              className={style.SingleProductComponent_image_gallery_children}
            >
              <Image src={childImage} alt="child-image" width={50} />
            </div>
          </div>
          <div className={style.SingleProductComponent_feature_container}>
            <div className={style.SingleProductComponent_feature_ImageBox}>
              <Image
                src={childImage}
                alt="child-image"
                className={style.SingleProductComponent_feature_Image}
              />
            </div>
          </div>
        </div>
        <div className={style.SingleProductComponent_detail_container}>
          <div className={style.SingleProductComponent_product_title}>
            <h1> Industrial Pani Puri Making Machine</h1>
          </div>
          <div className={style.SingleProductComponent_brand_box}>
            <h3>Brand Name </h3>
            <span>P AND P FOOD MACHINES</span>
          </div>
          <div className={style.SingleProductComponent_priceBox}>
            <span>₹</span> <h3>11,799</h3>
          </div>
          <div className={style.SingleProductComponent_sort_descreptionBox}>
            <h3>Sort Description</h3>
            <p>
              Over the years, we are providing the design & development of the
              hydraulic jigs & fixtures to our customers. We support our
              customer right from the scratch when they are having only the
              component and they want to manufacture it.
            </p>
          </div>
          <div className={style.SingleProductComponent_sendEnquery_box}>
            Send Enquery
          </div>
        </div>
        <div className={style.SingleProductComponent_supplier_detailsBox}>
          <div className={style.SingleProductComponent_company_name}>
            <h3>Prachi Fixtures Private Limited</h3>
          </div>

          <div className={style.SingleProductComponent_company_infoBox}>
            <div className={style.SingleProductComponent_company_logoBox}>
              <Image src={company_logo} alt="company_logo" width={60} />
            </div>
            <div className={style.SingleProductComponent_company_info}>
              <div className={style.SingleProductComponent_company_locationBox}>
                <div className={style.SingleProductComponent_locationIconBox}>
                  <Image src={placeholder} alt="placeholder" width={20} />
                </div>
                <div className={style.SingleProductComponent_company_address}>
                  <p>Pune, Maharashtra</p>
                </div>
              </div>
              {/* Gst Info start */}
              <div className={style.SingleProductComponent_company_locationBox}>
                <div className={style.SingleProductComponent_locationIconBox}>
                  <Image src={check} alt="placeholder" width={20} />
                </div>
                <div className={style.SingleProductComponent_company_address}>
                  <p>GST-27AAHCP6698P1Z9</p>
                </div>
              </div>
              {/* Gst info end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
