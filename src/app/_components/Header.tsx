import React, { memo } from "react";
import Cart from "../assets/icons/Cart";
import Search from "../assets/icons/Search";

const Header = () => {
  return (
    <div className="mx-7">
      <div className="flex justify-end">
        <ul className="flex flex-row">
          <li className="p-3">Help</li>
          <li className="p-3">Orders & Returns</li>
          <li className="p-3">Hi, John</li>
        </ul>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold">ECOMMERCE</h1>
        </div>
        <div>
          <ul className="flex flex-row font-semibold">
            <li className="p-3">Categories</li>
            <li className="p-3">Sale</li>
            <li className="p-3">Clearance</li>
            <li className="p-3">New Stock</li>
            <li className="p-3">Trending</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="mx-5 my-3">
              <Search />
            </div>
            <div className="mx-5 my-3">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
