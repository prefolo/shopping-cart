import React, { useState } from "react";
import data from "../data/products.json";

const FilterBox = ({
  checkedBrands,
  checkedCategories,
  setCheckedBrands,
  setCheckedCategories,
  brands,
  categories,
  productsSortOrder,
  setProductsSortOrder,
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
          Ordina per
          <br />
          <br />
          <div id="sort-container">
            <select
              id="sort-select"
              value={productsSortOrder}
              onChange={(e) => setProductsSortOrder(e.target.value)}
            >
              <option value="title">Nome</option>
              <option value="brand">Marca</option>
              <option value="price">Prezzo</option>
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
        Filtra
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
    </>
  );
};

export default FilterBox;
