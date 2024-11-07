import React from "react";
import Header from "../components/Header";

function PaymentPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-[200px]">
      <Header />
      <main className="w-[70%] flex items-center gap-10 shadow-xl py-10 px-10"></main>
    </div>
  );
}

export default PaymentPage;
