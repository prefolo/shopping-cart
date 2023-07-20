import React, { useState, useEffect } from "react";
import images from "../images";
import formattedPrice from "../utils/PriceFormatter";

const Product = ({ item, cart, setCart, setItemIDsInCartHandler }) => {
  let count = 0;

  const euroFormatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  });

  for (const storedId of cart) if (storedId == item.id) count++;

  const [itemcount, setItemcount] = useState(-1);

  useEffect(() => {
    // cicla cart per impostare il colore sui box dei products
    const uniqueIds = [...new Set(cart)];
    const productBoxes = Array.from(document.querySelectorAll(".product"));

    uniqueIds.forEach((id) => {
      const productBox = productBoxes.filter(
        (b) => b.dataset.productbox == id
      )[0];

      if (productBox) productBox.style.backgroundColor = "#9eff9e";
    });
  }, [cart]);

  function incrementCount(e) {
    const newCount = itemcount == -1 ? count + 1 : itemcount + 1;

    setItemcount(newCount);
    setItemIDsInCartHandler(e.currentTarget.dataset.id, newCount);

    if (newCount > 0) {
      const productBoxes = Array.from(document.querySelectorAll(".product"));

      const productBox = productBoxes.filter(
        (b) => b.dataset.productbox == item.id
      )[0];

      productBox.style.backgroundColor = "#9eff9e";
    }
  }

  function decrementCount(e) {
    const newCount = itemcount == -1 ? count - 1 : itemcount - 1;
    if (newCount == -1) return;

    setItemcount(newCount);
    setItemIDsInCartHandler(e.currentTarget.dataset.id, newCount);

    if (newCount == 0) {
      const productBoxes = Array.from(document.querySelectorAll(".product"));

      const productBox = productBoxes.filter(
        (b) => b.dataset.productbox == item.id
      )[0];

      productBox.style.backgroundColor = "#f6f6f6";
    }
  }

  return (
    <div className="product" data-productbox={item.id}>
      <p className="title">{item.title}</p>
      <p className="brand">{item.brand}</p>

      <img src={images[item.thumbnail]} />
      <p className="price">{`${formattedPrice(item.price)} €`}</p>
      <div className="button-container">
        <button
          data-id={item.id}
          className="button-remove"
          onClick={decrementCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="22"
            viewBox="0 -960 960 960"
            width="22"
          >
            <path d="M272-447h416v-73H272v73ZM479.542-64Q394.36-64 318.52-97.02q-75.84-33.02-132.16-89.34-56.32-56.32-89.34-132.291T64-480q0-86.272 33.079-162.149 33.079-75.878 89.686-132.47 56.606-56.592 132.216-88.986Q394.59-896 479.557-896q86.329 0 162.512 32.395 76.183 32.394 132.557 89Q831-718 863.5-641.958q32.5 76.041 32.5 162.5 0 85.458-32.395 160.797-32.394 75.338-88.986 131.921-56.592 56.582-132.616 89.661Q565.979-64 479.542-64Z" />
          </svg>
        </button>
        <input
          data-id={item.id}
          type="storedIdber"
          min="0"
          value={itemcount == -1 ? count : itemcount}
          onChange={(e) => {
            if (!e.target.value) return;
            const newCount = e.target.value * 1;
            console.log(newCount);
            setItemcount(newCount);
            setItemIDsInCartHandler(e.target.dataset.id, newCount);
          }}
        />
        <button
          data-id={item.id}
          className="button-add"
          onClick={incrementCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="22"
            viewBox="0 -960 960 960"
            width="22"
          >
            <path d="M447-272h73v-167h168v-73H520v-176h-73v176H272v73h175v167Zm32.808 208q-85.916 0-161.522-33.02T186.36-186.36q-56.32-56.32-89.34-132.132Q64-394.303 64-480.5q0-86.09 33.079-161.809 33.079-75.718 89.686-132.31 56.606-56.592 132.056-88.986Q394.271-896 480.057-896q86.148 0 162.172 32.395 76.023 32.394 132.397 89Q831-718 863.5-641.958 896-565.917 896-479.724q0 86.192-32.395 161.297-32.394 75.104-88.986 131.502-56.592 56.399-132.616 89.662Q565.979-64 479.808-64Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
