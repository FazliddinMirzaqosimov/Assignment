import React from "react";
import style from "./comp.module.scss";

function ProductCard({ product }) {
  return (
    <div className={style.card}>
      <input
        type="checkbox"
        name=""
        className="delete-checkbox"
        data-id={product.SKU}
      />
      <p>{product.SKU}</p>
      <h3>{product.name}</h3>
      <p>Price: {product.price} $</p>
      <p>
        {product.type === "cd-disc"
          ? `Size: ${product.size}`
          : product.type === "book"
          ? `Weight: ${product.weight}`
          : `Dimention: ${product.height}x${product.width}x${product.length}`}
      </p>
      <br />{" "}
    </div>
  );
}

export default ProductCard;
