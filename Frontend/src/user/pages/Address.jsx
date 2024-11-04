import React from "react";
import UserProfileAside from "../components/UserProfileAside";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();
  return (
    <div className="pt-[200px] flex justify-center">
      <Header />
      <main className="w-[70%] flex gap-10">
        <UserProfileAside />
        <div className="flex flex-col items-center border rounded-lg gap-10 px-10 py-5 flex-1">
          <h2 className="text-[20px] font-bold">Manage Addresses</h2>
          <div className="w-full">
            <button
              onClick={() => navigate("/profile/addAddress")}
              className="w-full rounded-lg border-2  px-10 py-5 text-[18px] uppercase font-semibold text-start"
            >
              <i className="fas fa-plus mr-3"></i>Add a new address
            </button>
          </div>
          <div className="w-full px-10 py-5 border-2 rounded-lg flex flex-col gap-5">
            <h2 className="text-[18px] font-semibold">Default Address</h2>
            <div className="text-[17px] font-semibold text-[#484848]">
              <span className="mr-5">Vaishnnav</span>
              <span>9072811675</span>
              <div className="text-[16px] text-[#8A8A8A]">
                <span>
                  thadukkassery palakkad kerala, kongad, kerala, 678613, India
                </span>
              </div>
            </div>
            <div className="flex gap-5 justify-end">
              <button className="px-5 py-3 border rounded-lg">
                Set As Default
              </button>
              <button className="px-5 py-3 border rounded-lg">Edit</button>
              <button className="px-5 py-3 bg-black rounded-lg text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Address;
