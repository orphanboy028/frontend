import React, { use, useEffect } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import style from "./css/SingleProductComponent.module.css";
import childImage from "../../public/Products-images/hydraulic-fixtures.jpg";
import Image from "next/image";
import company_logo from "../../public/company_logo.jpg";
import placeholder from "../../public/placeholder.png";
import check from "../../public/check.png";
import { ProductContext } from "../../ContaxtApi/ProductContextApi";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function SingleProductComponent() {
  const { singleProduct, product } = useContext(ProductContext);
  const router = useRouter();
  const { slug } = router.query;
  const { user } = product;

  useEffect(() => {
    singleProduct(slug);
  }, [slug]);

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
            <h1> {product.name}</h1>
          </div>
          <div className={style.SingleProductComponent_brand_box}>
            <h3>Brand Name </h3>
            <span>P AND P FOOD MACHINES</span>
          </div>
          <div className={style.SingleProductComponent_priceBox}>
            <span>₹</span> <h3>{product.price}</h3>
          </div>
          <div className={style.SingleProductComponent_sort_descreptionBox}>
            <h3>Sort Description</h3>
            <p>{product.description}</p>
          </div>
          <div className={style.SingleProductComponent_sendEnquery_box}>
            Send Enquery
          </div>
        </div>
        <div className={style.SingleProductComponent_supplier_detailsBox}>
          <div className={style.SingleProductComponent_company_name}>
            <h3>{user.businessDetails.CompanyName}</h3>
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
                  <p>{user.businessDetails.GstNumber}</p>
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
