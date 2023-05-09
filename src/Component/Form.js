import React, { useState } from "react";
import Input from "../Input";
// import List from "./List";

const Form = (props) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const ProductHandeler = (event) => {
    setProduct(event.target.value);
  };
  const priceHandeler = (event) => {
    setPrice(event.target.value);
  };
  const nameHandeler = (event) => {
    setName(event.target.value);
  };

  const cateHandeler = (event) => {
    setCategory(event.target.value);
  };
  const Product_id = product;
  const Price = price;
  const Name = name;
  //const Category = category

  const obj = [
    "Id :-" + Product_id + "_ " + "Price :-" + Price + "_ " + "Name :-" + Name,
  ];

  const submitHandeler = (event) => {
    event.preventDefault();

    localStorage.setItem("stuff", obj);
    console.log(obj);
    
  };

  return (
    <div>
      <form onSubmit={submitHandeler}>
        <Input
          label="Product_ID"
          type="number"
          id="product"
          onChange={ProductHandeler}
          value={Product_id}
        />
        <Input
          label="Selling Price"
          type="number"
          id="price"
          onChange={priceHandeler}
          value={Price}
        />
        <Input
          label="Product Name"
          type="text"
          id="name"
          onChange={nameHandeler}
          value={Name}
        />

        <div>
          <label>Choose a Category</label>
          <select onChange={cateHandeler} value={category}>
            <option> Electronic</option>
            <option>Food</option>
            <option>Skincare</option>
          </select>
        </div>

        <button>Add Product</button>

        {/* <List/> */}
        <React.Fragment>
          <h1>
            <b>Products</b>
          </h1>
          <h2>
          Electronic Items <p>{category === "Electronic" ? obj : ""}</p>
          </h2>
          <h2>Food Items <p>{category === "Food" ? obj : ""}</p></h2>
          <h2>Skincare Items <p>{category === "Skincare" ? obj : ""}</p></h2>
        </React.Fragment>
      </form>
    </div>
  );
};
export default Form;
