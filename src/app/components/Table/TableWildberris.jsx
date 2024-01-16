import Image from "next/image";
import { yandexBold } from "@/app/fonts";
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
                <div className="w-14 md:w-20 xl:w-[80px] p-2">
                  <InputText style="bg-white border-2 border-gray-200 focus:border-none hover:bg-white" />
                </div>
              </th>
              <th align="center">
                <div className="w-14 md:w-20 xl:w-[100px] p-2">
                  <InputText style="bg-white border-2 border-gray-200 focus:border-none hover:bg-white" />
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1  ">
                  <InputText defaultValue={"22 900"} style={"border-none"} />
                  <div className="text-[#8F8F8F] text-sm flex items-center">
                    ₽
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <InputCheckbox />
                </div>
              </th>
              <th align="center">
                <div className="w-16 md:w-20 xl:w-[100px] p-2 flex items-center gap-1">
                  <InputText style=" border-none " />
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
