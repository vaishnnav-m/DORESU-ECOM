import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";

function AdminProducts() {
  return (
    <div className="bg-[#E7E7E3] flex h-screen">
      <Aside />
      <main className="w-full">
        <Header />
      <div className="p-5">
          <div>
            <h2 className="text-[24px] font-bold">Products</h2>
            <span className="text-[16px]">
             Admin <i className="fa-solid fa-angle-right text-sm"></i> Products
            </span>
          </div>
        </div>
        <div className="p-10">
          <table className="min-w-full text-left divide-y divide-gray-200 bg-white rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <td colSpan="6" className="bg-white p-5 border-b">
                  <div className="w-full flex justify-between items-center text-[20px]">
                    <h2 className="font-bold">Products Management</h2>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Poduct Name
                </th>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Product Id
                </th>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Availale
                </th>
                <th className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider">
                  Update
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200  text-[14px] font-semibold">
              {/* <tr>
                 <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-center">
                   No users
                   </td>
               </tr> */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">name</td>
                <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                <td className="px-6 py-4 whitespace-nowrap">0</td>
                <td className="px-6 py-4">₹200.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl">
                  <i className="fa-solid fa-toggle-on"></i>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xl flex gap-5">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">name</td>
                <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                <td className="px-6 py-4 whitespace-nowrap">100</td>
                <td className="px-6 py-4 items-center ">₹200.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl">
                  <i className="fa-solid fa-toggle-on"></i>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xl flex gap-5">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">name</td>
                <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                <td className="px-6 py-4 whitespace-nowrap">10</td>
                <td className="px-6 py-4 items-center ">₹200.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-2xl">
                  <i className="fa-solid fa-toggle-on"></i>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5 text-xl">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminProducts;
