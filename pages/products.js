import React from "react";
import LocationBar from "../components/LocationBar/LocationBar";
import NavBar from "../components/NavBar/NavBar";
import PagesTopBaneer from "../components/PagesBaners/PagesTopBaneer";

export default function Products() {
  return (
    <>
      <div>
        <NavBar />
        <PagesTopBaneer />
        <LocationBar />
      </div>
    </>
  );
}
