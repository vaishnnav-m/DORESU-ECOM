import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useGetUsersQuery, useUpdateUserMutation } from "../../services/adminFethApi";

import Table from "../components/Table";

function AdminUsers() {
  const [updateStatus, setUpdateStatus] = useState(false);
  const { data, isSuccess, isLoading, isError, error } = useGetUsersQuery();
  const headings = [
    "User Id",
    "User Name",
    " Phone",
    " Email",
    "IsActive",
    "Update",
  ];
  const columns = ["_id", "firstName", "phone", "email"];

  const [updateUser] = useUpdateUserMutation();

  async function handleBlock(userId) {
    try {
      const response = await updateUser({ userId });
      if (response) {
       return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-[#E7E7E3] flex h-screen">
      <Aside />
      <main className="w-full">
        <Header />
        <div className="p-5">
          <div>
            <h2 className="text-[24px] font-bold">Customers</h2>
            <span className="text-[16px]">
              Admin <i className="fa-solid fa-angle-right text-sm"></i>{" "}
              Customers
            </span>
          </div>
        </div>
        <div className="p-10">
          <Table
            pageName="User Management"
            headings={headings}
            data={isSuccess && data}
            columns={columns}
            handleBlock={handleBlock}
            setUpdateStatus={setUpdateStatus}
            updateStatus={updateStatus}
          />
        </div>
      </main>
    </div>
  );
}
export default AdminUsers;
