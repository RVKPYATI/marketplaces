import Image from "next/image";

export const TableWildberris = ({ headers, products }) => {
  return (
    <div className="p-1 mt-5">
      <table className="md:table-fixed text-[10px] md:text-[15px] text-[#808080] md:w-full">
        <thead>
          <tr className="border-b">
            {headers.map((header) => (
              <th
                key={header.id}
                className="md:first:text-left md:first:pl-20 md:first:w-[650px]"
              >
                <div className={`w-18 p-1 `}>{header.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th>
                <div className="flex flex-wrap md:flex-nowrap md:gap-4 items-center">
                  <Image
                    className="md:w-10"
                    src={product.img}
                    width={24}
                    height={24}
                    alt="product"
                  />
                  <p className="text-[#212529] md:text-base">{product.label}</p>
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-28 p-1 flex justify-center">
                  <input
                    type="text"
                    className="w-8 md:w-24 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-28 p-1 ">
                  <input
                    type="text"
                    className="w-8 md:w-24 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-28 p-1 flex items-center gap-1  ">
                  <input
                    type="text"
                    className="w-8 md:w-24 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                  &nbsp; &#8381;
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-2 cursor-pointer"
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-28 p-1 flex items-center gap-1 ">
                  <input
                    type="text"
                    className="w-8 md:w-24 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                  &nbsp; &#8381;
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
