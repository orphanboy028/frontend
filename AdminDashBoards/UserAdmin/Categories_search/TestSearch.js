import React, { useEffect, useState } from "react";
import UserAdminLayOut from "../UserAdminLayOut";
import { MultiSelect } from "react-multi-select-component";

const categories = [
  {
    name: "Electronics",
    subcategories: [
      {
        name: "Computers",
        leafcategories: ["Laptops", "Desktops"],
      },
      {
        name: "TV & Video",
        leafcategories: ["LED TVs", "Smart TVs"],
      },
    ],
  },
  {
    name: "Clothing",
    subcategories: [
      {
        name: "Men",
        leafcategories: ["Shirts", "Pants"],
      },
      {
        name: "Women",
        leafcategories: ["Dresses", "Skirts"],
      },
    ],
  },
];

export default function TestSearch() {
  const [selectedLeafCategory, setSelectedLeafCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleLeafCategoryChange = (event) => {
    // Get the selected leaf category
    const selectedLeafCategory = event.target.value;

    // Find the subcategory and category objects
    const subcategory = categories
      .find((category) =>
        category.subcategories.some((subcategory) =>
          subcategory.leafcategories.includes(selectedLeafCategory)
        )
      )
      .subcategories.find((subcategory) =>
        subcategory.leafcategories.includes(selectedLeafCategory)
      );

    const category = categories.find((category) =>
      category.subcategories.includes(subcategory)
    );

    // Set the state with the selected values
    setSelectedLeafCategory(selectedLeafCategory);
    setSelectedSubcategory(subcategory.name);
    setSelectedCategory(category.name);

    // Log the results
    console.log(`Selected category: ${category.name}`);
    console.log(`Selected subcategory: ${subcategory.name}`);
    console.log(`Selected leaf category: ${selectedLeafCategory}`);
  };

  return (
    <div>
      <UserAdminLayOut>
        <div>
          <div>
            <label htmlFor="leaf-categories-select">Leaf categories:</label>
            <select
              id="leaf-categories-select"
              onChange={handleLeafCategoryChange}
            >
              <option value="">Select a leaf category</option>
              {categories.map((category) =>
                category.subcategories.map((subcategory) =>
                  subcategory.leafcategories.map((leafcategory) => (
                    <option value={leafcategory} key={leafcategory}>
                      {leafcategory} ({subcategory.name}, {category.name})
                    </option>
                  ))
                )
              )}
            </select>
          </div>
        </div>
      </UserAdminLayOut>
    </div>
  );
}
