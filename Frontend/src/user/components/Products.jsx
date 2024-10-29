import cardImg from "../assets/image (1).jpg";
import stars from "../assets/stars.svg";
import cart from "../assets/Shopping cart.svg";
import { useGetProuductsQuery } from "../../services/userProductsApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  // query to fetch products
  const {
    data: products,
    isLoading: isProductsLoading,
    isSuccess: isProductsSuccess,
    isError: isProductsError,
    error: productsError,
  } = useGetProuductsQuery();

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-5 py-8 text-[25px]">
        {isProductsSuccess &&
          products.data.map((product) => {
            return (
              <Link to={`/productDetail/${product._id}`}  key={product._id}>
                <div
                 
                  className="flex flex-col items-center max-w-[320px] py-2 px-4 shadow-md rounded-lg"
                >
                  <div className="w-[280px] h-[280px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full "
                      src={product.gallery[0]}
                      alt=""
                    />
                  </div>
                  <div className="flex py-4 gap-4">
                    <div className="flex-1 flex flex-col gap-2 text-[#484848]">
                      <span className="text-[15px] font-bold truncate max-w-[188px]">
                        {product.productName}
                      </span>
                      <span className="text-[13px]">
                        (4.1k) Customer Reviews
                      </span>
                      <span className="text-[13px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                        free delivery
                      </span>
                      <span className="font-bold pt-2 text-[19px]">
                        ₹{product.variants[0].price}
                      </span>
                    </div>
                    <div className="min-h-full flex flex-col justify-between pt-[10px] ">
                      <img src={stars} alt="" />
                      <div className="flex gap-4">
                        <img src={cart} alt="" />
                        <i className="fa-regular fa-heart "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
