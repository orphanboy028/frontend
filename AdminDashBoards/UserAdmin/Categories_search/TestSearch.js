import React, { useEffect, useState } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import { MultiSelect } from "react-multi-select-component";
import style from "./css/CategoriesSearch.module.css";
import { CategoriesContext } from "../../../ContaxtApi/categoriesContextApi";
import { useContext } from "react";

// const categories = [
//   {
//     categoryName: "Electronics",
//     subCategory: [
//       {
//         subCategoryName: "Computers",
//         lefCategory: [
//           { lefCategoryName: "laptop" },
//           { lefCategoryName: "Desktops" },
//         ],
//       },
//       {
//         subCategoryName: "TV & Video",
//         lefCategory: [
//           { lefCategoryName: "LED TVs" },
//           { lefCategoryName: "Smart TVs" },
//         ],
//       },
//     ],
//   },
//   {
//     categoryName: "Clothing",
//     subCategory: [
//       {
//         subCategoryName: "Men",
//         lefCategory: [
//           { lefCategoryName: "Shirts" },
//           { lefCategoryName: "Pants" },
//         ],
//       },
//       {
//         subCategoryName: "Women",
//         lefCategory: [
//           { lefCategoryName: "Dresses" },
//           { lefCategoryName: "Skirts" },
//         ],
//       },
//     ],
//   },
// ];

export default function TestSearch() {
  const {
    categories,
    leafCategoryz,
    setLeafCategoryz,
    categoriesz,
    setCategoriesz,
    subcategoriesz,
    setSubcategoriesz,
    getCategories,
  } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
  }, []);

  const handleLeafCategoryChange = (event) => {
    const selectedLeafCategory = event.target.value;
    setLeafCategoryz(selectedLeafCategory);

    // method-2
    categories.forEach((category) => {
      category.subCategory.forEach((subCategory) => {
        const foundLefCategory = subCategory.lefCategory.find(
          (lefCategory) => lefCategory.lefCategoryName === selectedLeafCategory
        );
        if (foundLefCategory) {
          setCategoriesz(category.categoryName);
          setSubcategoriesz(subCategory.subCategoryName);
          console.log(`Selected leaf category: ${selectedLeafCategory}`);
          console.log(`Category: ${category.categoryName}`);
          console.log(`Subcategory: ${subCategory.subCategoryName}`);
        }
      });
    });

    // Find the category and subcategory based on the selected leaf category

    // Set the state for categories and subcategories based on the selected leaf category;
  };

  return (
    <div>
      <UserAdminLayOut>
        <div>
          <label htmlFor="leafCategory">Select a leaf category:</label>
          <select id="leafCategory" onChange={handleLeafCategoryChange}>
            <option value="">Select a leaf category</option>
            {categories.map((category) =>
              category.subCategory.map((subcategory) =>
                subcategory.lefCategory.map((leafcategory) => (
                  <option
                    key={leafcategory.lefCategoryName}
                    value={leafcategory.lefCategoryName}
                  >
                    {leafcategory.lefCategoryName}
                  </option>
                ))
              )
            )}
          </select>

          <br />
          <br />
          <div>
            <label htmlFor="categories">Categories:</label>

            <div>{categoriesz}</div>
          </div>
          <div>
            <label htmlFor="subcategories">Subcategories:</label>

            <div key={subcategoriesz}>{subcategoriesz}</div>
          </div>

          <div className={style.form_container}>Form Part</div>
        </div>
      </UserAdminLayOut>
    </div>
  );
}
