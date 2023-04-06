import React from "react";
import Product from "../Product/Product";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-7xl rounded mx-auto bg-slate-500 ">
      <h1 className="text-center text-3xl font-bold bg-red-300 py-4">
        Total Food Itmes: {data.length}
      </h1>
      <div className="grid md:grid-cols-3">
        <div className="pt-10 md:col-span-2">
          {data.map((product) => (
            <Product product={product} key={product.idCategory}></Product>
          ))}
        </div>
        <div className="bg-orange-500">
          <h1 className="col-span-1">hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Products;
