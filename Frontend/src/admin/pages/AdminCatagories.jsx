import React, { useState } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Table from "../components/Table";
import { useAddCategoryMutation, useGetCategoriesQuery, useUpdateCategoryStatusMutation } from "../../services/adminFethApi";

function AdminCatagories() {
  // table stuff
  const columns = ["categoryName","description"];
  const headings = ["Catagory","description", "Status", "Update"];

  const {data,error} = useGetCategoriesQuery();
  if(error){
    console.log("error in fetching",error);
  }
  // form stuff
  const [catagory, setCategory] = useState({
    categoryName: "",
    description: "",
  });
  const [addcategory, { error: addError,isError, isLoading, isSuccess }] =
    useAddCategoryMutation();

  function handleChange(e) {
    setCategory({
      ...catagory,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addcategory(catagory).unwrap();
    if(isSuccess){
      setCategory({ categoryName: "", description: "" })
    }
  }

  
  // function to update status of the category
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateCategory] = useUpdateCategoryStatusMutation();
  async function handleStatus(userId) {
    try {
      const response = await updateCategory({ userId }).unwrap();
      if (response) {
       return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-[#E7E7E3] flex min-h-screen">
      <Aside />
      <main className="w-full">
        <Header />
        <div className="p-5">
          <div>
            <h2 className="text-[24px] font-bold">Catagories</h2>
            <span className="text-[16px]">
              Admin <i className="fa-solid fa-angle-right text-sm"></i>{" "}
              Catagories
            </span>
          </div>
        </div>
        <div className="p-10">
          <Table
            pageName="Catagory Management"
            headings={headings}
            data={data}
            columns={columns}
            setUpdateStatus={setUpdateStatus}
            updateStatus={updateStatus}
            handleStatus={handleStatus}
          />
        </div>

        <div className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="min-w-[700px] flex flex-col gap-9 p-20  justify-center"
          >
            <div className="w-full border border-[#8A8A8A] rounded-lg h-[60px] relative">
              <span className="bg-[#e7e7e3] px-[20px] py-[12] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
                Category
              </span>
              <input
                onChange={handleChange}
                value={catagory.categoryName}
                name="categoryName"
                className="w-full h-full rounded-lg px-5 bg-transparent"
                type="text"
              />
            </div>
            <div className="w-full border border-[#8A8A8A] rounded-lg h-[60px] relative">
              <span className="bg-[#e7e7e3] px-[20px] py-[12] text-center text-[#737373] absolute left-5 top-0 -translate-y-[50%]">
                Description
              </span>
              <input
                onChange={handleChange}
                value={catagory.description}
                name="description"
                className="w-full h-full rounded-lg px-5 bg-transparent"
                type="text"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[60px] rounded-lg bg-black text-[27px] text-white"
            >
              {isLoading ? "Adding..." : "Add"}
            </button>
            {isError && (
              <span className="text-red-500">
                {addError?.data?.message || "Adding failed"}
              </span>
            )}

            {isSuccess && (
              <span className="text-green-500">Added successfuly</span>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminCatagories;
