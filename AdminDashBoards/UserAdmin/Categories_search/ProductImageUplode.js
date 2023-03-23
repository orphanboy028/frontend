import React, { useState } from "react";
import style from "./css/CategoriesSearch.module.css";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import Image from "next/image";
import { getOrientation } from "get-orientation/browser";

export default function ProductImageUplode() {
  return (
    <>
      <div>
        <div className={style.ProductImageUpload_container}>
          <div>react file upload</div>

          <h1>Image uplod</h1>
        </div>
      </div>
    </>
  );
}
