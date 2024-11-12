import Header from "../components/Header";
import UserProfileAside from "../components/UserProfileAside";

function UserOrderDetails() {
  return (
    <div className="pt-[200px] flex justify-center">
      <Header />
      <main className="w-[70%] flex gap-10">
        <UserProfileAside />
        <div className="flex flex-col items-center gap-11 border px-10 py-5 flex-1">
          <h2 className="text-[20px] font-bold ">Order Dtails</h2>
          <div className="w-full">
            <div className="w-full px-5 py-2 bg-[#f0f0f0] flex justify-between">
              <div>
                <span>Order Status </span>
              </div>
              <div>
                <span>Order Id: </span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 px-5 py-7 border-b">
              <div className="flex justify-between gap-5">
                <div className="h-[100px] border">
                  <img
                    className="w-full h-full object-contain"
                    src=""
                    alt="product image"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold">
                    product name
                  </span>
                  <span className="text-[15px]">Colour: White</span>
                </div>
                <div>
                  <span>Quantity</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span className="font-semibold text-[20px]">₹287</span>
                  <div>
                    <button className="px-5 py-2 rounded-lg bg-orange-300">
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-[#737373]">Order Date:</span>
                <span className="flex flex-col px-4 gap-2 text-green-400">
                  <i className="far fa-circle text-[8px]" />
                  <i className="far fa-circle text-[8px]" />
                  <i className="far fa-circle text-[8px]" />
                  <span>
                    <i className="far fa-circle-check text-[16px] -translate-x-1" />

                    <span className="text-black">
                      <span>Delivered On Aug 13</span>
                      <span className="block text-[15px] pl-4">
                        Your Item has Delivered
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="min-h-full flex flex-col justify-between ">
                <span>item(s) Subtotal:</span>
                <span className="font-semibold">Total For this Order:</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <h2 className="font-semibold text-[20px]">Shipping Details</h2>
            <div className="flex gap-10">
              <div className="flex flex-col font-semibold text-[#484848]">
                <span>Vaishnnav</span>
                <span>PHone nu</span>
              </div>
              <div className="flex flex-col font-medium text-[#8A8A8A]">
                <span>thadukkassery</span>
                <span>palakkad - 678613</span>
                <span>kerala</span>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserOrderDetails;
