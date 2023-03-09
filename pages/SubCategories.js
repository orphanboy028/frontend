import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SubCategoriesPageComponent from "../components/CategoriesComponent/SubCategoriesPageComponent";
import NavBar from "../components/NavBar/NavBar";
import PagesTopBaneer from "../components/PagesBaners/PagesTopBaneer";

export default function SubCategories() {
  return (
    <>
      <div>
        <NavBar />
        <Breadcrumb />
        <PagesTopBaneer />
        <SubCategoriesPageComponent />
      </div>
    </>
  );
}
