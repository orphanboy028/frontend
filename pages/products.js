import React from "react";
import LocationBar from "../components/LocationBar/LocationBar";
import NavBar from "../components/NavBar/NavBar";
import PagesTopBaneer from "../components/PagesBaners/PagesTopBaneer";
import ProductPage from "../components/ProductPage/ProductPage";

export default function Products() {
  return (
    <>
      <div>
        <NavBar />
        <PagesTopBaneer />
        <LocationBar />
        <ProductPage />
      </div>
    </>
  );
}
