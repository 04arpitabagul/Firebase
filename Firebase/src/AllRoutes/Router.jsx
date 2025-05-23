import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Private from "../Components/private";
import AddProduct from "../Components/AddProduct";
import Products from "../Components/Products";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/Products"
          element={
            <Private>
              <Products />
            </Private>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default Router;
