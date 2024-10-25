import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import stars from "../assets/stars.svg";
import { useGetProductQuery } from "../../services/userProductsApi";

function ProductDetail() {
  const { productId } = useParams();
  const { data: product } = useGetProductQuery(productId);
  const productData = product?.data;

  return (
    <div>
      <Header />
      <main className="w-full flex py-20 justify-center">
        <div className="flex gap-5 max-w-[70%]">
          <div className="flex-1 flex gap-3">
            <div className="max-w-[100px] flex flex-col gap-2">
              { productData?.gallery.map((product, index) => (
                <div key={index}>
                  <img src={product.url} alt="" />
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-5">
               <div className="w-full h-[472px] border">
                  <img className="w-full h-full object-contain" src={productData?.gallery[0].url} alt="" />
               </div>
              <div className="w-full flex gap-5 text-20px] font-bold">
                <button className="w-full py-4 border border-black flex gap-3 justify-center items-center rounded-xl">
                  <i className="fas fa-cart-shopping"></i>Add to Cart
                </button>
                <button className="w-full py-4 bg-black text-white rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col gap-5">
            <div className="w-full border rounded-xl p-5 flex flex-col shadow-lg gap-2">
              <span className="text-[18px] font-semibold text-[#8A8A8A] uppercase">
                Printed Polyester Tshirt
              </span>
              <h2 className="text-[32px] font-bold">₹195</h2>
              <div className="flex gap-2 items-center">
                <img src={stars} alt="" />
                <span className="text-[13px] text-[#8A8A8A] pt-2">
                  (4.1k) Customer Reviews
                </span>
              </div>
              <span className="text-[13px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
            </div>
            <div className="w-full border rounded-xl p-5 flex flex-col shadow-lg gap-2">
              <span className="text-[18px]">Select Size</span>
              <div className="flex gap-3">
                <span className="w-fit p-5 border border-[#b8b8b8] rounded-xl">
                  S
                </span>
                <span className="w-fit p-5 border border-[#b8b8b8] rounded-xl">
                  M
                </span>
                <span className="w-fit p-5 border border-[#b8b8b8] rounded-xl">
                  L
                </span>
                <span className="w-fit p-5 border border-[#b8b8b8] rounded-xl">
                  XL
                </span>
              </div>
            </div>
            <div className="w-full border rounded-xl p-5 flex flex-col shadow-lg gap-2 text-[#8A8A8A]">
              <span className="text-[18px] text-black">Product Details</span>
              <span>Name:Printed Polyester Tshirt</span>
              <span>Fabric:Polyster</span>
              <span>Sleve Length:Short Sleeves</span>
              <span>Pattern: Printed</span>
              <span>Net Quantity (N) :1</span>
              <span>Sizes:L Xl</span>
              <span>
                This cool t-shirts for men is made from polyester which is
                pre-shrunk and bio-washed for longevity is a perfect treat for
                Men & Boys who like to move out in style.
              </span>
              <span>Country of Origin : India</span>
              <span>More Information</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
