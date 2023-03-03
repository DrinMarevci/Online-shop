import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">Welcome to Drini's Shop</h1>
            <p>
              I'm super excited about creating responsive websites and eager to learn new programming tools and languages.
              It's my passion and I know that to succeed in this field,
              I need to stay updated with the latest technologies and constantly improve my skills,
              I used React to build this shop, but I'm open to other programming languages. 
              I'm determined to keep pursuing my passion for web development and I really appreciate your encouragement!
            </p>
          </div>
        </div>
        <div className="row">
          {PRODUCTS.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <Product data={product} />
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <h2>Contact me for more information</h2>
            <p>
              Phone: +38344999302 | Email: drinmarevci2002@gmail.com | GitHub:{" "}
              <a href="https://github.com/DrinMarevci" target="_blank" rel="noopener noreferrer">
                DrinMarevci
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
