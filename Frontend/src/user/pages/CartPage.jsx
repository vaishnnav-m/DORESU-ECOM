import Header from "../components/Header";

function CartPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-[200px]">
      <Header />
      <main className="w-[70%] flex items-center gap-10">
        <div className="flex-1">
          <table className="w-full table-fixed">
            <tr className="px-6 py-4 text-center  border-b border-gray-300">
              <td className="px-8 py-4">
               <div className="flex gap-10">
                <div className="w-[95px] h-[115px] flex-shrink-0">
                  <img className="w-full h-full" src="http://localhost:3000/uploads/products/1730035982253.webp" alt="roduct Image" />
                </div>
                <div className=" flex flex-col justify-between py-2 text-start">
                  <span className="truncate max-w-[188px] font-semibold">Trendy Half Sleeves Hoodie T-Shirt Mustard Yellow with Anime Eyes Print</span>
                  <span className="pl-[8px]"><i className="fas fa-x"></i> <span>Remove</span></span>
               </div>
               </div>
              </td>
              <td className="px-8 py-4 ">
               <span className="text-[25px] font-bold">₹195</span>
              </td>
              <td className="px-8 py-4 ">
               <div className="flex items-center gap-4">
                  <i className="fas fa-minus"></i>
                  <input className="w-[72px] h-[38px] px- text-center border border-black" value="2" type="text" />
                  <i className="fas fa-plus"></i>
               </div>
              </td>
            </tr>
            
          </table>
        </div>
        <div className="border border-black flex flex-col rounded-xl gap-10 p-10">
            <span className="text-[25px] font-semibold">Sub Total (1 item):₹195</span>
            <button className="bg-black text-white px-5 text-2xl py-2 rounded-lg">Check Out</button>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
