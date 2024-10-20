function Table({
  headings,
  pageName,
  data,
  columns,
  buttonConfigs
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
          data.map((row) => {
            return (
              <tr key={row._id}>
                {columns.map((col, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap">
                    {row[col]}
                  </td>
                ))}
                {buttonConfigs.map((button, index) => (
                  <td key={index} className="px-8 py-4 whitespace-nowrap">
                    <button
                      
                      onClick={() => button.action(row)}
                      className={`group ${button.styles}`} 
                    >
                      {button.icon(row.isActive)}
                      <span className="bg-[#bdbdbd] p-1 text-[10px] absolute z-10 translate-x-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all ease-in">
                        {button.label}
                      </span>
                    </button>
                  </td>
                ))}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-center">
              No rows
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
