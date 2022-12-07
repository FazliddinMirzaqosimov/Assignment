import React from "react";
import HomePage from "./pages/HomePage";
import NewProduct from "./pages/NewProduct";
import { useGetItems, uaseSetItems } from "./hooks/useHooks";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// const datas = [
//   {
//     SKU: "121_123e_WEr23",
//     name: "wooden table",
//     price: 213,
//     type: "furniture",
//     height: 100,
//     width: 300,
//     length: 120,
//   },
//   {
//     SKU: "121_f23e_WEr23",
//     name: "wooden table",
//     weight: 12,
//     type: "Book",
//   },
//   {
//     SKU: "121_1sdf3e_WEr23",
//     name: "disc",
//     size: 213,
//     type: "DVD-disc",
//   },
// ];

function App() {
  const datas = useGetItems();
  const [products, setProducts] = useState(datas);

  const massDelete = function () {
    const allSKUs = Array.from(
      document.querySelectorAll(".delete-checkbox:checked")
    ).map((el) => el.dataset.id);

    const filteredProducts = products.filter(
      (product) => !allSKUs.includes(product.SKU)
    );

    setProducts(filteredProducts);
    uaseSetItems(filteredProducts);
  };

  return (
    <div className="App">
      <NavBar massDelete={massDelete} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="add-product"
            element={
              <NewProduct setProducts={setProducts} products={products} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
