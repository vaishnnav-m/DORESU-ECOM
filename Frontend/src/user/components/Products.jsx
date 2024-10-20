import cardImg from '../assets/image (1).jpg'
import stars from '../assets/stars.svg'
import cart from '../assets/Shopping cart.svg'

function Products() {
  return (
    <div className="w-full px-[15%]">
      <div className="w-full flex justify-between pt-14 px-[50px]">
        <button className="uppercase px-[70px] py-3 max-w-fit text-white text-[13px] bg-black rounded-lg">
          Men's Fashion
        </button>
        <button className="uppercase px-[70px] py-3 max-w-fit text-[#8A8A8A] text-[13px] bg-[#FAFAFA] rounded-lg">
          T-shirts
        </button>
        <button className="uppercase px-[70px] py-3 max-w-fit text-[#8A8A8A] text-[13px] bg-[#FAFAFA] rounded-lg">
          Shirts
        </button>
        <button className="uppercase px-[70px] py-3 max-w-fit text-[#8A8A8A] text-[13px] bg-[#FAFAFA] rounded-lg">
          Hoodies
        </button>
        <button className="uppercase px-[70px] py-3 max-w-fit text-[#8A8A8A] text-[13px] bg-[#FAFAFA] rounded-lg">
          Hoodies
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 py-8 text-[25px]">
        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex pt-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px] ">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[320px] py-2 shadow-md rounded-lg">
          <div>
            <img src={cardImg} alt="" />
          </div>
          <div className="flex py-2 gap-4">
            <div className="flex-1 flex flex-col gap-2 text-[#484848]">
              <span className="text-[15px] ">Pretty Fashionable Men...</span>
              <span className="text-[9px]">(4.1k) Customer Reviews</span>
              <span className="text-[8px] px-2 py-1 bg-[#F0F0F0] w-fit rounded-full">
                free delivery
              </span>
              <span className="font-bold pt-2 text-[19px]">₹287</span>
            </div>
            <div className="h-full flex flex-col justify-between pt-[10px]">
              <img src={stars} alt="" />
              <div className="flex gap-4">
                <img src={cart} alt="" />
                <i className='fa-regular fa-heart '></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
