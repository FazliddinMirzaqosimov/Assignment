import React from "react";
import ProductCard from "../components/ProductCard";
import style from "./pages.module.scss";

function HomePage(props) {
  const { products } = props;
  return (
    <div className={style.cards}>
      {products.map((product) => (
        <ProductCard product={product} key={product.SKU} />
      ))}
    </div>
  );
}

export default HomePage;
