export const InputCheckbox = ({ value }) => {
  return (
    <input
      type="checkbox"
      id="check"
      defaultValue={0}
      value={value}
      className="w-[17px] h-[17px] text-[#F9CD46] bg-white border-[#bfbfbf] border-2 rounded-[2px] focus:ring-gray-300 focus:ring-0 cursor-pointer relative checked:after:absolute checked:after:bg-[url('/check.svg')] checked:after:top-0 checked:after:w-full checked:after:h-full hover:border-[#8f8f8f]"
    />
  );
};
