import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./comp.module.scss";

function NavBar({ massDelete }) {
  const isHome = useLocation().pathname == "/";

  return (
    <nav className={style.navbar}>
      <h1 className="nav__title">Product {isHome ? "List" : "Add"} </h1>
      <div className="nav__left">
        {isHome ? (
          <>
            <Link to="add-product">
              <button className="nav__add-btn">ADD</button>
            </Link>
            <button id="delete-product-button" onClick={massDelete}>
              MASS DELETE
            </button>
          </>
        ) : (
          <>
            <Link to="/">
              <button className="nav__add-btn">Cancel</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
