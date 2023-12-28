import Image from "next/image";

export const TableOzon = ({ headers, products }) => {
  return (
    <div className="p-1">
      <table className="md:table-fixed  text-[10px] md:text-[15px] text-gray-500">
        <thead>
          <tr className="border-b">
            {headers.map((header) => (
              <th key={header.id}>
                <div className={`w-18 p-1`}>{header.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th>
                <div className="flex  flex-wrap md:flex-nowrap md:gap-4 items-center">
                  <Image
                    src={product.img}
                    width={24}
                    height={24}
                    alt="product"
                  />
                  <p>{product.label}</p>
                </div>
              </th>
              <th>
                <div className="w-10 p-1 flex justify-center">
                  <input
                    type="text"
                    className="w-8 rounded-md bg-gray-300 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th>
                <div className="w-10 p-1 ">
                  <input
                    type="text"
                    className="w-8 rounded-md bg-gray-300 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th>
                <div className="w-10 p-1 flex items-center gap-1  ">
                  <input
                    type="text"
                    className="w-8 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th>
                <div className="w-10 p-1 flex items-center gap-1  ">
                  <input
                    type="text"
                    className="w-8 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
                  />
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-gray-300 focus:ring-2 "
                  />
                </div>
              </th>
              <th>
                <div className="w-10 p-1 flex items-center gap-1 ">
                  <input
                    type="text"
                    className="w-8 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
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
