import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import MainCategoriesPageComponent from "../components/CategoriesComponent/MainCategoriesPageComponent";
import NavBar from "../components/NavBar/NavBar";
import PagesTopBaneer from "../components/PagesBaners/PagesTopBaneer";

export default function Category() {
  return (
    <>
      <div>
        <NavBar />
        <Breadcrumb />
        <PagesTopBaneer />
        <MainCategoriesPageComponent />
      </div>
    </>
  );
}
