import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import stars from "../assets/stars.svg";
import { useGetProductQuery } from "../../services/userProductsApi";

function ProductDetail() {
  const { productId } = useParams();
  const { data: product } = useGetProductQuery(productId);
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    if (product && product.data) {
      setProductData(product.data);
    }
  }, [product]);

  const getShortenedSize = (size) => {
    switch (size.toLowerCase()) {
      case "medium":
        return "M";
      case "small":
        return "S";
      case "large":
        return "L";
      case "extra large":
        return "XL";
      default:
        return size; 
    }
  };

  return (
    <div>
      <Header />
      <main className="w-full flex flex-col py-20 gap-20 items-center">
        <div className="flex gap-5 max-w-[70%]">
          <div className="flex-1 flex gap-3">
            <div className="max-w-[100px] flex flex-col gap-2">
              {productData?.gallery.map((product, index) => (
                <div key={index}>
                  <img src={product.url} alt="" />
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full h-[472px] border">
                <img
                  className="w-full h-full object-contain"
                  src={productData?.gallery[0].url}
                  alt=""
                />
              </div>
              <div className="w-full flex gap-5 text-20px] font-bold">
                <button className="w-full py-4 border border-black flex gap-3 justify-center items-center rounded-xl">
                  <i className="fas fa-cart-shopping"></i>Add to Cart
                </button>
                <button className="w-full py-4 bg-black text-white rounded-xl">
                  Buy Now
                </button>
              </div>
              <div className="pt-5">
                <h2 className="text-[18px]">Similar Products</h2>
                <div className="flex justify-between gap-2">
                  {productData?.gallery.map((product, index) => (
                    <div
                      className="max-w-[200px] max-h-[200px] border"
                      key={index}
                    >
                      <img className="w-full h-full" src={product.url} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col gap-5">
            <div className="w-full border rounded-xl p-5 flex flex-col shadow-lg gap-2">
              <span className="text-[18px] font-semibold text-[#8A8A8A] uppercase">
                {productData?.productName}
              </span>
              <h2 className="text-[32px] font-bold">
                {productData?.variants[0].price}
              </h2>
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
                {productData?.variants.map((variant,index) => {
                  return (
                    <span key={index} className="w-fit p-5 border border-[#b8b8b8] rounded-xl">
                      {getShortenedSize(variant.size)}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="w-full border rounded-xl p-5 flex flex-col shadow-lg gap-2 text-[#8A8A8A]">
              <span className="text-[18px] text-black">Product Details</span>
              <span>Name:{productData?.productName}</span>
              <span>Net Quantity (N) :1</span>
              <span>Sizes: {productData?.variants.map((variant) => getShortenedSize(variant.size)+" " )}</span>
              <span>{productData?.description}</span>
              <span>Country of Origin : India</span>
              <span>More Information</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 min-w-[70%]">
          <div className="min-w-fit">
            <span className="text-[18px] font-semibold">
              Write the product review
            </span>
            <button className="w-full mt-2 flex justify-center items-center gap-2 border p-2">
              <i className="fas fa-plus"></i>
              <span className="text-nowrap">Add Review</span>
            </button>
          </div>
          <div className="w-full flex gap-20">
            <div className="border flex-1 p-5 flex flex-col gap-5 ">
              <div className="text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div>
                <span className="text-[20px] font-bold block">
                  Review Title
                </span>
                <span className="text-[16px]">Review Body</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>
                  <span className="text-[14px] text-[#8A8A8A] font-semibold block">
                    Reviewer Name
                  </span>
                  <span className="text-[12] text-[#8A8A8A]">date</span>
                </span>
              </div>
            </div>
            <div className="border flex-1 p-5 flex flex-col gap-5">
              <div className="text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div>
                <span className="text-[20px] font-bold block">
                  Review Title
                </span>
                <span className="text-[16px]">Review Body</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>
                  <span className="text-[14px] text-[#8A8A8A] font-semibold block">
                    Reviewer Name
                  </span>
                  <span className="text-[12] text-[#8A8A8A]">date</span>
                </span>
              </div>
            </div>
            <div className="border flex-1 p-5 flex flex-col gap-5">
              <div className="text-[#fca120]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div>
                <span className="text-[20px] font-bold block">
                  Review Title
                </span>
                <span className="text-[16px]">Review Body</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>
                  <span className="text-[14px] text-[#8A8A8A] font-semibold block">
                    Reviewer Name
                  </span>
                  <span className="text-[12] text-[#8A8A8A]">date</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
