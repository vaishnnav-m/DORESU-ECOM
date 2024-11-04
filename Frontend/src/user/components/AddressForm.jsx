import React from "react";

function AddressForm() {
  return (
    <form className="w-full px-10 flex flex-col gap-9 ">
      <div className="flex gap-3">
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            Name
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            Mobile
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            Pincode
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            House no
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
          Landmark(Optional)
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            City
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            Town
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            Street
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
        <div className="w-full border border-[#8A8A8A] rounded-lg h-[55px] relative">
          <span className="bg-white px-[20px] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
            State
          </span>
          <input
            name="name"
            className="w-full h-full rounded-lg px-5"
            type="text"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[55px] rounded-lg bg-black text-[27px] text-white"
      >
        Add
      </button>
    </form>
  );
}

export default AddressForm;
