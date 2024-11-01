import React from "react";
import Header from "../components/Header";

function UserProfile() {
  return (
    <div className="pt-[200px] flex justify-center">
      <Header />
      <main className="w-[70%] flex gap-10">
        <div className="flex flex-col w-[340px] gap-10">
          <div className="w-full border flex gap-5 px-5 py-2 rounded-lg">
            <div className="px-4 py-3 rounded-full  bg-[#eaeaea]">
              <i className="far fa-user text-xl"></i>
            </div>
            <div>
              <span className="font-semibold text-[18px] block">Vaishnnav</span>
              <span className="text-[#8a8a8a]">vaishnnav58@gmail.com</span>
            </div>
          </div>
          <div className="w-full h-full border px-8 py-3 text-[#8a8a8a] rounded-lg">
            <ul>
              <li className="flex items-center gap-8 border-b py-5">
                <i className="fas fa-user text-xl text-black"></i>
                <span className="font-semibold text-[20px]">
                  Account Settings
                </span>
              </li>
              <li className="flex items-center gap-8 border-b py-5">
                <i className="fas fa-address-book text-xl text-black"></i>
                <span className="font-semibold text-[20px]">
                  Manage Addresses
                </span>
              </li>
              <li className="flex items-center gap-8 border-b py-5">
                <i className="fas fa-bag-shopping text-xl text-black"></i>
                <span className="font-semibold text-[20px]">My Orders</span>
              </li>
              <li className="flex items-center gap-8 border-b py-5">
                <i className="fas fa-wallet text-xl text-black"></i>
                <span className="font-semibold text-[20px]">My Wallet</span>
              </li>
              <li className="flex items-center gap-8  py-5">
                <i className="fas fa-right-from-bracket text-xl text-black"></i>
                <span className="font-semibold text-[20px]">Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center border px-10 py-5 flex-1">
          <h2 className="text-[20px] font-bold ">Profile Information</h2>
          <form className="flex flex-col gap-5 w-full" action="">
            <label className="text-18px font-semibold">Name</label>
            <div className="flex gap-5">
              <input
                className="rounded border border-[#8a8a8a] px-5 py-3 w-full"
                type="text"
              />
              <input
                className="rounded border border-[#8a8a8a] px-5 py-3 w-full"
                type="text"
              />
            </div>
            <label className="text-18px font-semibold">Name</label>
            <input
              className="rounded border border-[#8a8a8a] px-5 py-3 w-full"
              type="email"
            />
            <label className="text-18px font-semibold">Phone</label>
            <input
              className="rounded border border-[#8a8a8a] px-5 py-3 w-full"
              type="text"
            />
            <label className="text-18px font-semibold">Password</label>
            <input
              className="rounded border border-[#8a8a8a] px-5 py-3 w-full"
              type="text"
            />
            <button
              type="submit"
              className="w-full h-[55px] rounded-lg bg-black text-[27px] text-white"
            >
              Update
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
