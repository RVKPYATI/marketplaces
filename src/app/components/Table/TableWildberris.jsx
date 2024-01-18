import Image from "next/image";
import { yandexBold, yandexRegular } from "@/app/fonts";
import { InputCheckbox } from "../ui/InputCheckbox/InputCheckbox";
import { InputText } from "../ui/InputText/InputText";

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
              className={`${yandexBold.className} font-bold border-b hover:bg-gray-50 cursor-pointer`}
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
                  <p className="text-[#212529]  md:text-base leading-tight">
                    {product.label}
                  </p>
                </div>
              </th>
              <th align="center">
                <div className="w-14 md:w-20 xl:w-[100px] p-2">
                  <InputText style="bg-white border-none focus:border-none hover:bg-white" />
                </div>
              </th>
              <th align="center">
                <div className="w-14 md:w-20 xl:w-[100px]">
                  <span
                    className={`${yandexRegular.className} text-[#000000] font-semibold text-center text-xs md:text-[15px]`}
                  >
                    0
                  </span>
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1 relative">
                  <div className="text-[#8F8F8F] text-sm flex items-center after:absolute after:content-['₽'] after:top-[35%] after:right-[-4px] after:w-2 after:h-2">
                    <InputText defaultValue={"22 900"} style={"border-none"} />
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <InputCheckbox />
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1 relative">
                  <div className="text-[#8F8F8F] text-sm flex items-center after:absolute after:content-['₽'] after:top-[35%] after:right-[-4px] after:w-2 after:h-2">
                    <InputText style={"border-none"} />
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
