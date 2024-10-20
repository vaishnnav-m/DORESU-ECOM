function Table({
  headings,
  pageName,
  data,
  columns,
  handleStatus,
  setUpdateStatus,
  updateStatus,
}) {
  return (
    <table className="min-w-full text-left divide-y divide-gray-200 bg-white rounded-2xl overflow-hidden">
      <thead>
        <tr>
          <td colSpan="6" className="bg-white p-5 border-b">
            <div className="w-full flex justify-between items-center text-[20px]">
              <h2 className="font-bold">{pageName}</h2>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </td>
        </tr>
        <tr>
          {headings.map((heading, index) => {
            return (
              <th
                key={index}
                className="px-6 py-3 text-[16px] font-semibold text-gray-500 uppercase tracking-wider"
              >
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200  text-[14px] font-semibold">
        {/*  */}

        {data ? (
          data.map((user) => {
            return (
              <tr key={user._id}>
                {columns.map((col, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap">
                    {user[col]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.isActive ? "Active" : "Not Active"}
                </td>
                <td className="px-10 py-4 whitespace-nowrap relative">
                  {" "}
                  <button
                    onClick={() => setUpdateStatus(user)}
                    className="text-[30px] text-green-600 group"
                  >
                    <i
                      className={`fas ${
                        user.isActive ? "fa-toggle-on" : "fa-toggle-off"
                      }`}
                    ></i>
                    <span className="bg-[#bdbdbd] p-1 text-[10px] absolute z-10 translate-x-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all ease-in">
                      {user.isActive ? "Active" : "Not Active"}
                    </span>
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-center">
              No users
            </td>
          </tr>
        )}
      </tbody>
      {updateStatus && (
        <div className="absolute left-1/2 top-1/2 min-w-[700px] min-h-[200px] pt-5 flex flex-col justify-between text-[20px] font-semibold border border-[#d3d3d3] bg-[#f0f0f0] -translate-x-[50%]">
          <span className="px-4 ">
            Are you sure to {updateStatus.isActive ? "block" : "unblock"} the
            user ?
          </span>
          <div className="flex w-full bg-[#e9e9e9] justify-end py-3 border border-t- gap-5">
            <button
              className="text-[20px] font-medium border border-[#d3d3d3] px-5 py-1"
              onClick={() => setUpdateStatus(false)}
            >
              Cancel
            </button>
            <button
              className="text-[20px] font-medium bg-red-600 px-5 py-1"
              onClick={() => setUpdateStatus(!handleStatus(updateStatus._id))}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </table>
  );
}

export default Table;
