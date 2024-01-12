import Image from "next/image";
import { yandexBold } from "@/app/fonts";

export const TableWildberris = ({ headers, products }) => {
  return (
    <div className="p-1 mt-5">
      <table className="md:table-fixed text-[10px] md:text-[15px] text-[#808080] w-full">
        <thead>
          <tr className="border-b border-[#808080]">
            {headers.map((header) => (
              <th
                key={header.id}
                className="md:first:text-left md:first:pl-12 2xl:first:w-[850px] xl:first:w-[500px] md:first:w-[320px] first:max-w-full w-10 md:w-20 xl:w-[100px] "
              >
                <div className={`w-18 p-1 `}>{header.label}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={`${yandexBold.className} border-b hover:bg-gray-50 cursor-pointer`}
            >
              <th>
                <div className="flex flex-wrap md:flex-nowrap md:gap-4 items-center">
                  <Image
                    className="md:w-10"
                    src={product.img}
                    width={24}
                    height={24}
                    alt="product"
                  />
                  <p className="text-[#212529] font-bold md:text-base leading-tight">
                    {product.label}
                  </p>
                </div>
              </th>
              <th align="center">
                <div className="w-14 md:w-20 xl:w-[100px] p-2">
                  <input
                    type="text"
                    className="w-full text-[#212529] text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 border-none focus:ring-2 focus:ring-orange-300 focus:bg-white p-0"
                    defaultValue={0}
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-14 md:w-20 xl:w-[100px] p-2">
                  <input
                    type="text"
                    className="w-full text-[#212529] text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 border-none focus:ring-2 focus:ring-orange-300 focus:bg-white p-0"
                    defaultValue={0}
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1  ">
                  <input
                    type="text"
                    className="w-full text-[#212529] text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 border-none focus:ring-2 focus:ring-orange-300 focus:bg-white p-0"
                    defaultValue={"22 900"}
                  />
                  <div className="text-[#8F8F8F] text-sm flex items-center">
                    ₽
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="check"
                    defaultValue={0}
                    className="w-[17px] h-[17px] text-[#F9CD46] bg-white border-[#bfbfbf] border-2 rounded-[2px] focus:ring-gray-300 focus:ring-0 cursor-pointer relative checked:after:absolute checked:after:bg-[url('/check.svg')] checked:after:top-0 checked:after:w-full checked:after:h-full hover:border-[#8f8f8f]"
                  />
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1">
                  <input
                    type="text"
                    className="w-full text-[#212529] text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 border-none focus:ring-2 focus:ring-orange-300 focus:bg-white p-0"
                    defaultValue={0}
                  />
                  <div className="text-[#8F8F8F] text-sm flex items-center">
                    ₽
                  </div>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
