import React from "react";
import style from "../css/CategeoriesCardsBar.module.css";
import facemask from "../../../public/categories-images/mobile/face-mask.png";
import Image from "next/image";

export default function MobileCategoriesCard() {
  return (
    <>
      <div className={style.MobileCategoriesCard_container}>
        <h2>Medical, Safety & protective Clothing and Apparele </h2>
        <div className={style.MobileCategoriesCard_innerContainer}>
          <h3>Face Mask</h3>
          <div className={style.MobileCategoriesCard_child_box}>
            <div className={style.MobileCategoriesCard_child_box_Image}>
              <Image
                src={facemask}
                alt="face-mask"
                className={style.MobileCategoriesCard_child_boximage}
              />
            </div>
            <div className={style.MobileCategoriesCard_child_box_Content}>
              {/* categories name list start */}
              <div
                className={
                  style.MobileCategoriesCard_child_box_Content_innerBox
                }
              >
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_categoriesName
                  }
                >
                  3 Play face Mask
                </div>
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_arrowBox
                  }
                ></div>
              </div>
              {/* categories name list End */}
              {/* categories name list start */}
              <div
                className={
                  style.MobileCategoriesCard_child_box_Content_innerBox
                }
              >
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_categoriesName
                  }
                >
                  3 Play face Mask
                </div>
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_arrowBox
                  }
                ></div>
              </div>
              {/* categories name list End */}
              {/* categories name list start */}
              <div
                className={
                  style.MobileCategoriesCard_child_box_Content_innerBox
                }
              >
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_categoriesName
                  }
                >
                  3 Play face Mask
                </div>
                <div
                  className={
                    style.MobileCategoriesCard_child_box_Content_arrowBox
                  }
                ></div>
              </div>
              {/* categories name list End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
