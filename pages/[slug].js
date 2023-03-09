import React from "react";
import NavBar from "../components/NavBar/NavBar";
import RelatedProductComponent from "../components/RelatedProductComponent/RelatedProductComponent";
import SingleProductComponent from "../components/SingleProductComponent/SingleProductComponent";
import SingleProductDetail from "../components/SingleProductComponent/SingleProductDetail";

export default function SingleProductPage() {
  return (
    <>
      <div>
        <NavBar />
        <SingleProductComponent />
        <RelatedProductComponent />
        <SingleProductDetail />
      </div>
    </>
  );
}
