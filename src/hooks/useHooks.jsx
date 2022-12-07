import { useState } from "react";

function useGetItems() {
  return JSON.parse(localStorage.getItem("products"));
}

function uaseSetItems(data) {
  return localStorage.setItem("products", JSON.stringify(data));
}

function useDebounce() {
  const [timeouter, setTimouter] = useState();

  function deboucer(func, wait) {
    clearTimeout(timeouter);
    const newTimeOut = setTimeout(func, wait);
    setTimouter(newTimeOut);
  }
  return deboucer;
}

export { uaseSetItems, useGetItems, useDebounce };
