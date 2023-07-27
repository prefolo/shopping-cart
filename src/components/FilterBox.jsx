import React, { useState } from "react";
import data from "../data/products.json";

const FilterBox = ({
  checkedBrands,
  checkedCategories,
  setCheckedBrands,
  setCheckedCategories,
  brands,
  categories,
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
    <div id="filters-container">
      <div className="filter-box">
        <p>Marca</p>
        <fieldset id="brandFieldset">{checksBrands}</fieldset>
        <div className="check-commands-container">
          <a href="#" onClick={checkBrandsHandler}>
            tutto
          </a>
          <a href="#" onClick={uncheckBrandsHandler}>
            nessuno
          </a>
        </div>
      </div>

      <div className="filter-box">
        <p>Categoria</p>
        <fieldset id="categoryFieldset">{checksCategories}</fieldset>
        <div className="check-commands-container">
          <a href="#" onClick={checkCategoriesHandler}>
            tutto
          </a>
          <a href="#" onClick={uncheckCategoriesHandler}>
            nessuno
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
