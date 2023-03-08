import React from "react";
import NavBar from "../components/NavBar/NavBar";
import RelatedProductComponent from "../components/RelatedProductComponent/RelatedProductComponent";
import SingleProductComponent from "../components/SingleProductComponent/SingleProductComponent";

export default function SingleProductPage() {
  return (
    <>
      <div>
        <NavBar />
        <SingleProductComponent />
        <RelatedProductComponent />
      </div>
    </>
  );
}
