import Image from "next/image";

export const TableWildberris = ({ headers, products }) => {
  return (
    <div className="p-1 mt-5">
      <table className="md:table-fixed text-[10px] md:text-[15px] text-[#808080] w-full">
        <thead>
          <tr className="border-b">
            {headers.map((header) => (
              <th
                key={header.id}
                className="md:first:text-left md:first:pl-20 2xl:first:w-[850px] xl:first:w-[500px] md:first:w-[320px] first:max-w-full"
              >
                <div className={`w-18 p-1 `}>{header.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <th>
                <div className="flex flex-wrap md:flex-nowrap md:gap-4 items-center">
                  <Image
                    className="md:w-10"
                    src={product.img}
                    width={24}
                    height={24}
                    alt="product"
                  />
                  <p className="text-[#212529] md:text-base ">
                    {product.label}
                  </p>
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-18 xl:w-24 p-1">
                  <input
                    type="text"
                    className="w-8 md:w-16 xl:w-20 text-[#212529] text-center rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                    defaultValue={0}
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-20 xl:w-24 p-1 ">
                  <input
                    type="text"
                    className="w-8 md:w-16 xl:w-20 text-[#212529] text-center rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                    defaultValue={0}
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-20 xl:w-24 p-1 flex items-center gap-1  ">
                  <input
                    type="text"
                    className="w-8 md:w-16 xl:w-20 text-[#212529] text-center rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                    defaultValue={0}
                  />
                  &nbsp; &#8381;
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    defaultValue={0}
                    className="w-4 h-4 text-orange-400 bg-ehite border-gray-300 border-2 rounded focus:ring-gray-300 focus:ring-2 cursor-pointer"
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-10 md:w-20 xl:w-24 p-1 flex items-center gap-1 ">
                  <input
                    type="text"
                    className="w-8 md:w-16 xl:w-20 text-[#212529] text-center rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                    defaultValue={0}
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
