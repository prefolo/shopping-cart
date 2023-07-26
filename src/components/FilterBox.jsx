import React, { useState } from "react";
import data from "../data/products.json";

const FilterBox = ({ a, b }) => {
  const brands = ["Tutto", ...new Set(data.products.map((p) => p.brand))];
  const categories = [
    "Tutto",
    ...new Set(data.products.map((p) => p.category)),
  ];

  const [checkedBrandsState, setCheckedBrandsState] = useState(
    new Array(brands.length).fill(true)
  );

  const [checkedCategoriesState, setCheckedCategoriesState] = useState(
    new Array(categories.length).fill(true)
  );

  const onChangeBrands = (position) => {
    const updatedCheckedState = checkedBrandsState.map((boolValue, index) =>
      index === position ? !boolValue : boolValue
    );

    setCheckedBrandsState(updatedCheckedState);
  };

  const onChangeCategories = (position) => {
    const updatedCheckedState = checkedCategoriesState.map((boolValue, index) =>
      index === position ? !boolValue : boolValue
    );

    setCheckedCategoriesState(updatedCheckedState);
  };

  const checksBrands = brands.map((b, i) => {
    return (
      <div key={i}>
        <input
          onChange={() => onChangeBrands(i)}
          type="checkbox"
          id={b}
          name={b}
          checked={checkedBrandsState[i]}
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
          checked={checkedCategoriesState[i]}
        />
        <label htmlFor={c}>{b}</label>
      </div>
    );
  });

  return (
    <div id="filter-box">
      <p>Filtra</p>

      <p>Marca</p>
      <fieldset>{checksBrands}</fieldset>
      <p>Categoria</p>
      <fieldset>{checksCategories}</fieldset>
    </div>
  );
};

export default FilterBox;
