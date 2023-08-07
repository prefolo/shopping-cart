import React, { useState } from "react";

const FilterBox = ({
  checkedBrands,
  checkedCategories,
  setCheckedBrands,
  setCheckedCategories,
  brands,
  categories,
  sortOrder,
  setSortOrder,
  checkedSort,
  setCheckedSort,
}) => {
  const onChangeBrands = (position) => {
    const updatedCheckedState = checkedBrands.map((boolValue, index) =>
      index === position ? !boolValue : boolValue
    );

    setCheckedBrands(updatedCheckedState);
  };

  const onChangeCategories = (position) => {
    const updatedCheckedState = checkedCategories.map((boolValue, index) =>
      index === position ? !boolValue : boolValue
    );

    setCheckedCategories(updatedCheckedState);
  };

  const onChangeSort = () => {
    setCheckedSort(!checkedSort);
  };

  const checksBrands = brands.map((b, i) => {
    return (
      <div key={i}>
        <input
          onChange={() => onChangeBrands(i)}
          type="checkbox"
          id={b}
          name={b}
          checked={checkedBrands[i]}
        />
        <label htmlFor={b}>{b}</label>
      </div>
    );
  });

  const checksCategories = categories.map((b, i) => {
    let c = b;
    if (b == "Tutto") c = "Tutto2";

    return (
      <div key={i}>
        <input
          onChange={() => onChangeCategories(i)}
          type="checkbox"
          id={c}
          name={c}
          checked={checkedCategories[i]}
        />
        <label htmlFor={c}>{b}</label>
      </div>
    );
  });

  function checkBrandsHandler() {
    setCheckedBrands(new Array(checkedBrands.length).fill(true));
  }

  function uncheckBrandsHandler() {
    setCheckedBrands(new Array(checkedBrands.length).fill(false));
  }

  function checkCategoriesHandler() {
    setCheckedCategories(new Array(checkedCategories.length).fill(true));
  }

  function uncheckCategoriesHandler() {
    setCheckedCategories(new Array(checkedCategories.length).fill(false));
  }

  return (
    <>
      <div id="filters-container">
        <div id="sort-select-box">
          Sorting
          <br />
          <br />
          <div id="sort-container">
            <select
              id="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="title">Name</option>
              <option value="brand">Brand</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
            <input
              onChange={() => {
                onChangeSort();
              }}
              type="checkbox"
              id="sort-checkbox"
              checked={checkedSort}
              name="sort-checkbox"
            />
            <label className="checkLabel" htmlFor="sort-checkbox"></label>
          </div>
        </div>
        Filter
        <div className="filter-box">
          <p>Brand</p>
          <fieldset id="brandFieldset">{checksBrands}</fieldset>
          <div className="check-commands-container">
            <a href="#" onClick={checkBrandsHandler}>
              all
            </a>
            <a href="#" onClick={uncheckBrandsHandler}>
              none
            </a>
          </div>
        </div>
        <div className="filter-box">
          <p>Category</p>
          <fieldset id="categoryFieldset">{checksCategories}</fieldset>
          <div className="check-commands-container">
            <a href="#" onClick={checkCategoriesHandler}>
              all
            </a>
            <a href="#" onClick={uncheckCategoriesHandler}>
              none
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBox;
