import React, { useEffect, useState } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import { MultiSelect } from "react-multi-select-component";
import style from "./css/CategoriesSearch.module.css";
import { CategoriesContext } from "../../../ContaxtApi/categoriesContextApi";
import { useContext } from "react";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";
import ProductImageUplode from "./ProductImageUplode";
import CommanFormInput from "./CommanFormInput";

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
const formFields1 = [
  { id: 1, label: "Product Name", name: "name", type: "text" },
  { id: 2, label: "price", name: "price", type: "text" },
  { id: 3, label: "description", name: "description", type: "textarea" },
];

const formFields2 = [
  { label: "Product Name", name: "name", type: "text" },
  { label: "price", name: "price", type: "text" },
  { label: "Frequency", name: "Frequency", type: "text" },
  {
    label: "Materla",
    name: "Materla",
    type: "radio",
    options: ["PLastic", "matel", "Other"],
  },
  {
    label: "Interests",
    name: "interests",
    type: "checkbox",
    label: "Interests",
  },
  { label: "description", name: "description", type: "textarea" },
];

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

  const { handelSubmit } = useContext(ProductContext);

  // const [formData, setformData] = useState(formFields1);

  // useEffect(() => {
  //   if (leafCategoryz == "Industrial Machinery") {
  //     setformData(formFields1);
  //   } else if (leafCategoryz == "SPM Machine") {
  //     setformData(formFields2);
  //   }
  // }, [leafCategoryz]);

  useEffect(() => {
    // setformData(formFields2);
    getCategories();
  }, []);

  const handleInputChange = (e) => {
    console.log(values);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const renderFormFields = () => {
    return formData.map((field) => {
      if (field.type === "textarea") {
        return (
          <div className={style.formBox}>
            <label key={field.name}>
              {field.label}
              <textarea
                name={field.name}
                value={field[values.description]}
                onChange={handleInputChange}
              />
            </label>
          </div>
        );
      }

      if (field.type === "radio") {
        return (
          <div key={field.name} className={style.formBox}>
            <p>{field.label}</p>
            {field.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={formData[field.name] === option}
                  onChange={handleInputChange}
                />
                {option}
              </label>
            ))}
          </div>
        );
      }

      if (field.type === "checkbox") {
        return (
          <div className={style.formBox}>
            <label key={field.name}>
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] || false}
                onChange={handleInputChange}
              />
              {field.label}
            </label>
          </div>
        );
      }

      return (
        <div className={style.formBox}>
          <div>
            <label key={field.name}>{field.label}</label>
          </div>
          <div>
            <input
              type={field.type}
              name={field.name}
              value={field[values.name]}
              onChange={handleInputChange}
            />
          </div>
        </div>
      );
    });
  };

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
          // console.log(`Selected leaf category: ${selectedLeafCategory}`);
          // console.log(`Category: ${category.categoryName}`);
          // console.log(`Subcategory: ${subCategory.subCategoryName}`);
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

          <div>
            <label htmlFor="Lefcategories">Lefcategories:</label>

            <div key={subcategoriesz}>{leafCategoryz}</div>
          </div>

          <div className={style.form_container}>
            <div className={style.form_inner_container}>
              {formFields1.map((input) => (
                <CommanFormInput key={input.id} {...input} />
              ))}
            </div>
            <div style={{ margin: "10px" }}>
              <button onClick={handelSubmit}>submit</button>
            </div>
            <ProductImageUplode />
          </div>
        </div>
      </UserAdminLayOut>
    </div>
  );
}
