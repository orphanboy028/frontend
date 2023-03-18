import React from "react";
import CategoriesSearchComponent from "../../AdminDashBoards/UserAdmin/Categories_search/CategoriesSearchComponent";
import TestSearch from "../../AdminDashBoards/UserAdmin/Categories_search/TestSearch";
import Private from "../../AdminDashBoards/UserAdmin/Private";

export default function CategoriesSearch() {
  return (
    <>
      <Private>
        <div>
          {/* <CategoriesSearchComponent /> */}
          <TestSearch />
        </div>
      </Private>
    </>
  );
}
