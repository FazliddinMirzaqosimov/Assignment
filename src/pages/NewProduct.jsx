import React from "react";
import { useState } from "react";
import { useDebounce, uaseSetItems } from "../hooks/useHooks";
import style from "./pages.module.scss";

function NewProduct(props) {
  const { setProducts, products } = props;
  const [type, setType] = useState("cd-disc");
  const [skuStatus, setSkuStatus] = useState({ type: "", text: "" });
  const [blank, setBlank] = useState("size");
  const deboucer = useDebounce();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (skuStatus.type == "error") return;

    let form = new FormData(e.target);
    const newProduct = Object.fromEntries(form.entries());

    uaseSetItems([...products, newProduct]);
    window.location = "/";
  };

  const skuHandler = (e) => {
    const inputValue = e.target.value;

    deboucer(() => {
      const type =
        !products.find((el) => el.SKU === inputValue) && inputValue
          ? "accept"
          : "error";

      setSkuStatus({
        type,
        text: type === "error" ? "SKU is not aviable" : "SKU is OK",
      });
    }, 500);
  };

  return (
    <form
      id="product_form"
      className={style.form}
      action="/"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="sku">SKU: </label>{" "}
        <input
          type="text"
          id="sku"
          name="SKU"
          placeholder="SKU"
          onChange={skuHandler}
          required
        />
      </div>
      <p className={skuStatus.type + " message"}>{skuStatus.text}</p>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="name" placeholder="name" required />
      </div>

      <div>
        <label htmlFor="price">Price: </label>{" "}
        <input
          id="price"
          type="number"
          name="price"
          placeholder="price"
          required
        />
      </div>

      <div>
        <label htmlFor="productType">Type switcher: </label>
        <select
          id="productType"
          name="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="cd-disc">DVD</option>
          <option value="furniture">Furniture</option>
          <option value="book">Book</option>
        </select>
      </div>

      {type === "cd-disc" ? (
        <div>
          <label htmlFor="size">Size: </label>{" "}
          <input
            id="size"
            type="number"
            name="size"
            placeholder="size"
            required
          />
        </div>
      ) : type === "book" ? (
        <div>
          <label htmlFor="weight">Weight: </label>
          <input
            id="weight"
            type="number"
            name="weight"
            placeholder="weight"
            required
          />
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="height">Height: </label>
            <input
              id="height"
              type="number"
              name="height"
              placeholder="height"
              required
            />
          </div>
          <div>
            <label htmlFor="length">Length: </label>{" "}
            <input type="number" name="length" placeholder="length" required />
          </div>
          <div>
            <label htmlFor="width">Width: </label>{" "}
            <input type="number" name="width" placeholder="width" required />
          </div>
        </>
      )}
      <div>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
      {blank ? <p className="error message">Please, provide {blank}</p> : ""}
    </form>
  );
}

export default NewProduct;
