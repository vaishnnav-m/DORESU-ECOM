import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

function AllProducts() {
  return (
    <>
      <Header />
      <main className="w-full flex px-5 pt-36 justify-center">
        <div className="w-[15%] ">
          <h2 className="text-[20px] font-bold">Filter by categories</h2>
          <form
            className="pl-3 flex flex-col gap-2 font-semibold text-[#484848]"
            action=""
          >
            <div>
              <input className="mr-3" type="checkbox" />
              <label>All Categories</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Men</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Top wears</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Bottom wears</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Shirts</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>T-shirts</label>
            </div>
          </form>
          <h2 className="text-[20px] font-bold mt-5">Filter by price</h2>
          <form
            className="pl-3 flex flex-col gap-2 font-semibold text-[#484848]"
            action=""
          >
            <div>
              <input className="mr-3" type="checkbox" />
              <label>All Prices</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Under ₹ 100</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>₹ 100 to ₹ 500</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>₹ 500 to ₹ 1000</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label>Above ₹ 1000</label>
            </div>
          </form>
          <h2 className="text-[20px] font-bold mt-5">Filter by Ratings</h2>
          <form
            className="pl-3 flex flex-col gap-2 font-semibold text-[#484848]"
            action=""
          >
            <div>
              <input className="mr-3" type="checkbox" />
              <label>All Ratings</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label className="inline-flex text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label className="inline-flex text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label className="inline-flex text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label className="inline-flex text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" />
              <label className="inline-flex text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </div>
          </form>
        </div>
        <div className="max-w-[70%]">
          <Products />
        </div>
      </main>
    </>
  );
}

export default AllProducts;
