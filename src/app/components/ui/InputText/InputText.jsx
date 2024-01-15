export const InputText = ({ value, defaultValue = 0, style }) => {
  return (
    <input
      type="text"
      className={`${style} w-full text-[#000000] text-center text-xs md:text-[15px] rounded-md bg-gray-200 hover:bg-gray-300 h-9 focus:ring-2 focus:ring-orange-300 focus:bg-white p-0`}
      defaultValue={defaultValue}
      value={value}
    />
  );
};
