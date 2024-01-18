import { yandexRegular } from "@/app/fonts";
export const InputText = ({ value, defaultValue = 0, st }) => {
  return (
    <input
      type="text"
      className={`${style} ${yandexRegular.className} w-full text-[#000000] font-semibold text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 focus:ring-2 focus:ring-orange-300 focus:bg-white p-0`}
      defaultValue={defaultValue}
      value={value}
    />
  );
};
