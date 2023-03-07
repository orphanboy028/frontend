import React from "react";
import style from "./css/ProductPage.module.css";

const realatedCategoriesList = [
  {
    name: "Hydraulic Fixtures",
  },
  {
    name: "Machining Fixtures",
  },
  {
    name: "Glass Fixture",
  },
  {
    name: "Fluorescent Lighting",
  },
  {
    name: "HID Fixture",
  },
  {
    name: "Recessed Lighting",
  },
  {
    name: "Ceiling Light Fixture",
  },
  {
    name: "Holding Fixtures",
  },
  {
    name: "Turning Fixture",
  },
  {
    name: "Boring Fixture",
  },
];

export default function RelatedCategories() {
  const renderRealtedCategoriesList = () => {
    return realatedCategoriesList.map((el, i) => {
      return (
        <>
          <div className={style.RelatedCategories_list_Box}>
            <p>{el.name}</p>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className={style.RelatedCategories_container}>
        <h2>Related categories </h2>
        {renderRealtedCategoriesList()}
      </div>
    </>
  );
}
