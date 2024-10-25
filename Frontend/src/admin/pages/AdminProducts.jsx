import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import {
  useGetProdutsQuery,
  useUpdateProductStatusMutation,
} from "../../services/adminFethApi";
import { toast } from "react-toastify";

function AdminProducts() {
  const navigate = useNavigate();
  const [
    updateProductStatus,
    { isSuccess: statusSuccess, isError: statusError },
  ] = useUpdateProductStatusMutation();
  const { data, isSuccess } = useGetProdutsQuery();

  const headings = [
    "Images",
    "Poduct Name",
    "Description",
    "Stock",
    "Price",
    "Availale",
    "update",
  ];
  const columns = ["productName", "description", "stock", "price"];
  const mainButton = {
    name: "Add Product",
    action: () => {
      navigate("/admin/addProducts");
    },
  };

  const buttonConfigs = [
    {
      label: "Toggle",
      action: handleStatus,
      styles: "text-green-600 text-[30px]",
      icon: (isActive) => (
        <i className={`fas ${isActive ? "fa-toggle-on" : "fa-toggle-off"}`}></i>
      ),
    },
    {
      label: "Edit",
      action: handleEdit,
      styles: "text-[25px]",
      icon: () => <i className="fas  fa-edit"></i>,
    },
  ];
  // function to handleStatus
  async function handleStatus({ _id }) {
    try {
      const response = await updateProductStatus({ productId: _id });
      if (response) {
        toast.success("Product Updated !", {
          position: "top-right",
          theme:"dark",
        });
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // function to handle edit
  function handleEdit(product) {
     navigate(`/admin/editProduct/${product._id}`);
  }

  return (
    <div className="bg-[#E7E7E3] flex h-screen">
      <Aside />
      <main className="w-full">
        <Header />
        <div className="p-10">
            <Table
              pageName={"Products"}
              data={data?.data}
              headings={headings}
              columns={columns}
              buttonConfigs={buttonConfigs}
              imageConfigs={true}
              mainButton={mainButton}
            />
        </div>
      </main>
    </div>
  );
}

export default AdminProducts;
